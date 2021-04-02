import React from "react";
import "./userpost.scss";
// import men from "../images/men.jpg";
// import post from "../images/post.png";
import { IoMdThumbsUp } from "react-icons/io";
import { FaThumbsUp } from "react-icons/fa";
import { BiMessage } from "react-icons/bi";
import { IoMdShareAlt } from "react-icons/io";
export const Userpost = () => {
  return (
    <>
      <div className="pt-3">
        <div className="d-flex px-3">
          <div>
            <img
              src={require("../../../assets/images/men.jpg")}
              width="60px"
              height="60px"
              className="rounded-circle"
            />
          </div>
          <div className="ml-3">
            <h4 className="post_ra"> Ajay sharma </h4>
            <h6 className="post_rb mt-1">
              {" "}
              Job designation or someother text can come here
            </h6>
            <h6 className="post_rc">6h </h6>
          </div>
        </div>
        <div>
          <img
            src={require("../../../assets/images/post.png")}
            width="100%"
            alt="post"
          />
        </div>

        <div className="px-2 d-flex justify-content-between">
          <div className="d-flex ">
            {" "}
            <div className="user_yaa d-flex justify-content-center align-items-center mt-1">
              {" "}
              <IoMdThumbsUp className="user_ya" />{" "}
            </div>{" "}
            <p className="user_yb ml-1">you and 24 others</p>{" "}
          </div>
          <div>
            {" "}
            <p className="user_ybb">Comment</p>{" "}
          </div>
        </div>

        <hr />

        <div className="d-flex justify-content-between px-4">
          <div className="d-flex">
            <FaThumbsUp className="user_icon_ra" />
            <p className="user_na ml-1">Like</p>
          </div>
          <div className="d-flex">
            <BiMessage className="user_icon_rb" />
            <p className="user_nb ml-1">Comment </p>
          </div>
          <div className="d-flex">
            <IoMdShareAlt className="user_icon_rc" />
            <p className="user_nc ml-1"> Share</p>
          </div>
        </div>

        <div className="d-flex px-3 pt-4">
          <div className="">
            <img
              src={require("../../../assets/images/men.jpg")}
              width="30px"
              alt="user"
              className="rounded-circle"
            />
          </div>

          <div className="m_input ml-2 ">
            <input placeholder="Leave your thoughts here" className="inpt pl" />
          </div>
        </div>
      </div>
    </>
  );
};
