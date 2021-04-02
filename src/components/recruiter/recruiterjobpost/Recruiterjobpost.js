import React, { useState, useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { GiPlanetConquest } from "react-icons/gi";

import * as JobActions from "redux/actions/JobActions";
import "./recruiterpost.scss";

import { ImSwitch } from "react-icons/im";
import { useHistory } from "react-router-dom";
import { GrMore } from "react-icons/gr";
import Menu from "@material-ui/core/Menu";
import { AiOutlineSetting } from "react-icons/ai";
import { Select, MenuItem } from "@material-ui/core";
import { AiOutlineDelete, AiOutlineMinusCircle } from "react-icons/ai";
import { TiTickOutline } from "react-icons/ti";
import { MdTouchApp } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import company from "assets/images/thumbnails/altCompany.png";
import storage from "utils/storage";
import dummylogo from "../../../assets/images/dummylogo.png";

export const Recruiterjobpost = () => {
  const [choice, setchoice] = useState("");
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const update = (e) => {
    console.log(e.target.value);
  };

  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const { jobList } = useSelector((state) => state.jobReducer);

  useEffect(() => {
    if (!loaded) {
      setLoaded(true);
      dispatch(JobActions.getJobListDataById(storage.get("humlog_user")));
      console.log("testting");
    }
  }, [loaded, dispatch]);

  const getUserbyJob = (id) => {
    history.push({ pathname: "/userapplied", search: "?id=" + id });
  };

  return (
    <>
      {jobList && jobList.length == 0 ? (
        <div className="font-weight-bold card text-primary mt-5 shadow px-1">
          Thanks for creating your Profile please go to the Jobs and create
          Jobs"{" "}
        </div>
      ) : (
        <div className="App">
          {jobList.map((val) => {
            return (
              <>
                <div
                  className="border uu"
                  onClick={() => getUserbyJob(val._id)}
                >
                  <div className=" px-2 py-2 d-flex justify-content-between">
                    <div className="d-flex">
                      {val.company_logo && val.company_logo.length > 0 ? (
                        <img
                          src={
                            val.company_logo?.length > 0
                              ? val.company_logo
                              : company
                          }
                          alt="logo"
                          width="60px"
                          height="60"
                          className="rounded-circle"
                        />
                      ) : (
                        <img
                          src={dummylogo}
                          alt="logo"
                          width="60px"
                          height="60px"
                          className="img-rounded rounded-circle"
                        />
                      )}

                      <div>
                        <h6 className="ji text-capitalize mt-1 ml-3 Text_title_size">
                          {" "}
                          {val.job_title}{" "}
                        </h6>

                        <h6 className="jk mt-1 ml-3 text-capitalize Text_location_size">
                          {" "}
                          {val.job_location}
                        </h6>
                      </div>
                    </div>

                    <div className="mb-2">
              


                      <h6 className="post_time mt-1">
                        {moment(val.created_at).fromNow()}{" "}
                      </h6>

                      <div className="chipps"> active </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};
