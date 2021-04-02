import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as JobActions from "redux/actions/JobActions";
import "./recruiterapplieduser.scss";
import { GrMore } from "react-icons/gr";
import Menu from "@material-ui/core/Menu";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ImSwitch } from "react-icons/im";
import { AiOutlineSetting } from "react-icons/ai";
import { TiTickOutline } from "react-icons/ti";
import { MdTouchApp } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa";

import { Select, MenuItem } from "@material-ui/core";


function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export const Userapplied = ({ children }) => {
  const dispatch = useDispatch();
  let query = useQuery();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      setLoaded(true);
      dispatch(JobActions.getUserListByJobId(query.get("id")));
    }
  }, []);

  return (
    <>
      <div className="main_notification border">
        <div className="container">
          <div className="row ">{children}</div>
        </div>
      </div>
    </>
  );
};
