import React, {useEffect,useState} from "react";
import {useForm} from "react-hook-form";
import { serialize } from 'object-to-formdata';
import storage from "utils/storage"
import {useHistory} from "react-router-dom";
import "./indutry.scss"
import { BiFilterAlt } from "react-icons/bi";

import * as userActions from "redux/actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
import others from "../../../assets/images/other.svg"
import classNames from "classnames";


export const Industryinterested = ({handelClose}) => {
  const dispatch = useDispatch();
  const history= useHistory();
  const [input,setInput]= useState(false)
  const [otherInput,setOtherInput]=useState("")
  
  const { JobCategoryList } = useSelector((state) => state.jobCategoryReducer);
  const { userDetails } = useSelector((state) => state.userReducer);


  const {watch,register,handleSubmit,reset ,errors} =useForm({
    mode: "onChange",
  }); 
  const job_intrested = watch('job_intrested',[]);
  const checkedCount = job_intrested.filter(Boolean).length;

  const update=(val)=>{
    debugger
       console.log(val)
    let data ={...val, profile_status: 1, _id:storage.get('humlog_user')}
    const formData = serialize(data);
       
    dispatch(userActions.updateUserData({formData})).then(res=>{
      
     if(res.value.success){
       console.log(res.value.message)
      
 
     }
 }).catch(err=> (console.log(err)))
 
   console.log(val);
   handelClose();
  }
  useEffect(() => {
    loadProfile();
  }, []);
  const loadProfile = () => {
    reset(userDetails)
  
  };

  return (
    <>
    <div className=" fixed fixedHeight">
      <div className="d-flex justify-content-between pt-1 fixed positionFixed ">

            <p  className="in"> Job Interested In</p>
         
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
         <input
                type="checkbox"
                id='other'
                className="d-none w-75 border-primary"
             
                name="job_intrested"
                disabled={(!job_intrested.includes(otherInput)) && checkedCount >= 3 }
                value={otherInput}
                
                ref={register({
                  required: "Please  select atleast 1 field",
                 
                })}

              />
              <label for='other' className="d-inline">
                <div className="col-4 d-inline-flex justify-content-around ">
                  <div onClick={() => setInput(!input)}>
                    <div className="d-flex justify-content-center">
                    <img
                      src={others}
                      style={{ width: "80px" }}
                      className=" filter-green"
                    /> </div>
                    <h6 style={{ fontSize: "12px" }} className="text-center">
                      {" "}
                      other{" "}
                    </h6>
                  </div>
                </div>
              </label>
              {input && (
                    <div className="mt-1 px-3 pb-4">
                        <input
                          type="text"
                          onInput={(e) => setOtherInput(e.target.value)}
                          placeholder="Enter your job category"
                          value={otherInput}
                          name="others"
                          autocomplete="off"
                          className="other_input py-1 pl-2"
                          className={classNames("form-control", {
                            "is-invalid": errors.address_home
                          })}
                         ref={register({
                          required: "This field is required ",
                            maxLength:{
                              value:25,
                              message:"Maximum 30 digit can be entered"
    
                            }
                         
                          })}
                        />
                        {errors.others && <p className="text-danger  oom text-center">{errors.others.message}</p>}
                    </div>
                  )}
    
    
         
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
