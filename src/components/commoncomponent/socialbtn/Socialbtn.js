import "./socialbtn.scss";
import facebook from "../../../assets/images/face.png";
import google from "../../../assets/images/google.png";
import { GrFacebookOption } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import * as userAuthAction from "redux/actions/AuthActions";
import { useDispatch } from "react-redux";
import {useHistory} from "react-router-dom";

export const Socialbtn = () => {
  const responseFacebook = (loginresult, response) => {
    console.log(response);
  };

  const componentClicked = (data) => {
    console.warn(data);
  };

  const responseGoogle = (res) => {
    console.log(res);
  }






  

  return (
    <>
      <div className="d-flex  justify-content-between px-2 mt-3">
      
        <div className="fce">
          <FacebookLogin
            appId="435899871160904"
            autoLoad={false}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook}
            
          />
        </div>

        <div className="ggl ">
          <GoogleLogin
            clientId="915337275753-ji005i8agk2qq66cabq89ppf6il82355.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            className="Google-btn"
            
          />
        </div>
      </div>
    </>
  );
};
