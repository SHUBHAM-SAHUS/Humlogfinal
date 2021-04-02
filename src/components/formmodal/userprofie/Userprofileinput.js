import React, { useState, useEffect } from "react";
import moment from "moment";
import { Form } from "react-bootstrap";
import "./userprofile.scss";
import { useForm } from "react-hook-form";
// import MultiSelect from "react-multi-select-component";
import { useDispatch, useSelector } from "react-redux";

import * as userActions from "redux/actions/UserActions";
import { serialize } from "object-to-formdata";
import storage from "utils/storage";
import { useHistory } from "react-router-dom";
// import classNames from "classnames";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { DistrictList } from "components/jobseeker/DistrictList";

export const Userprofileinput = ({ handelClose }) => {

  // const [selected, setSelected] = useState([]);
  const dispatch = useDispatch();
  // const history = useHistory();
  const { userDetails } = useSelector((state) => state.userReducer);
  const [langInput, setLangInput] = useState(false);
  const [otherInput, setOtherInput] = useState("");
  const now = moment().subtract(18, "years").format("YYYY-MM-DD");

 






  

  useEffect(() => {
    loadProfile();
  }, []);
  const loadProfile = () => {
    let data = userDetails;
    data.gender = String(userDetails.gender);
    data.address_current = (userDetails.address_current);
    

    reset(data);
  };

  const DistrictListt = DistrictList.sort();
  // const options = [
  //   { label: "Hindi ", value: "Hindi" },
  //   { label: "English ", value: "English" },
  //   { label: "Tamil ", value: "Tamil" },
  // ];
  const { register, handleSubmit, reset, errors } = useForm({
    mode: "onBlur",
  });
 

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
          <div className="col-12  pt-1 pb-2">
            <div></div>
            <h2 className="prnl_head_aa px-3"> Personal Information</h2>

            <div>
              <Form onSubmit={handleSubmit(update)}>
                <div className="px-3">
             

                  <Form.Group controlId="formGroupEmail">
                    <Form.Label className="lbl_a">Date of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder=""
                      className="input_fld"
                      name="dob"
                      max={now}
                      ref={register({
                        required: "Please  select date of birth",
                      })}
                    />
                    {errors.dob && (
                      <p className="text-danger  oom p-0 m-0">
                        {errors.dob.message}
                      </p>
                    )}
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
                        ref={register({
                          required: "Please  select gender",
                        })}
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
                        value="0"
                        ref={register({
                          required: "Please  select gender",
                        })}
                      />
                      <label className="form-check-label lw" for="female">
                        Female
                      </label>
                    </div>

                    <div className="form-check detail_btn_ca text-center">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="gender"
                        id="Others"
                        value="2"
                        ref={register({
                          required: "Please  select gender",
                        })}
                      />
                      <label className="form-check-label lw" for="Others">
                        Others
                      </label>
                    </div>
                    {errors.gender && (
                      <p className="text-danger  oom p-0 m-0">
                        {errors.gender.message}
                      </p>
                    )}
                  </div>

                  <div className="mt-3"></div>

                  <Form.Group controlId="formGroupEmail" className="mt-3">
                    <Form.Label className="lbl_a">
                      {" "}
                      Current District{" "}
                    </Form.Label>
              


                    <Autocomplete
                      id="combo-box-demo"
                      name="address_current"
                      ref={register}
                      options={DistrictList}
                      getOptionLabel={(option) =>option}
                      defaultValue={userDetails.address_current?.length > 0 ? userDetails.address_current : null}
                      getOptionLabel={(option) => option}
                      style={{ width: "100%" }}
                      className="mt-1 p-0 m-0"
                      renderInput={(params) => (
                        <TextField
                          name="address_current"
                        
                          placeholder=" Please enter curent district"
                          value={DistrictList}
                          inputRef={register({
                            required: " Please enter current district",
                            maxLength: {
                              value: 30,
                              message: "Maximum 30 digit can be entered",
                            },
                          })}
                          {...params}
                          variant="outlined"
                        />
                        
                      )}
                    />
                  
                    

                    {errors.address_current && (
                      <p className="text-danger  oom p-0 m-0">
                        {errors.address_current.message}
                      </p>
                    )}
                  </Form.Group>

                  <Form.Group controlId="formGroupEmail" className="mt-3">
                    <Form.Label className="lbl_a">Home District </Form.Label>
                 
                    <Autocomplete
                      id="combo-box-demo"
                      
                      ref={register}
                      options={DistrictList}
                      defaultValue={userDetails.address_home?.length > 0 ? userDetails.address_home: null}
                      getOptionLabel={(option) => option}
                      style={{ width: "100%" }}
                      className="mt- p-0 m-0"
                      renderInput={(params) => (
                        <TextField
                          name="address_home"
                          placeholder=" Please enter Home district"
                          inputRef={register({
                            required: " Please enter home district",
                            maxLength: {
                              value: 30,
                              message: "Maximum 30 digit can be entered",
                            },
                          })}
                          {...params}
                          variant="outlined"
                        />
                      )}
                    />
                    {errors.address_home && (
                      <p className="text-danger  oom p-0 m-0">
                        {errors.address_home.message}
                      </p>
                    )}
                  </Form.Group>

                  <Form.Group controlId="formGroupEmail" className="mt-3">
                    <Form.Label className="lbl_a">
                      {" "}
                      Preferred Work District{" "}
                    </Form.Label>
                  

                    <Autocomplete
                      id="combo-box-demo"
                      name="address_work"
                      ref={register}
                      defaultValue={userDetails.address_work?.length > 0 ? userDetails.address_work: null}
                      
                      options={DistrictList}
                      getOptionLabel={(option) => option}
                      style={{ width: "100%" }}
                      className=" p-0 m-0"
                      renderInput={(params) => (
                        <TextField
                          name="address_work"
                          placeholder="Please enter  preferred district"
                          inputRef={register({
                            required: " Please enter work district",
                            maxLength: {
                              value: 30,
                              message: "Maximum 30 digit can be entered",
                            },
                          })}
                          {...params}
                          variant="outlined"
                        />
                      )}
                    />

                    {errors.address_work && (
                      <p className="text-danger  oom p-0 m-0">
                        {errors.address_work.message}
                      </p>
                    )}
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
                          ref={register({
                            required: "Please  select atleast 1 language",
                          })}
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
                          ref={register({
                            required: "Please  select atleast 1 language",
                          })}
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
                          ref={register({
                            required: "Please  select atleast 1 language",
                          })}
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
                        ref={register({
                          required: "Please  select atleast 1 language",
                        })}
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
                        ref={register({
                          required: "Please  select atleast 1 language",
                        })}
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
                        value={otherInput}
                        ref={register({
                          required: "Please  select atleast 1 language",
                        })}
                      />
                      <label
                        className="form-check-label lw py-1 text-capitalize"
                        for="Other"
                        onClick={() => setLangInput(!langInput)}
                      >
                        Other
                      </label>
                    </div>
                  </div>

                  {langInput && (
                    <div className="mt-1">
                      <Form.Group controlId="formBasicEmail">
                        <Form.Control
                          type="text"
                          onInput={(e) => setOtherInput(e.target.value)}
                          placeholder="Enter your language"
                          value={otherInput}
                          autocomplete="off"
                          name="otherss"
                          ref={register({
                            required: "  this field is required ",
                          })}
                        />
                      </Form.Group>
                    </div>
                  )}

                  {errors.language_known && (
                    <p className="text-danger  oom p-0 m-0">
                      {errors.language_known.message}
                    </p>
                  )}

                      {errors.otherss && (
                    <p className="text-danger  oom p-0 m-0">
                      {errors.otherss.message}
                    </p>
                  )}

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
                          id="No"
                          value="No"
                          ref={register({
                            required: "Please  select atleast 1 field",
                          })}
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
                          ref={register({
                            required: "Please  select atleast 1 field",
                          })}
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
                          ref={register({
                            required: "Please  select atleast 1 field",
                          })}
                        />
                        <label
                          className="form-check-label lw py-1 text-capitalize"
                          for="Good"
                        >
                          Good
                        </label>
                      </div>
                    </div>
                    {errors.speak_english && (
                      <p className="text-danger  oom p-0 m-0">
                        {errors.speak_english.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="btn_bd py-2 px-2  bb mb-5">
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
