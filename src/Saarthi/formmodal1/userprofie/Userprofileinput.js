import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import "./userprofile.scss";
import { useForm } from "react-hook-form";
import MultiSelect from "react-multi-select-component";
import { useDispatch, useSelector } from "react-redux";
// import { UserActionTypes } from "redux/actions/UserActions/actionType";
import * as userActions from "redux/actions/UserActions";
import { serialize } from "object-to-formdata";
import storage from "utils/storage";
import { useHistory } from "react-router-dom";

export const Userprofileinput = ({ handelClose }) => {
  const [selected, setSelected] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const { userDetailsById } = useSelector((state) => state.userReducer);
  const [langInput, setLangInput] = useState(false)
  const [otherInput, setOtherInput] = useState('')

  useEffect(() => {
    loadProfile();
  }, []);
  const loadProfile = () => {
    reset(userDetailsById);
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
    let data = { ...val, profile_status: 1, contact:userDetailsById.contact, _id:userDetailsById._id };
    const formData = serialize(data);

    dispatch(userActions.upsertUserData({ formData }))
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
                  {/* <Form.Group controlId="formGroupEmail">
                    <Form.Label className="lbl_a">Mobile number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=" +91-7566985174"
                      className="input_fld"
                      name="contact"
                      ref={register}
                    />
                  </Form.Group> */}

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

                  <div className="mt-3"></div>

                  <Form.Group controlId="formGroupEmail" className="mt-3">
                    <Form.Label className="lbl_a">
                      {" "}
                      Current Location{" "}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="address_current"
                      ref={register}
                      placeholder="Type your district here"
                    />
                  </Form.Group>

                  <Form.Group controlId="formGroupEmail" className="mt-3">
                    <Form.Label className="lbl_a">Home Location </Form.Label>
                    <Form.Control
                      type="text"
                      name="address_home"
                      ref={register}
                      placeholder="Type your district here"
                    />
                  </Form.Group>

                  <Form.Group controlId="formGroupEmail" className="mt-3">
                    <Form.Label className="lbl_a">
                      {" "}
                      Preferred Work Location{" "}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="location"
                      ref={register}
                      name="address_work"
                    />
                  </Form.Group>

               

                  <div className="form-group mt-2 mb-2">
                    <Form.Label className="d-flex justify-content-start  lbl_a">
                      Languages I know
                    </Form.Label>

                    <div className="d-flex justify-content-between">
                      <div className="form-check detail_btn_cm text-center mr-2">
                        <input
                          className="form-check-input d-none"
                          type="checkbox"
                          name="language_known"
                          id="Hindi"
                          value="Hindi"
                          ref={register}
                        />
                        <label
                          className="form-check-label lw py-1 text-capitalize"
                          for="Hindi"
                        >
                          Hindi
                        </label>
                      </div>

                      <div className="form-check detail_btn_cm text-center mr-2">
                        <input
                          className="form-check-input d-none"
                          type="checkbox"
                          name="language_known"
                          id="English"
                          value="English"
                          ref={register}
                        />
                        <label
                          className="form-check-label  lw py-1 text-capitalize"
                          for="English"
                        >
                          English
                        </label>
                      </div>

                      <div className="form-check detail_btn_cm text-center mr-2">
                        <input
                          className="form-check-input d-none fw"
                          type="checkbox"
                          name="language_known"
                          id="Punjabi"
                          value="Punjabi"
                          ref={register}
                        />
                        <label
                          className="form-check-label lw py-1 text-capitalize"
                          for="Punjabi"
                        >
                          Punjabi
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between">
                    <div className="form-check detail_btn_cm text-center mr-2">
                      <input
                        className="form-check-input d-none fw"
                        type="checkbox"
                        name="language_known"
                        id="Haryanvi"
                        value=" Haryanvi"
                        ref={register}
                      />
                      <label
                        className="form-check-label lw py-1 text-capitalize"
                        for="Haryanvi"
                      >
                        Haryanvi
                      </label>
                    </div>

                    <div className="form-check detail_btn_cm text-center mr-2">
                      <input
                        className="form-check-input d-none fw"
                        type="checkbox"
                        name="language_known"
                        id="Rajasthani"
                        value="Rajasthani"
                        ref={register}
                      />
                      <label
                        className="form-check-label lw py-1 text-capitalize"
                        for="Rajasthani"
                      >
                        Rajasthani
                      </label>
                    </div>

                    <div className="form-check detail_btn_cm text-center mr-2">
                      <input
                        className="form-check-input d-none fw"
                        type="checkbox"
                        name="language_known"
                        id="Other"
                        value = {otherInput}
                        ref={register}
                      />
                      <label
                        className="form-check-label lw py-1 text-capitalize"
                        for="Other" onClick = {()=>setLangInput(!langInput)}
                      >
                        Other
                      </label>
                    </div>
                  </div>

                  {langInput && <div className="mt-1">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        onInput= {(e)=> setOtherInput(e.target.value)}
                        placeholder="Enter your language"
                        value = {otherInput}
                      />
                    </Form.Group>
                  </div>}


                  <div className="form-group mt-2">
                    <Form.Label className="d-flex justify-content-start  lbl_a">
                      Speak English
                    </Form.Label>

                    <div className="d-flex justify-content-between">
                      <div className="form-check detail_btn_cm text-center mr-2">
                        <input
                          className="form-check-input d-none"
                          type="radio"
                          name="speak_english"
                          id="No English"
                          value="No"
                          ref={register}
                        />
                        <label
                          className="form-check-label lw py-1 text-capitalize"
                          for="No"
                        >
                          No 
                        </label>
                      </div>

                      <div className="form-check detail_btn_cm text-center mr-2">
                        <input
                          className="form-check-input d-none"
                          type="radio"
                          name="speak_english"
                          id="Thoda"
                          value="Thoda"
                          ref={register}
                        />
                        <label
                          className="form-check-label lw py-1 text-capitalize"
                          for="Thoda"
                        >
                          Thoda
                        </label>
                      </div>

                      <div className="form-check detail_btn_cm text-center mr-2">
                        <input
                          className="form-check-input d-none"
                          type="radio"
                          name="speak_english"
                          id="Good"
                          value="Good"
                          ref={register}
                        />
                        <label
                          className="form-check-label lw py-1 text-capitalize"
                          for="Good"
                        >
                          Good
                        </label>
                      </div>
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
