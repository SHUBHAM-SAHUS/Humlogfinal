import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
// import "./userprofile.scss";
import { useForm } from "react-hook-form";
import MultiSelect from "react-multi-select-component";
import { useDispatch, useSelector } from "react-redux";
// import { UserActionTypes } from "redux/actions/UserActions/actionType";
import * as userActions from "redux/actions/UserActions";
import { serialize } from "object-to-formdata";
import storage from "utils/storage";
import { useHistory } from "react-router-dom";

export const SaarthiProfileEdit = ({ handelClose }) => {
  const [selected, setSelected] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const { userDetails } = useSelector((state) => state.userReducer);
  const [langInput, setLangInput] = useState(false)
  const [otherInput, setOtherInput] = useState('')

  useEffect(() => {
    loadProfile();
  }, []);
  const loadProfile = () => {
    reset(userDetails);
  };

  const options = [
    { label: "Hindi ", value: "Hindi" },
    { label: "English ", value: "English" },
    { label: "Tamil ", value: "Tamil" },
  ];
  const { register, handleSubmit, reset } = useForm();
  // const updateProfile=(data)=> {
  // formData = {...data, addresss: {currentLocation: data.currentLocation, localLoCATION: DATA.LOCATlOCATION}}
  //
  // }

  const update = (val) => {
    console.log(val);
    let data = { ...val, profile_status: 1, _id: storage.get("humlog_user") };
    const formData = serialize(data);

    dispatch(userActions.updateUserData({ formData }))
      .then((res) => {
        if (res.value.success) {
          console.log(res.value.message);
          //  history.push("/user/basicdetail/jobinterested")
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
                  

                

                  
               

                  <div className="mt-3"></div>

               

                  <Form.Group controlId="formGroupEmail" className="mt-3">
                    <Form.Label className="lbl_a">Name </Form.Label>
                    <Form.Control
                      type="text"
                      name=""
                      ref={register}
                      placeholder="Enter your name"
                    />
                  </Form.Group>

                  <Form.Group controlId="formGroupEmail" className="mt-3">
                    <Form.Label className="lbl_a">
                      {" "}
                       Location{" "}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="location"
                      ref={register}
                      name="address_work"
                    />
                  </Form.Group>

               


              

                  {langInput && <div className="mt-1">
               
                  </div>}


           

                  
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
