import React, { useEffect, useState } from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';

import LinearProgress from '@material-ui/core/LinearProgress';

import "./userprofilescss/user.scss";
import { Select, MenuItem } from "@material-ui/core";
import { MdLocationOn } from "react-icons/md";
import group from "../../../assets/images/Group.png";
import { useDispatch, useSelector } from "react-redux";
import { FaCamera } from "react-icons/fa";
import { serialize } from "object-to-formdata";
import storage from "utils/storage";
import { useHistory } from "react-router-dom";
import * as userActions from "redux/actions/UserActions";
import useri from "../../../assets/images/useri.png";
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
import agi from "../../../assets/images/agei.png";
import booki from "../../../assets/images/booki.png";
import genderi from "../../../assets/images/genderi.png";
import jobi from "../../../assets/images/jobsi.png";
import calli from "../../../assets/images/calli.png";
import birthi from "../../../assets/images/birthi.png";
import locationi from "../../../assets/images/locationi.png";
import uploadi from "../../../assets/images/uploadi.png";
import pencili from "../../../assets/images/pencili.png";
import language from "../../../assets/images/language.png";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

// Inspired by the former Facebook spinners.
const useStylesFacebook = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  top: {
    color: '#1a90ff',
    animationDuration: '550ms',
    position: 'absolute',
    left: 0,
  },
  circle: {
    strokeLinecap: 'round',
  },
}));


// import { CommonModal } from "../commoncomponent/CommonModal";
// import { CommonModal } from "../commoncomponent/CommonModal";
export const UserprofileEdit = (props) => {
  const { userDetails } = useSelector((state) => state.userReducer);
  let userId = storage.get("humlog_user");
  const history = useHistory();

  const [picture, setPicture] = useState(null);
  const [profilePercentage,setProfilePercentage] = useState(0)
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
  // const setDataprogress = () => {
  //   if (userDetails && Object.keys(userDetails).length > 0){
  //   let x = 0;
  //   x = userDetails.about_me.length > 0 ? x + 100/15 : x + 0;

  //   x = userDetails.contact.length > 0 ? x + 100/15 : x + 0;

  //   x = userDetails.language_known.length > 0 ? x + 100/15 : x + 0;

  //   x = userDetails.address.length > 0 ? x + 100/15 : x + 0;

  //   x = userDetails.age.length > 0 ? x + 100/15 : x + 0;

  //   x = userDetails.educational_info.length > 0 ? x + 100/15 : x + 0;

  //   x = userDetails.experience.length > 0 ? x + 100/15 : x + 0;

  //   x = userDetails.contact.length > 0 ? x + 100/15 : x + 0;

  //   x = userDetails.name.length > 0 ? x + 100/15 : x + 0;

  //   x = userDetails.qualification.length > 0 ? x + 100/15 : x + 0;

  //   x = userDetails.dob?.length > 0 ? x + 100/15 : x + 0;

  //   x = userDetails.speak_english?.length > 0 ? x + 100/15 : x + 0;

  //   x = userDetails.address_current?.length > 0 ? x + 100/15 : x + 0;

  //   x = userDetails.address_home?.length > 0 ? x + 100/15 : x + 0;

  //   x = userDetails.address_work?.length > 0 ? x + 100/15 : x + 0;



  //   setProfilePercentage(x)}
  // };
  // useEffect(()=>{
  //   setDataprogress()
  // },[userDetails])

  return (
    <>
   
      <CommonModal open={state.open} handelClose={handelClose}>
        {form}
      </CommonModal>

      <div className="main_user st">
        <div className="">
          <div className="row">
            <div className="col-12 main-section text-center">
              <div className=" pt-4 px-2 ">
                <div className="">
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

                  <h5 className="mt-1 text-capitalize d-flex justify-content-center">
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
                          handelModal(<Updatename handelClose={handelClose} />)
                        }
                      />
                    </sup>
                  </h5>

                  <p>
                    <i className="fa fa-map-marker"></i>{" "}
                    {userDetails &&
                    userDetails.contact &&
                    userDetails.contact.length > 0
                      ? userDetails.contact
                      : ""}{" "}
                    
                    {userDetails &&
                    userDetails.address_current &&
                    userDetails.address_current.length > 0
                      ? userDetails.address_current
                      : ""}
                    {" "}
                    {userDetails &&
                    userDetails.address_home &&
                    userDetails.address_home.length > 0
                      ? userDetails.address_home
                      : ""}
                  </p>

                  <div className="d-flex justify-content-center">
                    
                    {/* <button className="btn btn-primary mb-2" onClick={()=>history.push("/Editprofile")}> Edit profile <BsPencil className="text-light"  />   </button> */}
                    {/* <br/>   <button className="btn btn-danger mb-2 ml-2 px-4" onClick={handelLogout}> Logout <GiPowerButton className="text-light"  />   </button> */}
                  </div>
                  {/* <h5 className="ltr_clr mt-2 text-left user_m">
                    57% Profile Completed
                  </h5> */}
                  {/* <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={20}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {" "}
                      <span className="sr-only">70% Complete</span>
                    </div>
                  </div> */}
                      <h6 className="text-left">{Math.round(profilePercentage)}% Profile Completed</h6>
                        <BorderLinearProgress variant="determinate" value={profilePercentage} />
            

                  <br />
                  <div className=" ">
                    <div className="d-flex justify-content-between">
                      <div>
                        <img
                          src={useri}
                          className="user_icon "
                          width="16px"
                          height="16px"
                        />

                        <h6 className="user_one text-left ml-1"> About me </h6>
                      </div>

                      <BsPencil
                        className="pencil"
                        onClick={() =>
                          handelModal(<Aboutself handelClose={handelClose} />)
                        }
                      />
                    </div>

                    <p className="p1 ltr_clr text-left">
                      I am{" "}
                      {userDetails &&
                      userDetails.about_me &&
                      userDetails.about_me.length > 0
                        ? userDetails.about_me.map((data) => data.label + ", ")
                        : ""}
                    </p>
                  </div>
                  <div className="">
                    <div className="d-flex justify-content-between">
                      <div>
                        <BsBriefcase className="user_icon" />
                        <h6 className="user_one text-left ml-1">
                          work experience
                        </h6>
                      </div>
                      <BsPencil
                        className=" pencil"
                        onClick={() =>
                          handelModal(<Experience handelClose={handelClose} />)
                        }
                      />
                    </div>

                    <p className="p2 text-left user_tt">
                      {" "}
                      {userDetails && userDetails.experience == 0
                        ? "0-6 months"
                        : userDetails && userDetails.experience == 1
                        ? "1-2 Years"
                        : userDetails && userDetails.experience == 2
                        ? "2-5 Years"
                        : "5+ Years"}
                    </p>

                  
                  </div>

                  <div className="d-flex justify-content-between mt-3">
                    <div>
                      <img
                        src={jobi}
                        className="user_icon "
                        width="16px"
                        height="16px"
                      />
                      <h6 className="user_one text-left ml-1">
                        Jobs Interested In
                      </h6>
                    </div>
                    <BsPencil
                      className=" pencil"
                      onClick={() =>
                        handelModal(
                          <Industryinterested handelClose={handelClose} />
                        )
                      }
                    />
                  </div>
                  <div className="d-flex justify-content-left">
                    {userDetails &&
                      userDetails.job_intrested &&
                      userDetails.job_intrested.length > 0 &&
                      userDetails.job_intrested.map((val) => {
                        return (
                          <>
                            <div className="user_btna mr-2">{val}</div>
                          </>
                        );
                      })}
                  </div>

                 

                    {/* start  */}
                   <div>
                         
                    <div className="d-flex justify-content-between mt-3">
                    <div>
                      <img
                        src={pencili}
                        className="user_icon text-left ml-1"
                        width="16ppx"
                        height="16px"
                      />
                      <h6 className="user_one text-left ml-1">skills</h6>
                    </div>
                    <BsPencil
                      className=" pencil"
                      onClick={() =>
                        handelModal(<SkillsForm handelClose={handelClose} />)
                      }
                    />

          </div>
          <div className="d-inline-block">
          <p>
                    {userDetails &&
                      userDetails.skills &&
                      userDetails.skills.length > 0 &&
                      userDetails.skills.map((val) => {
                        return (
                          <>
                          
                            <div className=" mr-1 user_btaaa mt-1">{val}</div>
                            
                              
                                    </>
                        );
                      })}

                      </p> 
                      </div>
                     </div>
                  





                    

                  <div className="d-flex justify-content-between mt-3">
                    <div>
                      <img
                        src={booki}
                        width="16px"
                        height="16px"
                        className="user_icon"
                      />

                      <h6 className="user_one text-left ml-1">
                        education & qualification
                      </h6>
             
                      <h4 className="text-left  user_tt mt-2">
                        {userDetails && userDetails.qualification === 0
                          ? "below 10"
                          : userDetails && userDetails.qualification == 1
                          ? "10 th pass"
                          : userDetails && userDetails.qualification == 2
                          ? "12 th pass"
                          : userDetails && userDetails.qualification === 3
                          ? "Graduation & above"
                          : "PG"}
                      </h4>


        

                    <h4 className="text-left  user_tt mt-1">
                    {userDetails &&
                      userDetails.educational_info &&
                      userDetails.educational_info.length > 0 &&
                      userDetails.educational_info.map((val) => {
                        return (
                          <>
                            <div className=" text-left mr-4">{val.institution_name}</div>
                          </>
                        );
                      })}
                       
                      </h4>



                    </div>
                    <BsPencil
                      className=" pencil"
                      onClick={() =>
                        handelModal(<Educatiofrm handelClose={handelClose} />)
                      }
                    />
                  </div>

                  <div>
                    <div className="d-flex justify-content-left"></div>
                  </div>
                  <div className="mb-2"></div>
                

                  <div className="d-flex justify-content-between mt-3">
                    <div>
                      <img src={uploadi} className="user_icon " />
                      <h6 className="user_one text-left ml-1">video resume</h6>
                    </div>
                    <input
                      type="file"
                      className="d-none"
                      id="vedio-resume"
                      onChange={uploadVedioResume}
                    />
                    <label for="vedio-resume">
                      {" "}
                      <BsPencil className="user_icon pencil" />{" "}
                    </label>
                  </div>
                  <h6 className="text-left  user_ta ">
                    {" "}
                    click to upload video{" "}
                  </h6>

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
                          handelModal(
                            <Userprofileinput handelClose={handelClose} />
                          )
                        }
                      />
                    </div>
                  </div>
                  {/* start */}
                  <div className="px-0   pt-2 pb-2 px-2">
                    <div className="row gutters-no">
                      <div className="col-6" >

                      <div>
                         <div className="row p-0 m-0 no-gutters">
                           <div className="col-2"></div>
                           <div className="col-10"></div>

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
                       
                      <div className="text-left mt-1">
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

                      <div>
                     <div className="user_iconp d-flex mt-2">
                   
                    
                      <div>
                      <img
                        src={language}
                        className=" user_icona"
                        width="16px"
                        height="16px"
                      />
                      </div>
                      <p className="user_tt  text-capitalize ml-2 mt-1 ">
                       Language I know
                    </p>
                    </div>

                    <p className="user_tt  text-capitalize  mt-1 ml-2">
                    {userDetails &&
                      userDetails.language_known &&
                      userDetails.language_known.length > 0 &&
                      userDetails.language_known.map((val) => {
                        return (
                          <>
                            <div className="user_btnaa ml-1 mt-1 ">{val}</div>
                          </>
                        );
                      })}
                    </p>

                     </div>
                   </div>
                    </div>
                      
                      
                      <div className="col-6" >         
                       <div className="text-left ">
                    <div className="user_iconp d-flex">
                      {" "}
                      <div>
                      <img
                        src={locationi}
                        className=" user_icona"
                        width="16px"
                        height="16px"
                      />
                      </div>
                           <div></div>
                      <p className=" ml-1 user_yb text-capitalize">
                      current location
                      </p>
                    </div>

                    <p className="user_tt ml-2 text-capitalize ml-4">
                      {" "}
                      {(userDetails &&
                        userDetails.address_current &&
                        userDetails.address_current.length) > 0
                        ? userDetails.address_current
                        : ""}
                    </p>
                    <p className="user_tt ml-2 text-capitalize mt-2 ml-4">
                      {" "}
                      Preferred work location{" "}
                    </p>
                    <p className="user_tt ml-2 text-capitalize ml-4">
                      {" "}
                      {(userDetails &&
                        userDetails.address_work &&
                        userDetails.address_work.length) > 0
                        ? userDetails.address_work
                        : ""}
                    </p>

                    <p className="user_tt ml-2 text-capitalize mt-2 ml-4">
                      {" "}
                      Home location{" "}
                    </p>
                    <p className="user_tt ml-2 text-capitalize ml-4">
                      {" "}
                      {(userDetails &&
                        userDetails.address_home &&
                        userDetails.address_home.length) > 0
                        ? userDetails.address_home
                        : ""}{" "}
                    </p>
                  </div>
                   

                  <div>
                   
                    <div className="user_iconp d-flex">
                    <div>
                    <img
                        src={language}
                        className=""
                        width="16px"
                        height="16px "
                      />
                      </div>
                      <div className="user_iconp d-flex  mt-2">
                    <h6 className="user_tt ml-2"> Speak English</h6>
                    </div>
                  </div>

                    <p className="user_tt text-left ml-4 mt-">
                      {" "}
                      {(userDetails &&
                        userDetails.speak_english &&
                        userDetails.speak_english.length) > 0
                        ? userDetails.speak_english
                        : ""}{" "}
                    </p>
                  </div>
                  
                  
                  
                   </div>
 


                    

             
                  </div>

                    <div>
                      <div className="d-flex justify-content-between"></div>
                    </div>
                  </div>

                  <div className="px-0  ">
                    <div className="d-flex justify-content-between ">
                      <div></div>
                    </div>

                    <div>
                      <div className="d-flex justify-content-between"></div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between">
                      <div className="row">
                        <div className='col-6'>  </div>
                        <div className='col-6'>  </div>

                      </div>




            

                


                    </div>


                   <div className="row">
                    <div className="col-6">   </div> 
                 
                     
                   
                   
                  </div>

               
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
