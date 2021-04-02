import React, {  useEffect } from "react";
import { Form } from "react-bootstrap";
// import "./userprofile.scss";
import { useForm } from "react-hook-form";
// import MultiSelect from "react-multi-select-component";
import { useDispatch, useSelector } from "react-redux";
// import { UserActionTypes } from "redux/actions/UserActions/actionType";
import * as userActions from "redux/actions/UserActions";
import { serialize } from "object-to-formdata";
import storage from "utils/storage";
// import { useHistory } from "react-router-dom";

export const SaartghiprofileForm= ({ handelClose }) => {
  // const [selected, setSelected] = useState([]);
  const dispatch = useDispatch();
  // const history = useHistory();
  const { userDetails } = useSelector((state) => state.userReducer);
  // const [langInput, setLangInput] = useState(false)
  // const [otherInput, setOtherInput] = useState('')

  useEffect(() => {
    loadProfile();
  }, []);
  const loadProfile = () => {
    reset(userDetails);
  };

  // const options = [
  //   { label: "Hindi ", value: "Hindi" },
  //   { label: "English ", value: "English" },
  //   { label: "Tamil ", value: "Tamil" },
  // ];
  const { register, handleSubmit, reset } = useForm();
 
  const update = (val) => {
    console.log(val);
    let data = { ...val, profile_status: 1, _id: storage.get("humlog_user") };
    const formData = serialize(data);

    dispatch(userActions.updateUserData({ formData }))
      .then((res) => {
        if (res.value.success) {
          console.log(res.value.message);
        
        }
      })
      .catch((err) => console.log(err));

    console.log(val);
    reset();
    handelClose();
  };

  return (
    <>
      <div className="main_userinputprofile personal-info-form">
        <div className="row no-gutters">
          <div className="col-12  pt-1">
            <div></div>
            <h2 className="prnl_head_aa px-3"> Personal Information</h2>

            <div>
              <Form onSubmit={handleSubmit(update)}>
                <div className="px-3">
                  <Form.Group controlId="formGroupEmail">
                    <Form.Label className="lbl_a">Mobile number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=" +91-7566985174"
                      className="input_fld"
                      name="contact"
                      ref={register}
                    />
                  </Form.Group>

                  <Form.Group controlId="formGroupEmail">
                    <Form.Label className="lbl_a">Date of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder=""
                      className="input_fld"
                      ref={register}
                      name="dob"
                    />
                  </Form.Group>

                  <label className="lbl_a"> Gender</label>
                  <div className="d-flex justify-content-between">
                    <div className="form-check detail_btn_ca text-center">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="gender"
                        id="male"
                        value="1"
                        ref={register}
                      />
                      <label className="form-check-label lw" for="male">
                        Male
                      </label>
                    </div>

                    <div className="form-check detail_btn_ca text-center">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="gender"
                        id="female"
                        value= "0"
                        ref={register}
                      />
                      <label className="form-check-label lw" for="female">
                        Female
                      </label>
                    </div>
                  </div>

             

              
               

              

                

             
                  
                </div>
                <div className="btn_bdr py-2 px-2  bbc mb-5">
                  <button className="common_btn"> Save </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
