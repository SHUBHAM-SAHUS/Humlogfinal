import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { serialize } from "object-to-formdata";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import * as UserActions from "redux/actions/UserActions";
import * as jobActions from "redux/actions/JobActions";
import TabsUI from "../../commoncomponent/TabsUI.js";
import { GrMore } from "react-icons/gr";
import Menu from "@material-ui/core/Menu";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TiTickOutline } from "react-icons/ti";
import { MdTouchApp } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa";
import { MenuItem } from "@material-ui/core";
import { Userapplied } from "../UserAppliedjob/Userapplied";
import men from "assets/images/thumbnails/user1.png";
import storage from "utils/storage.js";

export const RecruiterApplied = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { userList } = useSelector((state) => state.jobReducer);

 

  const [anchorEl, setAnchorEl] = useState(null);
  const changeUserJobStatus = (status, job, userId, popupState) => {
    let jobData = job;
    jobData.status = status;
    let data = { _id: userId, jobs: JSON.stringify(jobData) };
    let formData = serialize(data);

    dispatch(UserActions.updateUserData({ formData }))
      .then((res) => {
        if (res.value.success) {
          console.log(res.value.message);
          popupState.close();
          setTabData("Shortlisted");
        }
      })
      .catch((err) => console.log(err));
  };

  const labelsData = [
    "Applied",
    "Good Fit",
    "Schedule Interview",
    "Not a Fit",
    "Hired",
  ];
  const onError = (img) => {
    if (!img.errored) {
      img = men;
    }
  };
  useEffect(() => {}, []);

  const setTabData = (status) => {
    if (userList && userList.length > 0) {
      return userList
        .filter((user) => user.jobs[0].status == status)
        .map((user, index) => {
          return (
            <>
              <div
                className="col-12  d-flex pt-3 pb-3 justify-content-between  border"
                key={user._id}
              >
                <div className="d-flex">
                  <div
                    className=""
                    onClick={() =>
                      history.push({
                        pathname: "/user/Userprofile",
                        search: "?id=" + user._id,
                      })
                    }
                  >
                    <img
                      src={
                        user.profile_pic?.length > 0 ? user.profile_pic : men
                      }
                      width="80px"
                      height="80px"
                      alt="men"
                      className="rounded-circle"
                    />
                  </div>

                  <div className="ml-3">
                    <h2
                      className="user_nme mt-1  text-capitalize"
                      onClick={() =>
                        history.push({
                          pathname: "/user/Userprofile",
                          search: "?id=" + user._id,
                        })
                      }
                    >
                      {user.name}
                    </h2>
                    <p className="user_ub">{user.current_location}</p>
                    <p className="user_uc">
                      {" "}
                      Status:{" "}
                      {user.jobs[0].status == "Selected"
                        ? "Interview Scheduled"
                        : user.jobs[0].status}{" "}
                    </p>
                  </div>
                </div>
                <div className="mb-2">
                  {status == "Hired" ? (
                    ""
                  ) : (
                    <PopupState variant="popover" popupId="demo-popup-menu">
                      {(popupState) => (
                        <>
                          <GrMore {...bindTrigger(popupState)} />
                          <Menu {...bindMenu(popupState)}>
                            <MenuItem
                              onClick={() =>
                                history.push({
                                  pathname: "/user/Userprofile",
                                  search: "?id=" + user._id,
                                })
                              }
                            >
                              <MdTouchApp className="fnt_icon" /> View
                            </MenuItem>
                            {status != "Shortlisted" && (
                              <MenuItem
                                onClick={() =>
                                  changeUserJobStatus(
                                    "Shortlisted",
                                    user.jobs[0],
                                    user._id,
                                    popupState
                                  )
                                }
                              >
                                <MdTouchApp className="fnt_icon" />
                                Shortlist
                              </MenuItem>
                            )}
                     
                            {status != "Rejected" && (
                              <MenuItem
                                onClick={() =>
                                  changeUserJobStatus(
                                    "Rejected",
                                    user.jobs[0],
                                    user._id,
                                    popupState
                                  )
                                }
                              >
                                <AiOutlineCloseCircle className="fnt_icon" />{" "}
                                Reject
                              </MenuItem>
                            )}
                            {status != "Selected" && (
                              <MenuItem
                                onClick={() =>
                                  history.push({
                                    pathname: "/scheduleInterview",
                                    state: {
                                      recruiter_id: storage.get("humlog_user"),
                                      jobs: user.jobs[0],
                                      seeker_id: user._id,
                                    },
                                  })
                                }
                              >
                                <FaRegListAlt className="fnt_icon" /> Schedule
                                interview
                              </MenuItem>
                            )}
                            {status != "Hired" && (
                              <MenuItem
                                onClick={() =>
                                  changeUserJobStatus(
                                    "Hired",
                                    user.jobs[0],
                                    user._id,
                                    popupState
                                  )
                                }
                              >
                                <TiTickOutline className="fnt_icon" /> Hired
                              </MenuItem>
                            )}
                          </Menu>
                        </>
                      )}
                    </PopupState>
                  )}
                </div>
              </div>
            </>
          );
        });
    }
  };

  const tabsData = {
    0: <Userapplied> {setTabData("Applied")} </Userapplied>,
    1: <Userapplied>{setTabData("Shortlisted")}</Userapplied>,
    2: <Userapplied>{setTabData("Selected")}</Userapplied>,
    3: <Userapplied>{setTabData("Rejected")}</Userapplied>,
    4: <Userapplied>{setTabData("Hired")}</Userapplied>,
  };
  <Userapplied />;
  return (
    <>
      <div className="st  m-0 p-0">
        <TabsUI labels={labelsData} tabs={tabsData} />
      </div>
    </>
  );
};
