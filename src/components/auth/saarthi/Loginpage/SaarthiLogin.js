
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import Alert from '@material-ui/lab/Alert';

import * as authActions from "redux/actions/AuthActions";
import "./saarthilogin.scss"
import storage from 'utils/storage';
import classNames from "classnames"
import { useHistory } from "react-router-dom"


export const SaarthiLogin = () => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('')
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    mode: 'onChange'
  });

  const onSubmit = (data) => {
    storage.set('humlog_user_contact', data.contact);
    console.log(data);
    dispatch(authActions.sarthiSignup({ data })).then(res => {
                if (res.value.success){
                  setErrorMessage("Successfully Registered please sign in to continue")
                    
                }
      
            })
        }


  return (
    <>
      <div className="row">
        <div className="col-12 mt-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="text-left p-0 m-0 ">
              {" "}
                          Phone Number.
                        </p>
            <input
              placeholder="Enter phone number"
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

            <div className="form-check mt-1 ">



            </div>





            <div className="mt-3">
              <button className="common_bt" type="submit">
                Get employee code
                          </button>
            </div>

          </form>
          <div className="mt-1">
            {(errorMessage && errorMessage.length > 0) && <Alert severity="error">{errorMessage} !</Alert>}
          </div>

        </div>

      </div>
    </>
  );
};
