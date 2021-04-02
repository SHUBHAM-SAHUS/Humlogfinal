import React, { useState } from "react";

import { Select, MenuItem } from "@material-ui/core";
import { MdLocationOn } from "react-icons/md";
import group from "../../../assets/images/Group.png";
import { useDispatch, useSelector } from "react-redux";
import { FaCamera } from "react-icons/fa";
import { serialize } from "object-to-formdata";
import storage from "utils/storage";

import * as userActions from "redux/actions/UserActions";
import { UserActionTypes } from "redux/actions/UserActions/actionType";

import {
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineYoutube,
} from "react-icons/ai";
import { BsBriefcase, BsPencil, BsBook } from "react-icons/bs";
import { GiPencilBrush, GiPencilRuler } from "react-icons/gi";
import { IoBookOutline } from "react-icons/";
import { FiPhoneCall } from "react-icons/fi";
import { FaTransgender, FaLanguage } from "react-icons/fa";
import { MdCake } from "react-icons/md";

import { Educatiofrm } from "components/formmodal/education/Educationfrm";
import { SkillsForm } from "components/formmodal/skills/skillsForm";
import { Persnalinfomodal } from "components/commonmodal/Persnalinfomodal";
import CommonModal from "components/shared/ui-components/common-modal";

import * as commonService from "utils/CommonService.js";
import { Userprofileinput } from "components/formmodal/userprofie/Userprofileinput";
import { Industryinterested } from "components/formmodal/industry/Industryinteresred";
import { Aboutself } from "components/formmodal/aboutself/Aboutself";
import { Experience } from "components/formmodal/experience/Experience";
import { CompanyProfileform } from "../companyprofileform/CompanyProfileform";
import {useHistory} from "react-router-dom";


export const CompanyProfileEdit = (props) => {
  const { userDetails } = useSelector((state) => state.userReducer);
  const history = useHistory();

  const [picture, setPicture] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8yJmOL8nb6x7NO2xuLB-Cc1qP2MRFdq24qg&usqp=CAU");
  const dispatch = useDispatch();

  const uploadVedioResume = (e) => {
    let formData = serialize({
      video_resume: e.target.files[0],
      _id: localStorage.getItem("humlog_user"),
    });
    dispatch(userActions.updateUserData({ formData }))
      .then((res) => {
        if (res.value.success) {
    
           history.push("/jobs")
        }
      })
      .catch((err) => console.log(err));
  };
  const onChangePicture = (e) => {
    setPicture(URL.createObjectURL(e.target.files[0]));

    if (picture && picture.length > 0) {
      let formData = serialize({
        profile_pic: e.target.files[0],
        _id: localStorage.getItem("humlog_user"),
      });

      dispatch(userActions.updateUserData({ formData }))
        .then((res) => {
          if (res.value.success) {
        
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const pic = () => {};

  let defaultForm = () => <div></div>;
  const [state, setState] = React.useState({ open: false });
  const [form, setForm] = React.useState({ defaultForm });

  const handelModal = (component) => {
    setState({ open: true });
    setForm(component);
  };

  const handelClose = () => {
    setState({ open: false });
  };

  const [choice, setchoice] = useState("");

  

  const update = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
  
      <CommonModal open={state.open} handelClose={handelClose}>
        {form}
      </CommonModal>

      <div className="main_user st">
        <div className="">
          <div className="row p-0 m-0 no-gutters">
            <div className="col-12 main-section text-center">
              <div className="  px-2 px-lg-4">
                <div className="">
                

                  <div className="d-flex justify-content-center ">
                    <div className="img_style_prev main_pic_box">
                 
                  

{userDetails.profile_pic &&
                        userDetails.profile_pic.length > 0 ? (
                          <img
                            className="playerProfilePic_home_tile"
                            src={userDetails.profile_pic}
                            width="100%"
                            className="imgcls"
                          />
                        ) : (
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8yJmOL8nb6x7NO2xuLB-Cc1qP2MRFdq24qg&usqp=CAU"
                            className="rounded-circle img-thumbnail"
                          />
                        )}










                      <input
                        type="file"
                        className="d-none"
                        id="cam"
                        onChange={onChangePicture}
                        accept="image/*"
                      />
                      <label for="cam">
                        {" "}
                        <FaCamera className="camera_position" />{" "}
                      </label>
                    </div>
                  </div>

                  <h5 className="mt-1 font-weight-bold">
                    {" "}
                    {userDetails &&
                    userDetails.company_name &&
                    userDetails.name.length > 0
                      ? userDetails.company_name
                      : "Company Name"}
                  </h5>

                  <h5 className="ltr_clr mt-2 text-left user_m">
                 
                  </h5>
             
                  
                  <div className=" ">
                    <div className="d-flex justify-content-between"></div>
                  </div>

                  <CompanyProfileform />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
