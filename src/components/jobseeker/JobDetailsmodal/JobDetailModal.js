
import React from "react";
// import { serialize } from "object-to-formdata";

import "../jobmatch/jobmatch.scss";

// import { MdAttachMoney } from "react-icons/md";
import { VscBriefcase } from "react-icons/vsc";
// import { IoIosCloseCircle } from "react-icons/io";
// import { HiOutlineStar } from "react-icons/hi";
// import { BsCheck } from "react-icons/bs";
// import * as JobActions from "redux/actions/JobActions";
// import * as UserActions from "redux/actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
import genderi from "../../../assets/images/genderi.png";
import pencili from "../../../assets/images/pencili.png";
import sallaryi from "../../../assets/images/salary.png";
import storage from "utils/storage";
import { BiRupee } from "react-icons/bi";
import dummylogo from "../../../assets/images/dummylogo.png"

export const JobDetailModal = (props) => {
 const {company_logo,company_name,description,gender,job_location,job_title,openings,salary_from,salary_to,shift,skills,job_experience} = props.modalData;   

    console.log(props);


  return (
    <>
      
        <div className="main_job ">
          <div className="row p-0 m-0 no-gutters">
            <div className="col-4">
              {" "}
            
            </div>
            <div className="col-4">
              {" "}
              <div className=" ">
                <div className=" pt-2 ">
                  <div className="d-flex justify-content-center">
                    {company_logo && company_logo.length > 0 ? (
                      <img
                        src={company_logo}
                        alt="companylogo"
                        width="100px"
                        height="100px"
                        className="rounded-circle"
                      />
                    ) : (
                      <img
                        src={dummylogo}
                        alt="companylogo"
                        width="100px"
                        height="100px"
                        className="rounded-circle imgclr"
                      />
                    )}
                  </div>
                  <div className="d-flex justify-content-center">
                    <div>
                      <h4 className="Job_ta   mt-1 text-capitalize text-center">
                        {job_title}{" "}
                      </h4>
                      <h4 className="Job_ttb  mt-2 text-capitalize  text-center">
                        {company_name}|{job_location}{" "}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4"></div>
          </div>

          <div className="container">
            <div className="row p-0 m-0 no-gutters">
              <div className="col-7 ">
                {" "}
                <div className="d-flex mt-2">
                  <img
                    src={sallaryi}
                    className="_job_ua"
                    width="16px"
                    height="16px"
                  />
                  <p className="_job_ub ml-1"> Salary</p>
                </div>
                <h6 className="ca">
                  {" "}
                  ₹ {salary_from}  - ₹ {salary_to} 
                </h6>
                <div className="d-flex mt-2">
                  <VscBriefcase className="_job_ua" />
                  <p className="_job_ub ml-1"> Experience Required</p>
                </div>
                <h6 className="ch">
                  {" "}
                  {job_experience == 0
                    ? "Fresher"
                    : job_experience == 1
                    ? "Less than 1 year"
                    : job_experience == 2
                    ? "1-2 years"
                    : job_experience == 3
                    ? "2-4 years"
                    : job_experience == 4
                    ? "4-6 years"
                    : job_experience == 5
                    ? "6-8 years"
                    : job_experience == 6
                    ? "8-10 years"
                    : job_experience == 7
                    ? "10+ years"
                    : ""}
                </h6>
                <div className="d-flex mt-2">
                  <img src={genderi} className="_job_ua" />
                  <p className="_job_ub ml-1"> Gender</p>
                </div>
                <h6 className="ch">
                  {" "}
                  {gender === 0
                    ? "All"
                    : gender == 1
                    ? "Female"
                    : gender == 2
                    ? "Male"
                    : gender === 3
                    ? "Others"
                    : ""}
                </h6>
              </div>

              <div className="col-5 ">
                {" "}
                <div className="d-flex mt-2 ">
                  <VscBriefcase className="_job_ua" />
                  <p className="_job_ub ml-1"> Job Shift/Type</p>
                </div>
                <h6 className="ch">
                  {" "}
                  {shift === 0
                    ? "Field"
                    : shift == 1
                    ? "Office"
                    : shift == 2
                    ? "Morning Shift"
                    : shift === 3
                    ? "Night Shift"
                    : shift === 4
                    ? "work From Home"
                    : ""}
                </h6>
                <div className="d-flex mt-2 ">
                  <img src={pencili} className="_job_ua" />
                  <p className="_job_ub ml-1"> Skill required</p>
                </div>
                <h6 className="ch skiils_width">{skills} </h6>{" "}
              </div>
            </div>
          </div>
         
        </div>
    
        
      
    </>
  );
};
