import React, { useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import LinearProgress from "@material-ui/core/LinearProgress";

// import "./userprofilescss/user.scss";
import { Select, MenuItem } from "@material-ui/core";
import { MdLocationOn } from "react-icons/md";
// import group from "../../../assets/images/Group.png";
import { useDispatch, useSelector } from "react-redux";
import { FaCamera } from "react-icons/fa";
import { serialize } from "object-to-formdata";
import storage from "utils/storage";
import { useHistory } from "react-router-dom";
import * as userActions from "redux/actions/UserActions";
import useri from "../../../src/assets/images/useri.png";
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
// import { CommonModal } from "components/commonmodal/Commonmodal";
import { Educatiofrm } from "components/formmodal/education/Educationfrm";
import { SkillsForm } from "components/formmodal/skills/skillsForm";
import { Persnalinfomodal } from "components/commonmodal/Persnalinfomodal";
import CommonModal from "components/shared/ui-components/common-modal";
import { GiPowerButton } from "react-icons/gi";
// import * as authActions from "redux/actions/AuthActions";

import * as commonService from "utils/CommonService.js";
import { Userprofileinput } from "components/formmodal/userprofie/Userprofileinput";
import { Industryinterested } from "components/formmodal/industry/Industryinteresred";
import { Aboutself } from "components/formmodal/aboutself/Aboutself";
import { Experience } from "components/formmodal/experience/Experience";
import { Updatename } from "components/formmodal/username/Updatename";
import * as authActions from "redux/actions/AuthActions";
import agi from "../../assets/images/agei.png";
import booki from "../../../src/assets/images/booki.png";
import genderi from "../../../src/assets/images/genderi.png";
import jobi from "../../../src/assets/images/jobsi.png";
import calli from "../../../src/assets/images/calli.png";
import birthi from "../../../src/assets/images/birthi.png";
import locationi from "../../../src/assets/images/locationi.png";
import uploadi from "../../../src/assets/images/uploadi.png";
import pencili from "../../../src/assets/images/pencili.png";
import language from "../../../src/assets/images/language.png";
import { SaartghiprofileForm } from "Saarthi/FormModal/SaarthiProfileForm";
import { SaarthiProfileEdit } from "Saarthi/Usernamemodal/SaarthiProfileEdit";



const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress);

// Inspired by the former Facebook spinners.
const useStylesFacebook = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  top: {
    color: "#1a90ff",
    animationDuration: "550ms",
    position: "absolute",
    left: 0,
  },
  circle: {
    strokeLinecap: "round",
  },
}));

// import { CommonModal } from "../commoncomponent/CommonModal";
// import { CommonModal } from "../commoncomponent/CommonModal";
export const SaarthiProfile = (props) => {
  const { userDetails } = useSelector((state) => state.userReducer);
  let userId = storage.get("humlog_user");
  const history = useHistory();

  const [picture, setPicture] = useState(null);
  const [profilePercentage, setProfilePercentage] = useState(0);
  const dispatch = useDispatch();

  const uploadVedioResume = (e) => {
    let formData = serialize({
      video_resume: e.target.files[0],
      _id: localStorage.getItem("humlog_user"),
    });
    dispatch(userActions.updateUserData({ formData }))
      .then((res) => {
        if (res.value.success) {
          console.log(res.value.message);
          //  history.push("/user/basicdetail/jobinterested")
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
            console.log(res.value.message);
            //  history.push("/user/basicdetail/jobinterested")
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const pic = () => {};

  let defaultForm = () => <div></div>;
  const [state, setState] = useState({ open: false });
  const [form, setForm] = useState({ defaultForm });

  const handelModal = (component) => {
    setState({ open: true });
    setForm(component);
  };

  const handelClose = () => {
    setState({ open: false });
  };

  const [choice, setchoice] = useState("");
  const [pData, setPdata] = useState("");

  // const [showModal, handelModal] = useState(false);
  // const [ashowModal, ahandelModal] = useState(false);

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
  const setDataprogress = () => {
    if (userDetails && Object.keys(userDetails).length > 0) {
      let x = 0;
      x = userDetails.about_me?.length > 0 ? x + 5 : x + 0;

      x = userDetails.contact?.length > 0 ? x + 5 : x + 0;

      x = userDetails.language_known?.length > 0 ? x + 4 : x + 0;

      x = userDetails.educational_info?.length > 0 ? x + 5 : x + 0;

      x = userDetails.experience?.length > 0 ? x + 5 : x + 0;

      x = userDetails.name?.length > 0 ? x + 5 : x + 0;

      x = userDetails.dob?.length > 0 ? x + 5 : x + 0;

      x = userDetails.speak_english?.length > 0 ? x + 6 : x + 0;

      x = userDetails.address_current?.length > 0 ? x + 4 : x + 0;

      x = userDetails.address_home?.length > 0 ? x + 5 : x + 0;

      x = userDetails.address_work?.length > 0 ? x + 5 : x + 0;

      x = userDetails.profile_pic?.length > 0 ? x + 3 : x + 0;

      x = userDetails.job_intrested?.length > 0 ? x + 5 : x + 0;

      x = userDetails.skills?.length > 0 ? x + 7 : x + 0;

      x = userDetails.gender?.length > 0 ? x + 5 : x + 0;

      x = userDetails.video_resume?.length > 0 ? x + 15 : x + 0;

      setProfilePercentage(x);
    }
  };
  useEffect(() => {
    setDataprogress();
  }, [userDetails]);

  return (
    <>
        <CommonModal open={state.open} handelClose={handelClose}>
        {form}
      </CommonModal>
    <div className="main_user st container">
        
        <div className="row p-0 m-0 no-gutters">
          <div className="col-12">
          <div className="d-flex justify-content-center ">
                    <div>
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
                            src="https://3iservices.in/humlog/img/Vector@2x.png"
                            className="rounded-circle img-thumbnail"
                          />
                        )}

                        <input
                          type="file"
                          className="d-none"
                          id="cam"
                          onChange={onChangePicture}
                        />
                        <label for="cam">
                          {" "}
                          <FaCamera className="camera_position" />{" "}
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mt-1 text-capitalize d-flex justify-content-center">
                    {" "}
                    {userDetails &&
                    userDetails.name &&
                    userDetails.name.length > 0
                      ? userDetails.name
                      : ""}
                    <sup>
                      <BsPencil
                        className=" pencil"
                        onClick={() =>
                          handelModal(<SaarthiProfileEdit  handelClose={handelClose}/>)
                        }
                      />
                    </sup>
                   </div>
                   

                   <div className="mt-1 text-capitalize d-flex justify-content-center">

                   <p>
                    <i className="fa fa-map-marker"></i>{" "}
                    {userDetails &&
                    userDetails.contact &&
                    userDetails.contact.length > 0
                      ? userDetails.contact
                      : ""}{" "}
                    
                    |
                    {" "}
                    {userDetails &&
                    userDetails.address_home &&
                    userDetails.address_home.length > 0
                      ? userDetails.address_home
                      : ""}
                  </p>

                   </div>
            
             
              </div>
          </div>

                         {/* start persnalinfo */}
                         <div className="row m-0 p-0 no-gutters" >
                                     <div className="col-12">
                                     <div>
                    <div className="d-flex justify-content-between mt-3">
                      <div>
                        <img
                          src={useri}
                          className="user_icon "
                          width="16px"
                          height="16px"
                        />

                        <h6 className="user_one text-left ml-1">
                          Personal Information
                        </h6>
                      </div>

                      <BsPencil
                        className="user_icon pencil"
                        onClick={() =>
                          handelModal(<SaartghiprofileForm  handelClose={handelClose}/>)
                        }
                      />
                    </div>
                  </div>
                      
                        

                                     </div>


                                   </div>

                                  {/* end persnal info */}
              {/* start peronal info */}
              <div className="row p-0 m-0 no-gutters">
                                     <div className="col-6 mt-2" >

                      <div>
                         <div className="row p-0 m-0 no-gutters">
                           <div className="col-2"></div>
                           <div className="col-10"></div>

                         </div>

                
                      
                      </div>   
                       
                      <div className="text-left mt-1">
                      <div>
                        <span className="user_iconp d-flex mt-2">
                          <img src={birthi} className=" user_icona" />
                          <h6 className="user_tt ml-2">age</h6>
                        </span>

                        <p className="user_tt ml-4">
                          {" "}
                          {(userDetails &&
                            userDetails.dob &&
                            userDetails.dob.length) > 0
                            ? userDetails.dob
                            : ""}
                        </p>
                      </div>


                    <span className="user_iconp d-flex">
                      {" "}
                      <img
                        src={genderi}
                        className=" mt-1"
                        width="16px"
                        height="16px "
                      />
                      <p className=" ml-2 user_yb"> Gender </p>
                    </span>

                    <p className="user_tt ml-4">
                    {userDetails && userDetails.gender === 0
                          ? "Female"
                          : userDetails && userDetails.gender == 1
                          ? "Male"
                          : userDetails && userDetails.gender == 2
                          ? "Others"
                      : ""}
                    </p>


                  


                      

                      <div>
                     <div className="user_iconp d-flex mt-2">
                   
                
                  
                    </div>

             

                     </div>
                   </div>
                    </div>
                    <div className="col-6 mt-2"> 
                    <div>
                        <span className="user_iconp d-flex mt-2">
                          <img src={birthi} className=" user_icona" />
                          <h6 className="user_tt ml-2">Date of Birth</h6>
                        </span>

                        <p className="user_tt ml-4">
                          {" "}
                          {(userDetails &&
                            userDetails.dob &&
                            userDetails.dob.length) > 0
                            ? userDetails.dob
                            : ""}
                        </p>
                      </div>  


                       <div className="user_iconp d-flex">
                          <div>
                          <img
                            src={calli}
                            className="user_icona"
                            width="16px"
                            height="16px"
                          />
                          </div>
                                
                                <div className="ml-2 mt-1">
                                <h6 className="user_tt "> Mobile Number</h6>
                                <p className="user_yb p-0 m-0">
                          {" "}
                          {(userDetails &&
                            userDetails.contact &&
                            userDetails.contact.length) > 0
                            ? userDetails.contact
                            : ""}
                        </p>
                                </div>
                        
                        
                        </div>      
                    
                  
                   </div>
                                       

                                     </div>

              {/* end personal info */}

          </div>
              
    </>
  );
};
