import React from "react";
import {useForm} from "react-hook-form";
import { serialize } from 'object-to-formdata';
import storage from "utils/storage"
import {useHistory} from "react-router-dom";

import "./indutry.scss"

import { BiFilterAlt } from "react-icons/bi";

import { register } from "serviceWorkerRegistration";
import * as userActions from "redux/actions/UserActions";
import { useDispatch, useSelector } from "react-redux";


export const Industryinterested = ({handelClose}) => {
  const dispatch = useDispatch();
  const history= useHistory();
  
  const { JobCategoryList } = useSelector((state) => state.jobCategoryReducer);
  const { userDetailsById } = useSelector((state) => state.userReducer);

  const {watch,register,handleSubmit,reset ,errors} = useForm ();   
  const job_intrested = watch('job_intrested', []);
  const checkedCount = job_intrested.filter(Boolean).length;

  const update=(val)=>{
       console.log(val)
    let data ={...val, profile_status: 1, contact:userDetailsById.contact, _id:userDetailsById._id}
    const formData = serialize(data);
       
    dispatch(userActions.upsertUserData({formData})).then(res=>{
      
     if(res.value.success){
       console.log(res.value.message)
      //  history.push("/user/basicdetail/jobinterested")
 
     }
 }).catch(err=> (console.log(err)))
 
   console.log(val);
   reset();
   handelClose();
  }

  return (
    <>
    <div className=" fixed fixedHeight">
      <div className="d-flex justify-content-between pt-1 fixed positionFixed ">

            <p  className="in"> Industry Interested in</p>
         
      </div>
 
 <div className="d-flex justify-content-end pt-1">

 </div>
 <div className="afterPositio">
 <hr className="hrr"  className="p-0 m-0"/>
 <p className="in_a text-left mb-1">Select maximum 3 </p>
 </div>
        <form onSubmit={handleSubmit(update)} className="fixed">
          <div className="job_cat">
        {JobCategoryList.map((val,index) => {
          return (
            <>
              <input
                type="checkbox"
                id={val._id}
                className="d-none"
             
                name="job_intrested"
                disabled={(!job_intrested.includes(val.name)) && checkedCount >= 3 }
                value={val.name}
                
                ref={register({
                  required: "Please  select atleast 1 field",
                 
                })}

              />
              <label for={val._id} className="d-inline">
                <div className="col-4 d-inline-flex justify-content-around ">
                  <div>
                    <div className="d-flex justify-content-center">
                    <img
                      src={val.image}
                      style={{ width: "80px" }}
                      className=" filter-green"
                    /> </div>
                    <h6 style={{ fontSize: "12px" }} className="text-center">
                      {" "}
                      {val.name}{" "}
                    </h6>
                  </div>
                </div>
              </label>
            </>
          );
        })}
        </div>
        
        {errors.job_intrested && <p className="text-danger  oom text-center">{errors.job_intrested.message}</p>}
<div className="mt-3 pstt fixed">
      <button className="common_btn" type="submit">
        {" "}
        Submit{" "}
      </button>
    </div>
    </form>
      </div>
    </>
  );
};
