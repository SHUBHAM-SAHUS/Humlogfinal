import React from "react";
import "./header.scss";
import { useLocation } from "react-router-dom";
// import logowa from "../../../assets/images/logowhite.png";
import logowb from "../../../assets/images/logowhite.png";
import { GoThreeBars } from "react-icons/go";
import { GrFormClose } from "react-icons/gr";
import { useHistory } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
// import * as userActions from "redux/actions/UserActions";
// import { useDispatch, useSelector } from "react-redux";

export const Header = (props) => {
  const location = useLocation();
  const history = useHistory();
  console.log(location);

  const opennav = () => {
    document.getElementById("mysidenavbar").style.width = "70%";
  };

  const closebtn = () => {
    document.getElementById("mysidenavbar").style.width = "0px";
  };

  return (
    <>
      {}

      <div className=" fixed-top">
        <div className="row">
          <div className="col-md-4"> </div>

          <div className="col-md-4 main_head  position-relative py-3">
            <div className="d-flex justify-content-center align-items-center">
              <img src={logowb} className="mx-auto" className="header_logo"  alt="img"/>
              <div className="ttl_heading">
                <h6 className="head_style_clr ml-3">{props.title} </h6>
              </div>

              {location.pathname === `/dashboard` ? (
                <div className="text-right">
                  <div className="bars_icon">
                    {" "}
                    <GoThreeBars onClick={opennav} className="bar_iconn" />
                  </div>{" "}
                </div>
              ) : null}

              {location.pathname === `/community` ? (
                <div className="text-right">
                  <div className="bars_icon">
                    <GoThreeBars onClick={opennav} className="bar_iconn" />{" "}
                  </div>
                </div>
              ) : null}

              {location.pathname === `/profile` ? (
                <div className="text-right">
                  <div className="bars_icon">
                    <FiSettings
                      onClick={() => history.push("/setting")}
                      className="setting_iconn"
                    />{" "}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div className="col-md-4"> </div>
        </div>
      </div>

      <div className="sidenavbar" id="mysidenavbar">
        <div className="close_icon">
          {" "}
          <a href="javascript:void(0)" onClick={closebtn}>
            {" "}
            <GrFormClose className="close_iconn" />{" "}
          </a>{" "}
        </div>
        <div className="p-5">
       

          <div onClick={() => history.push("/setting")}> setting </div>
      
        </div>
      </div>
    </>
  );
};
