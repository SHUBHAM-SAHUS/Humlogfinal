import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import facebook from "assets/images/face.png";
import google from "assets/images/google.png";
import Alert from '@material-ui/lab/Alert';


import classNames from "classnames";
import "./recruiterlogin.scss"
import { useHistory } from "react-router-dom";
import { BsEyeFill } from "react-icons/bs";


import * as userAuthAction from "redux/actions/AuthActions";

import * as commonService from "utils/CommonService.js";

import CommonForm from "components/shared/ui-components/common-form";
import { useCookies } from "react-cookie";
import { Socialbtn } from "components/commoncomponent/socialbtn/Socialbtn";

export const RecruiterLogin = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const [localCookies, setCookie] = useCookies(["email", "password"]);
  const [loginForm, setLoginForm] = useState({});
  const [errorMessage, setErrorMessage] = useState('')
  const { register, handleSubmit, errors, watch } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const setCookies = () => {
    let d = new Date();
    d.setTime(d.getTime() + 1000000000 * 15);
    setCookie("email", loginForm.value.email, { path: "/", expires: d });
    setCookie("password", loginForm.value.password, { path: "/", expires: d });
  };

  const update = (data) => {


    dispatch(userAuthAction.recruiterLogin({ body: { data } })).then((res) => {

      if (res.value.success) {

        if (res.value.data.profile_status) {
          history.push("/dashboard");
        } else {
          history.push("/companydetail");
        }
      }
    }).catch((err) => setErrorMessage(err.data.message));
  };

  const setForm = (loginForm) => {
    if (localCookies.email && localCookies.password)
      loginForm.setValue({
        email: localCookies.email,
        password: localCookies.password,
      });
    setLoginForm(loginForm);
  };
  return (
    <>
      <div className="">
        <h2 className="login_ba text-center">
          {" "}
                    With your social network
                  </h2>


        <Socialbtn />





        <div className="text-center mt-1">
          <p className="fnt">or </p>{" "}
        </div>

        <form onSubmit={handleSubmit(update)}>
          <div className="mb-">
            <label for="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              require
              autocomplete="off"
              className={classNames("form-control", {
                "is-invalid": errors.email
              })}
              id="exampleInputEmail1"

              name="email"
              ref={register({
                required: "This field is required.",

              })}
            />
            {errors.email && (
              <p className="text-danger ">{errors.email.message}</p>
            )}
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-2">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <div className="pst">
              <input
                type="password"
                className={classNames("form-control", {
                  "is-invalid": errors.password
                })}
                id="exampleInputPassword1"
                type={passwordShown ? "text" : "password"}
                name="password"
                type={passwordShown ? "text" : "password"}
                autocomplete="off"
                ref={register({
                  required: "You must  enter password",
                  minLength: {
                    value: 6,
                    message: "Password must have at least 6 characters"
                  }
                })}
              />
              <i className="eye" onClick={togglePasswordVisiblity}>{<BsEyeFill />}</i>
            </div>
            {errors.password && <p className="text-danger">{errors.password.message}</p>}
          </div>
          <div className="d-flex justify-content-between">

            <div className="mb-2  form-check">
              <input
                type="checkbox"
                className="form-check-input uur"
                id="exampleCheck1"
                ref={register}
                name="tnc"
                autocomplete="off"
              />
              <label className="form-check-label tbbrr" for="exampleCheck1 text-capitalize">
                Remember Password
              </label>
            </div>


            <div ref={register}>
              <h6 className="forget text-primary  font-light text-capitalize tbbr" onClick={() => history.push("/passwordforget")}>
                {" "}
                forgot password
              </h6>
            </div>
          </div>


          <button className="common_btn" type="submit">
            {" "}
            Login{" "}
          </button>
        </form>
        <div className="mt-2">
          {(errorMessage && errorMessage.length > 0) && <Alert severity="error">{errorMessage} !</Alert>}

        </div>
      </div>
    </>
  );
};
