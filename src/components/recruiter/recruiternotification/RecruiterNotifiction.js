import React,{useState} from "react";
import men from "../../../assets/images/men.jpg";
import {Select,MenuItem} from  "@material-ui/core";
import "./recruiternotifiction.scss";
import { AiOutlineDelete, AiOutlineMinusCircle } from "react-icons/ai";
import { ImSwitch } from "react-icons/im";
import {useHistory} from "react-router-dom";


import { AiOutlineSetting } from "react-icons/ai";

export const  RecruiterNotification = () => {

const [choice,setchoice] = useState("")
const history =useHistory();
 const handle=()=>{
  
    history.push('/profile')

 }

  const update=(e)=>{
    console.log(e.target.value);
  }

  return (
    <>
      <div className="main_notification border st">
        <div className="container">
          <div className="row">
            <div className="col-12  d-flex pt-3 pb-3 ">
              <div className="">
                <img
                  src={men}
                  width="30px"
                  height="30px"
                  alt="men"
                  className="rounded-circle"
                />
              </div>

              <div>
                <h2 className="noti_user">
                  Your profile is 60% complete. Strengthen your profile to get
                  more job matches{" "}
                </h2>

                <button className="btn_noti" onClick={handle} > Edit profile</button>
              </div>

              {/* start */}

              <div className="mb-2">
             
              

                <Select value={choice} displayEmpty
                onChange={update}
                >
                   <MenuItem value={choice}  > </MenuItem>
                   <MenuItem value={"delete"}>  <AiOutlineDelete /> Delete </MenuItem>
                   <MenuItem value={"unfollow"}><AiOutlineMinusCircle /> Unfollow{" "} </MenuItem>
                   <MenuItem value={"tourn off"}><ImSwitch /> TournOff{" "}</MenuItem>
                   <MenuItem value={"setting"}><AiOutlineSetting /> Setting{" "} </MenuItem>
                  </Select>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
