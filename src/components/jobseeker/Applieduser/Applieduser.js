import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { serialize } from "object-to-formdata";
import "./applieduser.scss";
import { GrMore } from "react-icons/gr";
import Menu from "@material-ui/core/Menu";
import { AiOutlineCloseCircle } from "react-icons/ai";
// import { ImSwitch } from "react-icons/im";
// import { AiOutlineSetting } from "react-icons/ai";
import { TiTickOutline } from "react-icons/ti";
// import { MdTouchApp } from "react-icons/md";
// import { FaRegListAlt } from "react-icons/fa";
import { Select, MenuItem } from "@material-ui/core";
import CommonModal from "components/shared/ui-components/common-modal";
// import { Jobmatch } from "../jobmatch/Jobmatch";
import {JobDetailModal} from "../JobDetailsmodal/JobDetailModal";
import dummylogo  from "../../../assets/images/dummylogo.png";
import * as UserActions from "redux/actions/UserActions";



export const Applieduser = (props) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(false);


  const [state, setState] = useState({ open: false });

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handelCloseModal = () => {
    setOpen(false);

    setState({ open: false });
  };
  const handelOpenModal = (data) => {
    setModalData(data)
    setOpen(true);


  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  
  // const [choice, setchoice] = useState("");
  const { userDetails } = useSelector((state) => state.userReducer);

  const update = (e) => {
    console.log(e.target.value);
  };
  const changeJobStatus =(job,status) => {
    let jobData = job;
    jobData.status = status;
    let data = { _id: userDetails._id, jobs: JSON.stringify(jobData) }
    let formData = serialize(data);

    dispatch(UserActions.updateUserData({ formData }))
      .then((res) => {
        if (res.value.success) {
          console.log(res.value.message);
        }
      })
      .catch((err) => console.log(err));

  }



  return (
    <>
    
    <CommonModal open={open} handelClose={handelCloseModal}>
 
      
   <JobDetailModal   modalData={modalData} />

    </CommonModal>
   
      <div className="main_notification border">
        <div className="container">
          {userDetails && userDetails.jobs && userDetails.jobs.length > 0 ? (
            userDetails.jobs.map((jobData) => {
                   
              if (jobData.status == props.status)
                return (
                  <div className="row border-bottom">
                    <div className="col-12  d-flex pt-3 pb-3 justify-content-between">
                      <div className="d-flex" >
                        <div className="" onClick={() => handelOpenModal(jobData)} >
                          {jobData.company_logo &&
                            jobData.company_logo.length > 0 ? (
                              <img
                                src={jobData.company_logo}
                                width="80px"
                                height="80px"
                                alt="logo"
                                className=""

                              />
                            ) : (
                              <img
                                src={dummylogo}
                                width="80px"
                                height="80px"
                                alt="logo"
                                className=""
                              />
                            )}
                        </div>

                        <div className="ml-3">
                          <h2 className="user_nme mt-1  text-capitalize" >
                            {jobData.job_title}
                          </h2>
                          <p className="user_ua mt-2 ">{jobData.company_name}</p>
                          <p className="user_ub">{jobData.job_location} </p>
                          <p className="user_uc"> {jobData.status} </p>
                        </div>
                      </div>

                      
                      {props.status=='Saved' &&
                      <div className="mb-2">
                        <GrMore onClick={handleClick} />
                        <Menu
                          id="simple-menu"
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                          onChange={update}
                        >
                          <MenuItem onClick = {()=>changeJobStatus(jobData,"Applied")}><TiTickOutline className="fnt_icon" /> Apply </MenuItem>
                          <MenuItem onClick = {()=>changeJobStatus(jobData,"Visited")}><AiOutlineCloseCircle className="fnt_icon" /> Not apply</MenuItem>
                         
                        </Menu>

                        <h6 className="post_time">{jobData.created_at} </h6>
                      </div>
                        }

                    </div>
                  </div>
                );
            })
          ) : (
              <div />
            )}
        </div>
      </div>
    </>
  );
};
