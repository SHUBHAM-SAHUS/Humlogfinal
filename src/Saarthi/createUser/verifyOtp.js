 import  React,{useEffect,useState} from "react";
import {useHistory} from 'react-router-dom';
 import { useForm } from "react-hook-form";
 import logo from "../../assets/images/fnlogo.jpeg"
import { useDispatch, useSelector } from "react-redux";
import "./otp/otp.scss";
import classNames from "classnames";
import Alert from '@material-ui/lab/Alert';

import * as userActions from "redux/actions/UserActions";
// import * as authActions from "redux/actions/AuthActions";




import * as authActions from "redux/actions/AuthActions";
const VerifyOTPModal = (props) => {
  const history = useHistory();
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const [errorMessage,setErrorMessage] = useState('')


  
  
  const { userDetails } = useSelector((state) => state.userReducer);
  
  const { register, handleSubmit ,errors} = useForm({
    mode: 'onChange'
  });

  const [number, setNumber] = useState("");
  
  
  const update = (val) => {
    const data = {...val,contact: props.contact}

    dispatch(
      userActions.varifyOTP({data})
    ).then((res) => {
        if (res.value.success) {
          if (res.value.data.profile_status) {
            history.push({pathname:"/user/editProfile", search: '?id=' + res.value.data._id });
          }

          }
      }).catch((err) =>setErrorMessage(err.value.data.message));
  };
  return (
    <>
      {/* <Input name="otp" onChange={e=> setNumber(e.target.value)}/>
   <div>
   <Button onClick={verifyOTP} color="primary" variant="contained">varify otp</Button> */}

      <div className="top_main">
        <div className="row  no-gutters">
    
          <div className="col-md-4 otp_ra">
            {/* <img src={forest} width="100%" alt="forest" /> */}
          </div>

          <div className="col-md-4  otp_rb  sha  p-4 ">
            <div className="px-3 px-lg-5   pt-5">
              <div className="d-flex justify-content-center">
                <img src={logo} width="200px" alt="logo" className="mx-auto" />
              </div>

              <p className="otp_ver text-center  mt-4 font-bold">
                {" "}
                OTP Verification
              </p>

              <div>
                <form onSubmit={handleSubmit(update)}>
                  <p className="otp_b text-bold p-0 m-0 text-center ">
                    {" "}
                    Enter OTP sent to +91 {props.contact}
                    
                  </p>
                  <input
                    name="otp"
                    className="otp_input py-2"
                    autocomplete="off"
                    className={classNames("form-control", {
                      "is-invalid": errors.otp
                    })}
                    ref={register({
                      required: "You must enter OTP",
                      
                      minLength:{
                        value:4,
                        message:"Please enter minimum 4 digits OTP"
                      },

                      maxLength:{
                        value:4,
                        message:"Please enter only 4 digits OTP"
                      }

                    })}
                  />
                    {errors.otp && <p className="text-danger ">{errors.otp.message}</p>}

              
                  

                  <div className="mt-2 d-flex justify-content-center mb-3 mt-2text-capitalize">
                    {" "}
                    Did not receive the OTP?{" "}
                    <a  className="text-decoration-none ml-1 cursor_otp">
                      {" "}
                      Resend OTP
                    </a>{" "}
                  </div>
                  <button className="common_btn" type="submit">
                    {" "}
                    Verify & Proceed{" "}
                  </button>
                </form>
                <div className="mt-3">
                {(errorMessage && errorMessage.length > 0) && <Alert severity="error">{errorMessage} !</Alert>}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4"> </div>
        </div>
      </div>
    </>
    //  <div className="text-center">
    //  <Input name="otp" onChange={e=> setNumber(e.target.value)}/>
    //  <div>
    //  <Button onClick={verifyOTP} color="primary" variant="contained">varify otp</Button>
    //  </div></div>
  );
};
export default VerifyOTPModal;
