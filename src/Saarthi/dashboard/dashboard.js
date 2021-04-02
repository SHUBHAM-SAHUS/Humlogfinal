import React, { useState } from "react";
import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { serialize } from "object-to-formdata";
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';


import * as UserActions from "redux/actions/UserActions";
import TabsUI from "components/commoncomponent/TabsUI.js"
import { GrMore } from "react-icons/gr";
import Menu from "@material-ui/core/Menu";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { TiTickOutline } from "react-icons/ti";
import { MdTouchApp } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa";
import { MenuItem } from "@material-ui/core";
// import { Userapplied } from "../UserAppliedjob/Userapplied";

import "./dashboard.scss"




export const SarthiDashboard = () => {


  const dispatch = useDispatch();
  const history = useHistory();
  const { userList } = useSelector((state) => state.jobReducer);


//   const [anchorEl, setAnchorEl] = useState(null);
  const changeUserJobStatus = (status, job, userId,popupState) => {
    // let jobData = job;
    // jobData.status = status;
    // let data = { _id: userId, jobs: JSON.stringify(jobData) }
    // let formData = serialize(data);

    // dispatch(UserActions.updateUserData({ formData }))
    //   .then((res) => {
    //     if (res.value.success) {
    //       console.log(res.value.message);
    //       popupState.close()

    //     }
    //   })
    //   .catch((err) => console.log(err));
  }

  const labelsData = ['Location Leads', 'Self Leads', 'New User Enrolled', 'Existing User Employed'];


  const setTabData = (status) => {
      return <div></div>

    // if (userList && userList.length > 0) {

    //   return userList.filter(user => user.jobs[0].status == status).map((user, index) => {

    //     return (<>
    //       <div className="col-12  d-flex pt-3 pb-3 justify-content-between mt-1" key={user._id}>

    //         <div className="d-flex">

    //           <div className="">
    //             <img
    //               src={user.profile_pic}
    //               onerror={men}
    //               width="80px"
    //               height="80px"
    //               alt="men"
    //               className="rounded-circle"
    //             />
    //           </div>

    //           <div className="ml-3">
    //             <h2 className="user_nme mt-1 ">{user.name}</h2>
    //             <p className="user_ua mt-2">{user._id}</p>
    //             <p className="user_ub">hjhj </p>
    //             <p className="user_uc"> Status {user.jobs[0].status} </p>
    //           </div>
    //         </div>
    //         <div className="mb-2">

    //           <PopupState variant="popover" popupId="demo-popup-menu">
    //             {(popupState) => (<>
    //               <GrMore {...bindTrigger(popupState)} />
    //               < Menu {...bindMenu(popupState)} >

    //                 <MenuItem><MdTouchApp className="fnt_icon" /> View</MenuItem>
    //                 <MenuItem onClick={() => changeUserJobStatus('Shortlisted', user.jobs[0], user._id,popupState)}><MdTouchApp className="fnt_icon" />Shortlist</MenuItem>
    //                 <MenuItem onClick={() => changeUserJobStatus('Selected', user.jobs[0], user._id,popupState)}><TiTickOutline className="fnt_icon" />Select</MenuItem>
    //                 <MenuItem onClick={() => changeUserJobStatus('Rejected', user.jobs[0], user._id,popupState)}><AiOutlineCloseCircle className="fnt_icon" /> Reject</MenuItem>
    //                 <MenuItem><FaRegListAlt className="fnt_icon" /> Schedule interview</MenuItem>
    //               </Menu>

    //             </>)}
    //           </PopupState>

    //         </div>
    //       </div>


    //     </>

    //     )




    //   })
    // }


  }

  const tabsData = {
    0: <tabs> <div>
        </div></tabs>,
    1: <tabs><div></div></tabs>,
    2: <tabs><div>
         <div className="d-flex ">
        <button className = "blue-gradient w-100 p-4" onClick={()=>history.push('/sarthi/newUser')}>Create New User <AiOutlinePlusCircle/></button>
        </div>
        </div></tabs>,
    3: <tabs><div></div></tabs>,

  };
  return (
    <>
      <div className="st  m-0 p-0" >
        <TabsUI labels={labelsData} tabs={tabsData} />
      </div>

    </>
  )
}


