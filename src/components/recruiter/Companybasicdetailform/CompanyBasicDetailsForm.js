import React, { useEffect, useState } from "react";
import "../companyprofileform/companyprofile.scss";
import industry from "../../../assets/images/industry.png";
import { Form } from "react-bootstrap";
import { AiOutlineHome } from "react-icons/ai";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import { MdPhoneInTalk } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import * as userActions from "redux/actions/UserActions";
import storage from "utils/storage";
import { serialize } from "object-to-formdata";
import { useHistory } from "react-router-dom";
import { FaIndustry } from "react-icons/fa";
import { registerRoute } from "workbox-routing";
import { emailicon } from "../../../assets/images/email.png";
import { AiOutlineMail } from "react-icons/ai";
import uploadi from "../../../assets/images/uploadi.png";
import Alert from "@material-ui/lab/Alert";
import { IndustryData } from "../IndustryData";
import { BsBriefcase, BsPencil, BsBook } from "react-icons/bs";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { DistrictList } from "components/jobseeker/DistrictList";



import {
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineYoutube,
} from "react-icons/ai";

export const CompanyBasicDetailsForm = (props) => {
  const { register, handleSubmit, errors, reset } = useForm({
    mode: "onBlur",
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.userReducer);
  const [errorMessage, setErrorMessage] = useState("");
  const [vedioErr,setVedioErr] = useState(null)

  useEffect(() => {
    loadProfile();
  }, []);
  const loadProfile = () => {
    let data = userDetails;

    reset(data);
  };
  const uploadVedioResume = (e) => {
    if (e.target.files[0].size < 50000000){
      setVedioErr(null)
    let formData = serialize({
      video_resume: e.target.files[0],
      _id: localStorage.getItem("humlog_user"),
    });
    dispatch(userActions.updateUserData({ formData }))
      .then((res) => {
        if (res.value.success) {
          console.log(res.value.message);
    
        }
      })
      .catch((err) => console.log(err));
    }else {
      setVedioErr("File size should be less than 50 MB")
    }
  };
  const update = (val) => {
    let data = { ...val, _id: storage.get("humlog_user"), profile_status: 1 };
    const formData = serialize(data);

    dispatch(userActions.updateUserData({ formData }))
      .then((res) => {
        if (res.value.success) {
          history.push("/dashboard");
        }
      })
      .catch((err) => setErrorMessage(err.data.message));

  };

  return (
    <>
      <div className="mt-">
        <div className="row no-gutters">
          <div className="col-12 ">
            <div className="">
              <div className=" text-center ">
                <div>
                  <div className="mt-3">
                    <Form onSubmit={handleSubmit(update)}>
                      <Form.Group controlId="exampleForm.ControlInput1 ">
                        <Form.Label className="d-flex justify-content-start llbl">
                          {" "}
                          <img
                            src={industry}
                            alt="industry"
                            width="16px"
                            height="20px"
                            className="mr-1"
                          />{" "}
                          industry <font className="text-danger">*</font>
                        </Form.Label>
                        <Form.Control
                          as="select"
                          ref={register}
                          name="company_category"
                        >
                          {IndustryData.map((val) => {
                            return (
                              <>
                                <option> {val}</option>
                              </>
                            );
                          })}

                          <option>2</option>
                        </Form.Control>
                      </Form.Group>

                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label className="d-flex justify-content-start llbl">
                          <FaIndustry className="iconn_pro mr-1" />
                          company Name<font className="text-danger">*</font>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          autocomplete="off"
                          placeholder="Add your company name"
                          name="company_name"
                          className={classNames("form-control", {
                            "is-invalid": errors.company_name,
                          })}
                          ref={register({
                            required: " Please enter company name",
                            minLength: {
                              value: 4,
                              message: "Please Enter Minimum 4 Character ",
                            },
                            maxLength: {
                              value: 50,
                              message: " Maximum 50 Character limit ",
                            },

                            pattern: {
                              value: /^[a-zA-Z\s]*$/,
                              message: " Numeric value not allow",
                            },
                          })}
                        />
                        {errors.company_name && (
                          <p className="text-danger  txt">
                            {errors.company_name.message}
                          </p>
                        )}
                      </Form.Group>

                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label className="d-flex justify-content-start llbl">
                          <AiOutlineHome className="iconn_pro mr-1" />
                          address<font className="text-danger">*</font>
                        </Form.Label>
                        <Autocomplete
                  id="combo-box-demo"
                  name="address_home"
                  ref={register}
                  className={classNames("form-control", {
                    "is-invalid": errors.address_home,
                  })}
                  options={DistrictList}
                  getOptionLabel={(option) => option}
                  style={{ width: "100%" }}
                  className="mt-2 p-0 m-0"
                  renderInput={(params) => (
                    <TextField
                     placeholder="Enter your Home District"
                
                      name="address_home"
                      inputRef={register({
                        required:"Please enter district",
                      })}
                      {...params}
                      variant="outlined"
                      require
                    />
                  )}
                />
                        {errors.address_home && (
                          <p className="text-danger  txt">
                            {errors.address_home.message}
                          </p>
                        )}
                      </Form.Group>

                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label className="d-flex justify-content-start llbl">
                          <BsPerson className="iconn_pro mr-1" />
                          Contact person Name
                          <font className="text-danger">*</font>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          autocomplete="off"
                          placeholder="Contact person name"
                          className={classNames("form-control", {
                            "is-invalid": errors.name,
                          })}
                          ref={register({
                            required: " Please enter contact person  name",

                            pattern: {
                              value: /^[a-zA-Z\s]*$/,
                              message: " Numeric are nvalues not allowed",
                            },

                            maxLength: {
                              value: 25,
                              message: " Maximum 25 Character limit ",
                            },
                          })}
                          name="name"
                        />

                        {errors.name && (
                          <p className="text-danger  txt">
                            {errors.name.message}
                          </p>
                        )}
                      </Form.Group>

                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label className="d-flex justify-content-start llbl">
                          <MdPhoneInTalk className="iconn_pro mr-1" />
                          Contact Person Number
                          <font className="text-danger">*</font>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          autocomplete="off"
                          placeholder="Add your phone number here"
                          name="contact"
                          className={classNames("login_input py-2", {
                            "is-invalid": errors.contact,
                          })}
                          ref={register({
                            required: "Please enter contact number",
                            pattern: {
                              value: /^\d{10}$/,
                              message:
                                "Please enter 10 digit valid mobile number",
                            },
                          })}
                        />
                        {errors.contact && (
                          <p className="text-danger  txt">
                            {errors.contact.message}
                          </p>
                        )}
                        {errorMessage && errorMessage.length > 0 && (
                          <Alert severity="error">{errorMessage} !</Alert>
                        )}
                      </Form.Group>

                    

                      <div className="d-flex justify-content-between mt-3">
                        <div>
                          {" "}
                          <img src={uploadi} className="user_icon mt-1" />
                          <h6 className="user_one text-left ml-1 text-capitalize">
                            Company Video{" "}
                          </h6>
                        </div>
                        <input
                          type="file"
                          className="d-none"
                          id="vedio-resume"
                          accept="video/*"
                          onChange={uploadVedioResume}
                        />
                        <label for="vedio-resume">
                          {" "}
                          <BsPencil className="user_icon pencil" />{" "}
                        </label>
                      </div>
                      {vedioErr?.length > 0 &&<div className="text-danger">{vedioErr}</div>}
                      <h6 className="text-left  user_ta "> </h6>
                      <a
                        className="word_brkk"
                        target="_blank"
                      >
                        {userDetails && userDetails.video_resume}
                      </a>

                      <button className="common_btn mt-4 mb-2" type="submit">
                        {" "}
                        Submit
                      </button>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

