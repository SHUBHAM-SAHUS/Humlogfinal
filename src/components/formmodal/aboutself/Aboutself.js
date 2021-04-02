import React,{useState,useEffect} from "react";
import { Form, Button } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";
import {useForm} from "react-hook-form";
import {useDispatch ,useSelector } from "react-redux"
import { UserActionTypes } from "redux/actions/UserActions/actionType";
import * as userActions from "redux/actions/UserActions"
import { serialize } from 'object-to-formdata';
import storage from "utils/storage"
import {useHistory} from "react-router-dom";
import "./aboutself.scss";

import * as authActions from "redux/actions/AuthActions";

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(0.5),
    color: '#999999',
  },
}));
export const Aboutself = ({handelClose}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.userReducer);
  

  const [aboutInput,setAboutInput] = useState(userDetails.about_me)
  const data = [
    { key: 0, label: 'quick learner'},
    { key: 1, label: 'hard working' },
    { key: 2, label: 'focused' },
    { key: 3, label: 'honest' },
    { key: 4, label: 'team worker'},
    { key: 5, label: 'disciplined'},
  ].filter(({ key: id1 }) => !userDetails.about_me.some(({ key: id2 }) => id2 === id1));
  const [chipData, setChipData] = useState( data);

  const {register,handleSubmit,reset} = useForm();
  const [loaded, setLoaded] = useState(false);
  const history= useHistory();
  let userId = storage.get("humlog_user");
  useEffect(async() => {

    let data = [
      { key: 0, label: 'quick learner'},
      { key: 1, label: 'hard working' },
      { key: 2, label: 'focused' },
      { key: 3, label: 'honest' },
      { key: 4, label: 'team worker'},
      { key: 5, label: 'disciplined'},
    ] 
    let newChipData= await chipData.filter(val => !aboutInput.includes(val));
    setChipData(newChipData);

    
  }, [aboutInput])

  
 
  const handleClick = (e,data) => {
    setAboutInput([...aboutInput,data])
  };

  const handleDelete = (chipToDelete) => () => {
    setAboutInput((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    setChipData([...chipData,chipToDelete]);
  };  
 const update=()=>{
  let data ={about_me: JSON.stringify(aboutInput), _id:storage.get('humlog_user')}
  const formData = serialize(data);
     
  dispatch(userActions.updateUserData({formData})).then(res=>{
   
   if(res.value.success){
     console.log(res.value.message)
   

   }
}).catch(err=> (console.log(err)))
 
 handelClose();
}

  return (
    <>
      <div className="conatiner">
        {" "}
        <div className="row">
          {" "}
          <div className="col-12 ">
            <div className="  ">
            
                <h3 className="about_oa"> I am </h3>
                {aboutInput.length > 0 ? aboutInput.map((data) => {return (
            <Chip
              key={data.key}
              label={data.label}
              onDelete={handleDelete(data)}
              className={classes.chip}
              variant="outlined"
            />
        );
      }) : <div/>}

                <div>
                  <div className="">
                  {chipData.map((data) => {return (
            <Chip
              key={data.key}
              label={data.label}
              onClick = {(e)=>handleClick(e,data)}
              className={classes.chip}
              variant="outlined"
            />
        );
      })}



               
                  </div>

                  <div className="mt-4 ">
                   
                      <button className="common_btn mt-4" onClick={update}> Save </button>
                    
                  </div>
                </div>
              
            </div>{" "}
          </div>{" "}
        </div>
      </div>
    </>
  );
};
