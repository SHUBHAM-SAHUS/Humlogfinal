import React,{useState} from "react";
import men from "../../../assets/images/men.jpg";
import {Select,MenuItem} from  "@material-ui/core";
import "./notification.scss";
import { AiOutlineDelete, AiOutlineMinusCircle } from "react-icons/ai";
import { ImSwitch } from "react-icons/im";
import {useHistory} from "react-router-dom";
import {GrMore} from "react-icons/gr";
import Menu from '@material-ui/core/Menu';


import { AiOutlineSetting } from "react-icons/ai";

export const Notificationpage = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
                <h2 className="noti_user ml-3">
                  Your profile is 60% complete. Strengthen your profile to get
                  more job matches.{" "}
                </h2>

                

                <button className="btn_noti text-uppercase" onClick={handle} > Edit profile</button>
              </div>

              {/* start */}

              <div className="mb-2">
              <GrMore onClick={handleClick}/>
             
              

              <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
           
                   <MenuItem value={"delete"}>  <AiOutlineDelete  className="mr-2"/> Delete </MenuItem>
                    <hr className="p-0 m-0"/>
                   <MenuItem value={"unfollow"}><AiOutlineMinusCircle className="mr-2" /> Unfollow{" "} </MenuItem>
                   <hr className="p-0 m-0"/>
                   <MenuItem value={"tourn off"}><ImSwitch className="mr-2" /> TournOff{" "}</MenuItem>
                   <hr className="p-0 m-0"/>
                   <MenuItem value={"setting"}><AiOutlineSetting  className="mr-2"/> Setting{" "} </MenuItem>
                   
                   </Menu>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
