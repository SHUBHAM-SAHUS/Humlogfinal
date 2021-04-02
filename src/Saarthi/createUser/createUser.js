import React, { useRef, useState } from "react";
// import { Header } from "../commoncomponent/Header";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Alert from '@material-ui/lab/Alert';
import { serialize } from "object-to-formdata";
import {
  AiOutlineUser,
  AiOutlinePhone,
  AiOutlineFileImage,
} from "react-icons/ai";
import { CgGenderFemale } from "react-icons/cg";
import "./userDetail/userdetail.scss";
import { BiBookOpen } from "react-icons/bi";
import age from "assets/images/age.png";
import { FcBusinessman } from "react-icons/fc";
import { FaAward } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { MdPhoneInTalk } from "react-icons/md";


import { useForm } from "react-hook-form";
import { register } from "serviceWorkerRegistration";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import * as userActions from "redux/actions/UserActions";
import storage from "utils/storage";
import currently from "assets/images/currentlyworking.png";
import experience from "assets/images/work experience.png";
import CommonModal from "components/shared/ui-components/common-modal";

import VerifyOTPModal from "./verifyOtp";

export const CreateUser = ({ history }) => {
  const [contact, setContact] = useState("");
  const [errorMessage,setErrorMessage] = useState('')
  const [state, setState] = useState({ open: false });

  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm({ mode: "onChange" });
  const handelModal = (component) => {
    setState({ open: true });
  };

  const handelClose = () => {
    setState({ open: false });
  };

  const update = (val) => {
    setContact(val.contact);
    
    let data = {
      ...val,
      created_by: storage.get("humlog_user"),
      profile_status: 1,
    };
    const formData = serialize(data);
  
    dispatch(userActions.upsertUserData({ formData }))
      .then((res) => {
        if (res.value.success) {
          console.log(res.value.message);
          setState({ open: true });
        }
      })
      .catch((err) => setErrorMessage(err.data.message));
    
   
   

      

    console.log(val);
  };

  return (
    <>
      <CommonModal open={state.open} handelClose={handelClose}>
        <VerifyOTPModal contact={contact} />
      </CommonModal>
      {/* <Header /> */}
      <div className="basicdetail  ">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-12  px-0 px-lg-2  pb-2  sst">
              <form onSubmit={handleSubmit(update)}>
                <div className="form-group mt-3">
                  <label for="name" className=" control-label">
                    <AiOutlineUser className="detail_icon_user" />
                    <b p-0 m-0>
                      {" "}
                      Name<font className="text-danger">*</font>{" "}
                    </b>
                  </label>
                  <div>
                    <div className="input-group">
                      <span className="input-group-addon"></span>
                      <input
                        type="text"
                        autocomplete="off"
                        className={classNames("form-control", {
                          "is-invalid": errors.name,
                        })}
                        name="name"
                        id="name"
                        placeholder="Enter your full name here"
                        ref={register({
                          required: " Please enter your full name",

                          pattern: {
                            value: /^[a-zA-Z]/,
                            message: " Numeric value not allow",
                          },
                        })}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-danger  oom">{errors.name.message}</p>
                    )}
                  </div>
                </div>

                <div className="form-group mt-3">
                  <label for="name" className=" control-label">
                    <MdPhoneInTalk className="detail_icon_user" />
                    <b p-0 m-0>
                      {" "}
                      Contact Number<font className="text-danger">*</font>{" "}
                    </b>
                  </label>
                  <div>
                    <div className="input-group">
                      <span className="input-group-addon"></span>
                      <input
                        type="text"
                        autocomplete="off"
                        className={classNames("form-control", {
                          "is-invalid": errors.contact,
                        })}
                        name="contact"
                        id="contact"
                        placeholder="Enter your contact here"
                        ref={register({
                          required: " Please enter 10 digit  mobile number",
                          pattern: {
                            value: /^\d{10}$/,
                            message: " Please enter 10 digit  mobile number",
                          },
                        })}
                      />
                    </div>
                    {(errorMessage && errorMessage.length > 0) && <Alert severity="error">{errorMessage} !</Alert>}
                    {errors.contact && (
                      <p className="text-danger  oom">
                        {errors.contact.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="form-group mt-2">
                  <label
                    for="email"
                    className="cols-sm-2 control-label"
                    ref={register}
                  >
                    <CgGenderFemale className="detail_icon_user" />
                    <b>
                      {" "}
                      Gender<font className="text-danger">*</font>{" "}
                    </b>
                  </label>

                  <div className="  d-flex justify-content-between">
                    <div className="form-check detail_btn_a text-center aaa">
                      <input
                        className="form-check-input d-none aaa"
                        type="radio"
                        name="gender"
                        id="male"
                        value="1"
                        ref={register({
                          required: " Please  select gender",
                        })}
                      />
                      <label className="form-check-label lw py-1" for="male">
                        Male
                      </label>
                    </div>

                    <div className=" detail_btn_b text-center aaa">
                      <input
                        className="form-check-input d-none "
                        type="radio"
                        name="gender"
                        value="0"
                        id="female"
                        ref={register({
                          required: "Please  Select Gender",
                        })}
                      />
                      <label className="form-check-label lw py-1" for="female">
                        Female
                      </label>
                    </div>

                    <div className=" detail_btn_cca text-center aaa">
                      <input
                        className="form-check-input d-none "
                        type="radio"
                        name="gender"
                        value="2"
                        id="Others"
                        ref={register({
                          required: "Please  select gender",
                        })}
                      />
                      <label className="form-check-label lw py-1" for="Others">
                        Others
                      </label>
                    </div>
                  </div>
                  {errors.gender && (
                    <p className="text-danger  oom">{errors.gender.message}</p>
                  )}
                </div>

                <div className="form-group mt-2">
                  <label for="email" className="cols-sm-2 control-label">
                    <img src={age} width="35%" className="detail_icon_user" />

                    <b>
                      {" "}
                      Age<font className="text-danger">*</font>{" "}
                    </b>
                  </label>

                  <div className="d-flex justify-content-between">
                    <div className="detail_btn_cca text-center ">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="age"
                        id="18-24"
                        value="0"
                        ref={register({
                          required: "Please  select age",
                        })}
                      />
                      <label className="form-check-label lw py-2" for="18-24">
                        18-24 Yrs
                      </label>
                    </div>

                    <div className="form-check detail_btn_cca text-center mr-2">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="age"
                        id="25-30"
                        value="1"
                        ref={register({
                          required: "Please  select age",
                        })}
                      />
                      <label className="form-check-label lw py-2" for="25-30">
                        25-30 Yrs
                      </label>
                    </div>

                    <div className="form-check  detail_btn_cca text-center mr-2">
                      <input
                        className="form-check-input d-none "
                        type="radio"
                        name="age"
                        id="31-35"
                        value="2"
                        ref={register({
                          required: "Please  select age",
                        })}
                      />
                      <label
                        className="form-check-label text-capitalize lw py-2"
                        for="31-35"
                      >
                        31-35 Yrs
                      </label>
                    </div>

                    <div className="form-check detail_btn_cca text-center mr-2">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="age"
                        id="36+ yrs"
                        value="2"
                        ref={register({
                          required: "Please  select age",
                        })}
                      />
                      <label
                        className="form-check-label  text-capitalize lw py-2"
                        for="36+ yrs"
                      >
                        36+ Yrs
                      </label>
                    </div>
                  </div>
                  {errors.age && (
                    <p className="text-danger  oom">{errors.age.message}</p>
                  )}
                </div>

                <div className="form-group mt-2">
                  <label for="email" className="cols-sm-2 control-label">
                    <BiBookOpen className="detail_icon_user" />

                    <b>
                      {" "}
                      Qualification<font className="text-danger">*</font>{" "}
                    </b>
                  </label>

                  <div className="d-flex justify-content-between">
                    <div className="form-check  detail_btn_cca text-center">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="qualification"
                        value="0"
                        id="below 10th"
                        ref={register({
                          required: "Please  Select  Qualification Field",
                        })}
                      />
                      <label
                        className="form-check-label text-capitalize  lw"
                        for="below 10th"
                      >
                        below 10th
                      </label>
                    </div>

                    <div className="form-check  detail_btn_cca text-center">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="qualification"
                        id="10th pass"
                        value="1"
                        ref={register({
                          required: "Please  Select  Qualification Field",
                        })}
                      />
                      <label
                        className="form-check-label text-capitalize  lw"
                        for="10th pass"
                      >
                        10th Pass
                      </label>
                    </div>

                    <div className="form-check detail_btn_cca text-center">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="qualification"
                        id="12th Pass"
                        ref={register}
                        value="2"
                        ref={register({
                          required: "Please  select  qualification field",
                        })}
                      />
                      <label
                        className="form-check-label  text-capitalize lw "
                        for="12th Pass"
                      >
                        12th Pass
                      </label>
                    </div>

                    <div className="form-check detail_btn_cca text-center">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        id="Graduate & Above"
                        name="qualification"
                        value="3"
                        ref={register({
                          required: "Please  select  qualification field",
                        })}
                      />
                      <label
                        className="form-check-label text-capitalize w "
                        for="Graduate & Above"
                      >
                        <p className="grad"> Graduate & Above </p>
                      </label>
                    </div>
                  </div>
                  {errors.qualification && (
                    <p className="text-danger  oom">
                      {errors.qualification.message}
                    </p>
                  )}
                </div>

                <AiOutlineUser className="detail_icon_user" />

                <b>
                  {" "}
                  Work Experience (Years) <font className="text-danger">
                    *
                  </font>{" "}
                </b>

                <div className="d-flex justify-content-between mt-1">
                  <div className="form-check  text-center detail_btn_cca">
                    <input
                      className="form-check-input d-none"
                      type="radio"
                      name="experience"
                      id="Fresher"
                      value="0"
                      ref={register({
                        required: "Please enter experience",
                      })}
                    />
                    <label className="form-check-label lw " for="Fresher">
                      Fresher
                    </label>
                  </div>

                  <div className="form-check detail_btn_cca text-center">
                    <input
                      className="form-check-input d-none"
                      type="radio"
                      name="experience"
                      id="Less than 1"
                      value="1"
                      ref={register({
                        required: "Please enter experience",
                      })}
                    />
                    <label className="form-check-label lw " for="Less than 1">
                      Less than 1
                    </label>
                  </div>

                  <div className="form-check detail_btn_cca text-center">
                    <input
                      className="form-check-input d-none"
                      type="radio"
                      name="experience"
                      id="1-2"
                      value="2"
                      ref={register({
                        required: "Please enter experience",
                      })}
                    />
                    <label className="form-check-label lw " for="1-2">
                      1-2
                    </label>
                  </div>

                  <div className="form-check detail_btn_cca text-center">
                    <input
                      className="form-check-input d-none"
                      type="radio"
                      name="experience"
                      id="2-4"
                      value="3"
                      ref={register({
                        required: "Please enter experience",
                      })}
                    />
                    <label className="form-check-label lw " for="2-4">
                      2-4
                    </label>
                  </div>

                  <div className="d-flex justify-content-between mt-1"></div>
                </div>

                <div className="d-flex justify-content-between mt-2">
                  <div className="form-check  detail_btn_cca text-center">
                    <input
                      className="form-check-input d-none"
                      type="radio"
                      name="experience"
                      id="4-6"
                      value="4"
                      ref={register({
                        required: "Please enter experience",
                      })}
                    />
                    <label className="form-check-label lw " for="4-6">
                      4-6
                    </label>
                  </div>
                  <div className="form-check detail_btn_cca text-center">
                    <input
                      className="form-check-input d-none"
                      type="radio"
                      name="experience"
                      id="6-8"
                      value="5"
                      ref={register({
                        required: "Please enter experience",
                      })}
                    />
                    <label className="form-check-label lw " for="6-8">
                      6-8
                    </label>
                  </div>

                  <div className="form-check detail_btn_cca text-center">
                    <input
                      className="form-check-input d-none"
                      type="radio"
                      name="experience"
                      id="8-10"
                      value="6"
                      ref={register({
                        required: "Please enter experience",
                      })}
                    />
                    <label className="form-check-label lw " for="8-10">
                      8-10
                    </label>
                  </div>

                  <div className="form-check  detail_btn_cca text-center">
                    <input
                      className="form-check-input d-none"
                      type="radio"
                      name="experience"
                      id="10+"
                      value="7"
                      ref={register({
                        required: "Please enter experience",
                      })}
                    />
                    <label className="form-check-label lw " for="10+">
                      10+
                    </label>
                  </div>
                  <div className="d-flex justify-content-between mt-1"></div>
                </div>

                {errors.experience && (
                  <p className="text-danger oom">{errors.experience.message}</p>
                )}

                <div className="form-group  mt-2">
                  <label for="name" className=" control-label text-capitalize">
                    <AiOutlineHome className="detail_icon_user" />
                    <b p-0 m-0>
                      {" "}
                      Your Home District <font className="text-danger">
                        *
                      </font>{" "}
                    </b>
                  </label>
                  <div>
                    <div className="input-group">
                      <span className="input-group-addon"></span>
                      <input
                        type="text"
                        autocomplete="off"
                        className="form-control"
                        className={classNames("form-control", {
                          "is-invalid": errors.address_home,
                        })}
                        name="address_home"
                        id="name"
                        placeholder=" Enter Home District "
                        ref={register({
                          required: " Please enter district   ",
                        })}
                      />
                    </div>
                  </div>
                  {errors.address_home && (
                    <p className="text-danger  oom">
                      {errors.address_home.message}
                    </p>
                  )}
                </div>

                <div className="mt-3">
                  <button className="common_btn" type="submit">
                    {" "}
                    Next{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
