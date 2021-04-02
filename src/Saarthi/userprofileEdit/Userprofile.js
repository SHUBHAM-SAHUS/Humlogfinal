import React, { useEffect, useState } from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';

import LinearProgress from '@material-ui/core/LinearProgress';

import "./userprofilescss/user.scss";
import { Select, MenuItem } from "@material-ui/core";
import { MdLocationOn } from "react-icons/md";
import group from "assets/images/Group.png";
import { useDispatch, useSelector } from "react-redux";
import { FaCamera } from "react-icons/fa";
import { serialize } from "object-to-formdata";
import storage from "utils/storage";
import { useHistory,useLocation } from "react-router-dom";
import * as userActions from "redux/actions/UserActions";
import useri from "assets/images/useri.png";
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
import { Educatiofrm } from "../formmodal1/education/Educationfrm";
import { SkillsForm } from "../formmodal1/skills/skillsForm";
import { Persnalinfomodal } from "components/commonmodal/Persnalinfomodal";
import CommonModal from "components/shared/ui-components/common-modal";
import { GiPowerButton } from "react-icons/gi";
// import * as authActions from "redux/actions/AuthActions";

import * as commonService from "utils/CommonService.js";
import { Userprofileinput } from "../formmodal1/userprofie/Userprofileinput";
import { Industryinterested } from "../formmodal1/industry/Industryinteresred";
import { Aboutself } from "../formmodal1/aboutself/Aboutself";
import { Experience } from "../formmodal1/experience/Experience";
import { Updatename } from "../formmodal1/username/Updatename";
import * as authActions from "redux/actions/AuthActions";
import agi from "assets/images/agei.png";
import booki from "assets/images/booki.png";
import genderi from "assets/images/genderi.png";
import jobi from "assets/images/jobsi.png";
import calli from "assets/images/calli.png";
import birthi from "assets/images/birthi.png";
import locationi from "assets/images/locationi.png";
import uploadi from "assets/images/uploadi.png";
import pencili from "assets/images/pencili.png";
import language from "assets/images/language.png";

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

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export const UserprofileEditBySarthi = (props) => {
  const [loaded,setLoaded]= useState(false);
  let query =useQuery();
 
  const { userDetailsById } = useSelector((state) => state.userReducer);
  const history = useHistory();

  const [picture, setPicture] = useState(null);
  const [profilePercentage,setProfilePercentage] = useState(0)
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loaded) {
      setLoaded(true);
      dispatch(userActions.getUserDataBySarthi(query.get("id")));
      console.log(userDetailsById);
    }
  }, [loaded, dispatch]);

  const uploadVedioResume = (e) => {
    let formData = serialize({
      video_resume: e.target.files[0],
      _id: userDetailsById._id,
      contact:userDetailsById.contact
        });
    dispatch(userActions.upsertUserData({ formData }))
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
        _id: userDetailsById._id,
        contact:userDetailsById.contact
      });

      dispatch(userActions.upsertUserData({ formData }))
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
    if (userDetailsById && Object.keys(userDetailsById).length > 0){
    let x = 0;
    x = userDetailsById.about_me?.length > 0 ? x + 5 : x + 0;

    x = userDetailsById.contact?.length > 0 ? x + 5 : x + 0;

    x = userDetailsById.language_known?.length > 0 ? x + 4 : x + 0;

    x = userDetailsById.educational_info?.length > 0 ? x + 5 : x + 0;

    x = userDetailsById.experience?.length > 0 ? x + 5 : x + 0;

    x = userDetailsById.name?.length > 0 ? x + 5 : x + 0;

    x = userDetailsById.dob?.length > 0 ? x + 5 : x + 0;

    x = userDetailsById.speak_english?.length > 0 ? x + 6 : x + 0;

    x = userDetailsById.address_current?.length > 0 ? x + 4 : x + 0;

    x = userDetailsById.address_home?.length > 0 ? x + 5 : x + 0;

    x = userDetailsById.address_work?.length > 0 ? x + 5 : x + 0;

    x = userDetailsById.profile_pic?.length > 0 ? x + 3 : x + 0;

    x = userDetailsById.job_intrested?.length > 0 ? x + 5 : x + 0;

    x = userDetailsById.skills?.length > 0 ? x + 7 : x + 0;

    x = userDetailsById.gender?.length > 0 ? x + 5 : x + 0;

    x = userDetailsById.video_resume?.length > 0 ? x + 15 : x + 0;







    setProfilePercentage(x)}
  };
  useEffect(()=>{
    setDataprogress()
  },[userDetailsById])

  return (
    <>
     <CommonModal open={state.open} handelClose={handelClose}>
        {form}
      </CommonModal>
    <div className="main_user st">
        
        <div className="row p-0 m-0 no-gutters">
          <div className="col-12">
          <div className="d-flex justify-content-center ">
                    <div>
                      <div className="img_style_prev main_pic_box">
                        {userDetailsById.profile_pic &&
                        userDetailsById.profile_pic.length > 0 ? (
                          <img
                            className="playerProfilePic_home_tile"
                            src={userDetailsById.profile_pic}
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

                  <div className="mt-1 text-capitalize d-flex justify-content-center font-weight-bold">
                    {" "}
                    {userDetailsById &&
                    userDetailsById.name &&
                    userDetailsById.name.length > 0
                      ? userDetailsById.name
                      : ""}
                    <sup>
                  
                    </sup>
                   </div>

                   <div className="mt-1 text-capitalize d-flex justify-content-center">

                   <p>
                    <i className="fa fa-map-marker"></i>{" "}
                    {userDetailsById &&
                    userDetailsById.contact &&
                    userDetailsById.contact.length > 0
                      ? userDetailsById.contact
                      : ""}{" "}
                    
                    |
                    {" "}
                    {userDetailsById &&
                    userDetailsById.address_home &&
                    userDetailsById.address_home.length > 0
                      ? userDetailsById.address_home
                      : ""}
                  </p>

                   </div>
            
             
              </div>
          </div>
              
             
                    <div className="container">
                       {/* start progress bar codes */}
                 <div className="row p-0 m-0 no-gutters">
                    <div className="col-12">
                    <h6 className="text-left">{Math.round(profilePercentage)}% Profile Completed</h6>
                        <BorderLinearProgress variant="determinate" value={profilePercentage} />


                    </div>


                   </div>
                      {/* end progress bar codes */}
                         {/* start about section */}
                         <div className="row p-0 m-0 no-gutters">
                         <div className="col-12 mt-2">
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
                      <div>
                      <BsPencil
                        className="pencil"
                        onClick={() =>
                          handelModal(<Aboutself handelClose={handelClose} />)
                        }
                      />
                      </div>
                    </div>

                    <p className="p1 ltr_clr text-left text-lowercase">
                      I am{" "}
                      {userDetailsById &&
                      userDetailsById.about_me &&
                      userDetailsById.about_me.length > 0
                        ? userDetailsById.about_me.map((data) => data.label + ", ")
                        : ""}
                    </p>
                  </div>        
                        



                           </div>

                         {/* end about section */}


                         {/* start job categeory page */}
                               
                          <div className="row p-0 m-0 no-gutters">
                            <div className="col-12">

                            <div className="d-flex justify-content-between ">
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
                    {userDetailsById &&
                      userDetailsById.job_intrested &&
                      userDetailsById.job_intrested.length > 0 &&
                      userDetailsById.job_intrested.map((val) => {
                        return (
                          <>
                            <div className="user_btna mr-2">{val}</div>
                          </>
                        );
                      })}
                  </div>
                                  

                              </div>


                          </div>



                         {/* end job categeory */}

                            {/* start experience */}
                                  
                           <div className="row p- m-0 no-gutters">
                             <div className="col-12">


                             </div>

                             </div>

                            {/* end experience */}

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
                      {userDetailsById && userDetailsById.experience == 0
                        ? "Fresher"
                        : userDetailsById && userDetailsById.experience == 1
                        ? "Less than 1 Year"
                        : userDetailsById && userDetailsById.experience == 2
                        ? "1-2 years"
                        : userDetailsById && userDetailsById.experience == 3
                        ? "2-4 years"
                        : userDetailsById && userDetailsById.experience == 4
                        ? "4-6 years"
                        : userDetailsById && userDetailsById.experience == 5
                        ? "6-8 years"
                        : userDetailsById && userDetailsById.experience == 6
                        ? "8-10 years"
                        : userDetailsById && userDetailsById.experience == 7
                        ? "10+ years"
                        : ""}
                    </p>

                  
                  </div>
                          
                                   
                                   {/* start skills codes */}

                                       <div className="row p-0 m-0 no-gutters">
                                         <div className="col-12">


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
                         {userDetailsById &&
                           userDetailsById.skills &&
                           userDetailsById.skills.length > 0 &&
                           userDetailsById.skills.map((val) => {
                             return (
                               <>
                               
                                 <div className=" mr-1 user_btaaa mt-1">{val}</div>
                                 
                                   
                                         </>
                             );
                           })}
     
                           </p> 
                           </div>
                          </div>



                                         </div>



                                       </div>

                                   {/* end skills codes */}

                                   {/* education codes start */}

                                    <div className="row p-0 m-0 no-gutters">
                                      <div className="col-12">
                                      <div className="d-flex justify-content-between ">
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
                        {userDetailsById && userDetailsById.qualification === 0
                          ? "below 10"
                          : userDetailsById && userDetailsById.qualification == 1
                          ? "10 th pass"
                          : userDetailsById && userDetailsById.qualification == 2
                          ? "12 th pass"
                          : userDetailsById && userDetailsById.qualification === 3
                          ? "Graduation & above"
                          : "PG"}
                      </h4>


        

                    <h4 className="text-left  user_tt mt-1">
                    {userDetailsById &&
                      userDetailsById.educational_info &&
                      userDetailsById.educational_info.length > 0 &&
                      userDetailsById.educational_info.map((val) => {
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


                                      </div>

                                    </div>

                                   {/* end  education codes  */}


                                  {/* start video codes */}
                                       <div className="row p-0 m-0 no-gutters">
                                       <div className="col-12">
                                         
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
                  <h6 className="word_brk">{userDetailsById && userDetailsById.video_resume}</h6> 



                                       </div>


                                       </div>



                                  {/* end video codes */}

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
                          handelModal(
                            <Userprofileinput handelClose={handelClose} />
                          )
                        }
                      />
                    </div>
                  </div>
                                      

                                     </div>


                                   </div>

                                  {/* end persnal info */}

                                  {/* persnal info userDetailsById */}
                                     
                                     <div className="row p-0 m-0 no-gutters">
                                     <div className="col-6 mt-2" >

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
                          {(userDetailsById &&
                            userDetailsById.contact &&
                            userDetailsById.contact.length) > 0
                            ? userDetailsById.contact
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
                    {userDetailsById && userDetailsById.gender === 0
                          ? "Female"
                          : userDetailsById && userDetailsById.gender == 1
                          ? "Male"
                          : userDetailsById && userDetailsById.gender == 2
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
                          {(userDetailsById &&
                            userDetailsById.dob &&
                            userDetailsById.dob.length) > 0
                            ? userDetailsById.dob
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
                    {userDetailsById &&
                      userDetailsById.language_known &&
                      userDetailsById.language_known.length > 0 &&
                      userDetailsById.language_known.map((val) => {
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
                    <div className="col-6 mt-2">         
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
                      {(userDetailsById &&
                        userDetailsById.address_current &&
                        userDetailsById.address_current.length) > 0
                        ? userDetailsById.address_current
                        : ""}
                    </p>
                    <p className="user_tt ml-2 text-capitalize mt-2 ml-4">
                      {" "}
                      Preferred work location{" "}
                    </p>
                    <p className="user_tt ml-2 text-capitalize ml-4">
                      {" "}
                      {(userDetailsById &&
                        userDetailsById.address_work &&
                        userDetailsById.address_work.length) > 0
                        ? userDetailsById.address_work
                        : ""}
                    </p>

                    <p className="user_tt ml-2 text-capitalize mt-2 ml-4">
                      {" "}
                      Home location{" "}
                    </p>
                    <p className="user_tt ml-2 text-capitalize ml-4">
                      {" "}
                      {(userDetailsById &&
                        userDetailsById.address_home &&
                        userDetailsById.address_home.length) > 0
                        ? userDetailsById.address_home
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
                      {(userDetailsById &&
                        userDetailsById.speak_english &&
                        userDetailsById.speak_english.length) > 0
                        ? userDetailsById.speak_english
                        : ""}{" "}
                    </p>
                  </div>
                  
                  
                  
                   </div>
                                       

                                     </div>

                                  {/* end persnal info */}
                          

                 </div>


           
            

      </div>
     
    </>
  );
};
