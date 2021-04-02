
import {useHistory} from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import Alert from '@material-ui/lab/Alert';
import "./saarthisignup.scss"

import * as authActions from "redux/actions/AuthActions";


import { Userrollbtn } from "components/auth/Userrollbtn.js/Userrollbtn";
import storage from 'utils/storage';
import classNames from "classnames"
import { Socialbtn } from "components/commoncomponent/socialbtn/Socialbtn";


export const SaarthiSignUp = () => {
  const dispatch = useDispatch();
  const [errorMessage,setErrorMessage] = useState('')
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    mode: 'onChange'
  });

  const onSubmit = (data) => {
    storage.set('humlog_user_contact', data.contact);
    console.log(data);
    dispatch(authActions.sarthiLogin({data})).then((res) => {
        if (res.value.success) {
          if (res.value.data.profile_status) {
            history.push("/dashboard");
          } else {
            history.push("/profile");
          }
          console.log(res.value.message)

          }
      })
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-3">
              <p className="text-left p-0 m-0 ">
                {" "}
                          Phone number
                        </p>
              <input
                placeholder="Enter Phone Number"
                name="contact"

                autocomplete="off"
                className={classNames("login_input py-2", { "is-invalid": errors.contact })}
                ref={register({
                  required: " Please enter 10 digit  mobile number",
                  pattern: {
                    value: /^\d{10}$/,
                    message: " Please enter 10 digit  mobile number"
                  }

                })}
              />
                  {errors.contact && (
              <p className="text-danger p-0 m-0 tnc_alrt">{errors.contact.message}</p>
            )}

            </div>
            <div className="mt-3">
              <p className="text-left p-0 m-0 ">
                {" "}
                          Employee code
                        </p>
              <input
                placeholder="Enter Employee Code"
                name="emp_code"

                autocomplete="off"
                className={classNames("login_input py-2", { "is-invalid": errors.contact })}
                ref={register({
                  required: " Please enter 10 digit  mobile number",

                })}
              />
            </div>

        






            <div className="mt-3">
              <button className="common_btn" type="submit">
                Login
                          </button>
            </div>
             
            {(errorMessage && errorMessage.length > 0) && <Alert severity="error">{errorMessage} !</Alert>}
          </form>


        </div>

      </div>
    </>
  );
};
