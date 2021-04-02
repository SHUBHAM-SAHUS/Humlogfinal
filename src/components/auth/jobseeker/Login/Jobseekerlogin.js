import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import logoa from "../../../../assets/images/fnlogo.jpeg";
import Alert from "@material-ui/lab/Alert";
import Loadable from "react-loadable";

import * as authActions from "redux/actions/AuthActions";

import "../Login/Loginscss/login.scss";
import { Userrollbtn } from "components/auth/Userrollbtn.js/Userrollbtn";
import storage from "utils/storage";
import classNames from "classnames";
import { Socialbtn } from "components/commoncomponent/socialbtn/Socialbtn";



export const JobSeekerlogin = ({ history }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    storage.set("humlog_user_contact", data.contact);
    console.log(data);
    dispatch(authActions.getOTP({ data }))
      .then((res) => {
        if (res.value.success) {
          history.push("login/VerifyOTP");
        }
      })
      .catch((err) => history.push("login/VerifyOTP"));
  };

  return (
    <>
      <div>
        <div className="main_login">
          <div className="row  no-gutters">
            <div className="col-md-4 pt-0"> </div>

            <div className="col-md-4  sha pb-3 pt-1 px-4">
              <div className=" login_aa ">
                <div className="d-flex justify-content-center ">
                  <img src={logoa} width="50%" alt="logo" />
                </div>

                <div className="d-flex justify-content-center mt-3">
                  <h2 className="logo_bb">
                    हिन्दी/<strong className="logo_cc">English</strong>
                  </h2>
                </div>

                <div className="mt-1">
                  <div className="pxx ">
                    <div
                      className={
                        history.location.pathname == "/JobSeekerlogin"
                          ? "btn_a mr-1"
                          : "btn_b mr-1 text-center"
                      }
                      id="bto"
                      onClick={() => history.push("/JobSeekerlogin")}
                    >
                      {" "}
                      Job-Seeker{" "}
                    </div>
                  </div>
                </div>
                <div className=" mt-5">
                  <h2 className="login_ba text-center ">
                    {" "}
                    With your social network
                  </h2>

                  <Socialbtn />

                  <div className="text-center mt-3">
                    <p className="fnt">or </p>{" "}
                  </div>

                  <div className="mt-2 ">
                    <h2 className="login_ba text-center  ">
                      {" "}
                      Login with Mobile Number{" "}
                    </h2>

                    <div className="mt-4">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <p className="text-center p-0 m-0 ">
                          {" "}
                          Enter 10-digit mobile number{" "}
                        </p>
                        <input
                          placeholder="+91 xxx xxx xx xx"
                          name="contact"
                          autocomplete="off"
                          className={classNames("login_input py-2", {
                            "is-invalid": errors.contact,
                          })}
                          ref={register({
                            required: " Please enter 10 digit  mobile number",
                            pattern: {
                              value: /^\d{10}$/,
                              message: " Please enter 10 digit  mobile number",
                            },
                          })}
                        />

                        {errors.contact && (
                          <p className="text-danger p-0 m-0 tnc_alrt">
                            {errors.contact.message}
                          </p>
                        )}

                        <div className="form-check mt-1 ">
                          <input
                            className="form-check-input  mtt"
                            autocomplete="off"
                            type="checkbox"
                            id="gridCheck"
                            ref={register({
                              required:
                                "Please tick the checkbox of T&C and Privacy Policy",
                            })}
                            name="tnc"
                          />

                          <label
                            className="form-check-label "
                            htmlFor="gridCheck  otp_tc"
                          >
                            <p className="  tc p-0 m-0">
                              {" "}
                              I hereby agree to the{" "}
                              <a
                                className="text-decoration-none text-underline bbg"
                                onClick={() =>
                                  history.push("/terms&conditions")
                                }
                              >
                                {" "}
                                T&C
                              </a>{" "}
                              and the{" "}
                              <a
                                className="text-decoration-none  text-underline bbg"
                                onClick={() => history.push("/privacypolicy")}
                              >
                                {" "}
                                Privacy Policy{" "}
                              </a>
                            </p>{" "}
                          </label>
                          {errors.tnc && (
                            <p className="text-danger p-0 m-0 tnc_alrt">
                              {errors.tnc.message}
                            </p>
                          )}
                        </div>

                        <div className="mt-3">
                          <button className="common_btn" type="submit">
                            Send OTP via SMS
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4"> </div>
          </div>
        </div>
      </div>
    </>
  );
};
