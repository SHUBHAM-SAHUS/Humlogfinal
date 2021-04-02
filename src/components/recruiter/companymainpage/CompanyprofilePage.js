import React, { useState, useEffect } from "react";
import { MdLocationOn } from "react-icons/md";
import "./companymainpage.scss";
import { Select, MenuItem } from "@material-ui/core";
import group from "../../../assets/images/Group.png";
import { useHistory } from "react-router-dom";
import { FaCamera } from "react-icons/fa";
import { GiPowerButton } from "react-icons/gi";

import {
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineYoutube,
} from "react-icons/ai";
import { BsBriefcase, BsPencil, BsBook } from "react-icons/bs";
import { GiPencilBrush, GiPencilRuler, GiSkills } from "react-icons/gi";
import { IoBookOutline } from "react-icons/";
import { FiPhoneCall } from "react-icons/fi";
import { FaTransgender, FaLanguage } from "react-icons/fa";
import { MdCake } from "react-icons/md";
import { CommonModal } from "components/commonmodal/Commonmodal";
import { Educatiofrm } from "components/formmodal/education/Educationfrm";
import { Persnalinfomodal } from "components/commonmodal/Persnalinfomodal";

import { useDispatch, useSelector } from "react-redux";
import * as userActions from "redux/actions/UserActions";
import * as authActions from "redux/actions/AuthActions";

import storage from "utils/storage";

export const CompanyprofilePage = (props) => {
  const [title, settitle] = useState("shubham");

  const [picture, setPicture] = useState(null);

  const onChangePicture = (e) => {
    setPicture(URL.createObjectURL(e.target.files[0]));
  };
  const history = useHistory();
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  let userId = storage.get("humlog_user");

  useEffect(() => {
    if (!loaded) {
      setLoaded(true);
      dispatch(userActions.getUserData(userId));
      console.log(userDetails);
    }
  }, [loaded, dispatch, userId]);
  const { userDetails } = useSelector((state) => state.userReducer);

  const [choice, setchoice] = useState("");

  const [showModal, setshowModal] = useState(false);
  const [ashowModal, asetshowModal] = useState(false);

  const update = (e) => {
    console.log(e.target.value);
  };
  const handelLogout = () => {
    dispatch(authActions.logout);
    setTimeout(() => {
      window.location.reload();
      history.push("/JobSeekerlogin");
    }, 200);
  };

  return (
    <>
      <CommonModal />

      {
        <div className="main_user st">
          <div className="container">
            <div className="row p-0 m-0 no-gutters">
              <div className="col-12 main-section text-center">
                <div className=" pt-4 px-2 px-lg-4 pb-5">
                  <div className="">
                    <div className="d-flex justify-content-center ">
                      <div className="img_style_prev main_pic_box">
                        <img
                          className="playerProfilePic_home_tile"
                          src={userDetails.profile_pic}
                          width="100%"
                          className="imgcls"
                        />

                        <input
                          type="file"
                          className="d-none"
                          id="cam"
                          onChange={onChangePicture}
                        />
                      </div>
                    </div>

                    <h5 className="mt-1">
                      {userDetails &&
                      userDetails.company_name &&
                      userDetails.company_name.length > 0
                        ? userDetails.company_name
                        : "N/A"}
                    </h5>
                    <p>
                      {userDetails &&
                      userDetails.contact &&
                      userDetails.contact.length > 0
                        ? userDetails.contact
                        : "N/A"}{" "}
                      |{" "}
                      {userDetails &&
                      userDetails.address_work &&
                      userDetails.address_work.length > 0
                        ? userDetails.address_work
                        : "N/A"}
                    </p>
                    <div className="d-flex justify-content-center">
                      <button
                        className="btn btn-primary mb-2 bttp"
                        onClick={() => history.push("/recruiterEdit")}
                      >
                        {" "}
                        Edit profile <BsPencil className="text-light" />{" "}
                      </button>
                      <button
                        className="btn btn-danger mb-2 bttp px-4 ml-2"
                        onClick={handelLogout}
                      >
                        {" "}
                        Logout <GiPowerButton className="text-light" />{" "}
                      </button>
                    </div>
                    <h5 className="ltr_clr mt-2 text-left user_m"></h5>

                    <br />

                    <div>
                      <h4 className="text-capitalize text-left ff">
                        {" "}
                        company Name :{" "}
                        {userDetails &&
                        userDetails.company_name &&
                        userDetails.company_name.length > 0
                          ? userDetails.company_name
                          : "N/A"}
                      </h4>
                      <h4 className=" text-left ff">
                        {" "}
                        company email :{" "}
                        {userDetails &&
                        userDetails.email &&
                        userDetails.email.length > 0
                          ? userDetails.email
                          : "N/A"}
                      </h4>
                      <h4 className=" text-left ff">
                        {" "}
                        company Adress :{" "}
                        {userDetails &&
                        userDetails.address_work &&
                        userDetails.address_work.length > 0
                          ? userDetails.address_work
                          : "N/A"}
                      </h4>

                      <h4 className="text-capitalize text-left ff">
                        {" "}
                        company Contact :{" "}
                        {userDetails &&
                        userDetails.contact &&
                        userDetails.contact.length > 0
                          ? userDetails.contact
                          : "N/A"}
                      </h4>
                      <h4 className="text-capitalize text-left ff">
                        {" "}
                        company person name :{" "}
                        {userDetails &&
                        userDetails.name &&
                        userDetails.name.length > 0
                          ? userDetails.name
                          : "N/A"}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};
