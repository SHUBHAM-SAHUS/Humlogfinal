import React, { useState ,useRef } from "react";
import {useHistory} from "react-router-dom"
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import facebook from "assets/images/face.png";
import google from "assets/images/google.png";
import classNames from "classnames";
import{FaEye} from "react-icons/fa";
import "./signuppage.scss"
import {BsEyeFill} from "react-icons/bs";
import Alert from '@material-ui/lab/Alert';


import * as userAuthAction from "redux/actions/AuthActions";

import * as commonService from "utils/CommonService.js";


import CommonForm from "components/shared/ui-components/common-form";
import { useCookies } from "react-cookie";
import { Socialbtn } from "components/commoncomponent/socialbtn/Socialbtn";

export const RecruiterSignup = (props) => {
  
  const history= useHistory();
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShown1, setPasswordShown1] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const togglePasswordVisiblity1 = () => {
    setPasswordShown1(passwordShown1 ? false : true);
  };


  
  const [message,setmessage] =useState("false");
  const [errorMessage,setErrorMessage] = useState('')

  const [localCookies, setCookie] = useCookies(["email", "password"]);
  const [loginForm, setLoginForm] = useState({});
  const { register, errors, handleSubmit, watch ,reset} = useForm();
  const dispatch = useDispatch();
  const password = useRef({});
  password.current = watch("password", "");

  const setCookies = () => {
    let d = new Date();
    d.setTime(d.getTime() + 1000000000 * 15);
    setCookie("email", loginForm.value.email, { path: "/", expires: d });
    setCookie("password", loginForm.value.password, { path: "/", expires: d });
  };

  const update = (data) => {
    console.log(data);
    

    dispatch(userAuthAction.recruiterSignup({ body: { data } })).then((res) => {
      if (res.value.success) {

 
        if (res.value.data.token.length > 0)
        {
          console.log("true")
          history.push('/companydetail')
        }


        

      }
    }) .catch((err) =>setErrorMessage(err.data.message));
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
              <h2 className="login_ba text-center mt-3">
                    {" "}
                    With your social network
                  </h2>
                 
                 <Socialbtn/>
                

                  <div className="text-center mt-1">
                    <p className="fnt">or </p>{" "}
                  </div>
      
      <div>
                 <form  onSubmit={handleSubmit(update)}>
          <div className="">
            <label for="exampleInputEmail1" className="form-label">
              Email 
            </label>
            <input
              type="email"
              autocomplete="off"
              required
               name="email"
              
            className={classNames("form-control", {
                "is-invalid": errors.email
              })}
              id="exampleInputEmail1"
              
            
             
              ref={register({
                required: "This field is required.",
             
              })}
  />

    <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-2 ">
            <label for="exampleInputPassword1" className="form-label">
              Create Password
            </label>
             <div className="pst">
            <input
              type="password"
              autocomplete="off"
              className={classNames("form-control", {
                "is-invalid": errors.password
              })}
              id="exampleInputPassword1"
              name="password"
              type={passwordShown ? "text" : "password"}
              
              ref={register({
                required: "You must enter password",
                minLength: {
                  value: 6,
                  message: "Password must have at least 6 characters"
                }
              })}
               
              />
              <i className="eye"   onClick={togglePasswordVisiblity}>{ <BsEyeFill/>}</i>
              </div>
              {errors.password && <p className="text-danger p-0 m-0">{errors.password.message}</p>}
             </div>

      

            
            
          <div className="mb-2">
            <label for="exampleInputPassword1" className="form-label">
             Confirm  Password
            </label>
            <div className="pst">
            <input
              type="password"
              className={classNames("form-control", {
                "is-invalid": errors.cpassword
              })}
              id="exampleInputPassword1"
              type={passwordShown1 ? "text" : "password"}
              name="cpassword"
              ref={register({
                validate: value =>
                  value === password.current || "  Password  mismatch"
              })}
            />
              <i className="eye"   onClick={togglePasswordVisiblity1}>{ <BsEyeFill/>}</i>
           </div>
          </div>
          {errors.cpassword && <p className="text-danger">{errors.cpassword.message}</p>}


          <div className="form-check  ">
                    <input
                      className="form-check-input "
                      autocomplete="off"
                      type="checkbox"
                    
                      id="gridCheck"
                      ref={register({required:"Please tick the checkbox of T&C and Privacy Policy"
                      
                      })}
                      name="tnc"
         

                    />

                    <label className="form-check-label " htmlFor="gridCheck  ">
                      <p className=" td  p-0 m-0 ">
                      {" "}
                        I hereby agree to the{" "}
                        <a  className="text-decoration-none text-underline bbg"  onClick={()=>history.push("/terms&conditions")}>
                          {" "}
                          T&C
                        </a>{" "}
                        and the{" "}
                        <a  className="text-decoration-none text-capitalize text-underline bbg"  onClick={()=>history.push("/privacypolicy")}>
                          {" "}
                          privacy policy{" "}
                        </a>
                      </p>{" "}
                    </label>
                    {errors.tnc && <p className="text-danger p-0 m-0">{errors.tnc.message}</p>}
                  </div>
                     
                    
      



          <button className="common_btn   mt-2" type="submit">
           Sign Up
          </button>
      
        </form>
        <div className="mt-2">
        {(errorMessage && errorMessage.length > 0) && <Alert severity="error">{errorMessage} !</Alert>}
        </div>
      </div>
    </>
  );
};
