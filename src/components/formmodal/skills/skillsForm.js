import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import GrAddCircle from '@material-ui/icons/AddCircleOutline';
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";
import {useForm} from "react-hook-form";
import {useDispatch } from "react-redux"
import { UserActionTypes } from "redux/actions/UserActions/actionType";
import * as userActions from "redux/actions/UserActions"
import { serialize } from 'object-to-formdata';
import storage from "utils/storage"
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(0.5),
    color: '#999999',
  },
}));
export const SkillsForm = ({handelClose}) => {
  const classes = useStyles();

 
  const dispatch = useDispatch();
  const history= useHistory();
  const [input, setInput] = useState('');
  const [skills,setSkills] = useState([])
  const [input1, setInput1] = useState('');
  const [skills1,setSkills1] = useState([])
  const {register,handleSubmit,reset} = useForm();
  const handleClick = () => {};

  const handleDelete = () => {};
   const handelSkill= () => {
    setSkills([...skills,input])
    setInput('')        
  }
  const handelSkill1= () => {
    setSkills1([...skills,input])
    setInput1('')        
  }
  
 
  const update=()=>{
   
  let data ={skills : skills, profile_status: 1, _id:storage.get('humlog_user')}
  const formData = serialize(data);
     
  dispatch(userActions.updateUserData({formData})).then(res=>{
   
   if(res.value.success){
     console.log(res.value.message)

   }
}).catch(err=> (console.log(err)))

 reset();
 handelClose();

 
}

  return (
    <>
    <div className="conatiner">
      {" "}
      <div className="row">
        {" "}Specific Skills
        <div className="col-12 ">
          {skills.map(skill=> {
            return(
              <Chip
              key={skill}
              label={skill}
              onDelete={handleDelete}
              className={classes.chip}
              variant="outlined"
            />

            )
          })}
          <div className="px-3 pt-3 pb-2 ">
          <input value={input} onInput={e => setInput(e.target.value)}/>
           <GrAddCircle classNmae="ml-1" onClick={handelSkill} style={{color:"#0678C1",fontSize:"30px",marginLeft:"15px"}}/>
          </div>{" "}
        </div>{" "}
      </div>
      
      <button  onClick={update} className="common_btn"> Save </button>

    </div>
  </>
);
};
