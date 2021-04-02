import React from "react";
import "./community.scss";
import {Link} from "react-router-dom";
import { BsCameraVideo, BsFillImageFill } from "react-icons/bs";
import { RiCalendarEventLine } from "react-icons/ri";
import { Userpost } from "components/userpost/Userpost";
import men from "../../assets/images/men.jpg";
// import { HeadFooter } from "./HeadFooter";
// import { Userpost } from "./Userpost";

export const Eventcommunity = () => {
  return (
    <>
      <div className="community_main border st">
        <div className="row no-gutters">
          <div className="col-12   ">
            <div className="  zz">
              <div className="d-flex px-3 pt-2">
                <div className="">
                  <img
                    src={men}
                    width="30px"
                    alt="user"
                    className="rounded-circle"
                  />
                </div>

                <div className="m_input ml-2">
                  <input placeholder="Whats your Mind" className="inpt" />
                </div>
              </div>

              <div className="d-flex  justify-content-between px-4 bo mt-4 pt-2 pb-2">
              <Link to="/community/live">
                <div className="d-flex">
                  <BsCameraVideo className="comm_aa" />
                  <p className="comm_ab ml-1"> Live</p>
                </div>
                </Link>
                |
                <Link to="/community/photos">
                <div className="d-flex">
                  <BsFillImageFill className="comm_aa" />
                  <p className="comm_ab ml-1"> Photos</p>
                </div>
                </Link>
                |
                <Link to="/community/event">
                <div className="d-flex">
                  <RiCalendarEventLine className="comm_aa" />
                  <p className="comm_ab ml-1"> Event</p>
                </div>
                </Link>
            

              </div>
            
            </div>
            <div className="scrll">
            
                <h1 className="text-center text-capitalize font-bold text-primary"> this is  Event page</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
