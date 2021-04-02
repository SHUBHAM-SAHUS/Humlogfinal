import React, { useState, useEffect } from "react";
import { serialize } from "object-to-formdata";

import "./jobmatch.scss";


import { MdAttachMoney } from "react-icons/md";
import { VscBriefcase } from "react-icons/vsc";
import { IoIosCloseCircle } from "react-icons/io";
import { HiOutlineStar } from "react-icons/hi";
import { BsCheck } from "react-icons/bs";
import * as JobActions from "redux/actions/JobActions";
import * as UserActions from "redux/actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
import genderi from "../../../assets/images/genderi.png";
import pencili from "../../../assets/images/pencili.png";
import sallaryi from "../../../assets/images/salary.png";
import storage from "utils/storage";
import { BiRupee } from "react-icons/bi";
import dummylogo from "../../../assets/images/dummylogo.png"
import { FaAmazon } from "react-icons/fa";

export const Jobmatch = () => {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const [jobIndex, setJobIndex] = useState(0);
  const { jobList } = useSelector((state) => state.jobReducer);
  const { userDetails } = useSelector((state) => state.userReducer);

  const nextJob = () => {
    jobList.length !== jobIndex ? setJobIndex(jobIndex + 1) : setJobIndex(0);
  };
  let val = jobList[jobIndex];

  const changeJobStatus = (job, status) => {
   
    let data = {
      _id: userDetails._id,
      jobs: JSON.stringify({
        company_logo: job.company_logo,
        company_name: job.company_name,
        job_id: job._id,
        job_title: job.job_title,
        salary_from: job.salary_from,
        salary_to: job.salary_to,
        job_location: job.job_location,
        category: job.category,
        jobStatus: job.status,
        openings: job.openings,
        skills: job.skills,
        job_experience:job.experience,
        shift: job.shift,
        description: job.description,
        animated_description: job.animated_description,
        status: status,
      }),
    };

    let formData = serialize(data);

    dispatch(UserActions.updateUserData({ formData }))
      .then((res) => {
        if (res.value.success) {
          console.log(res.value.message);
          nextJob();
       
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (!loaded) {
      setLoaded(true);
      dispatch(JobActions.getJobListData(storage.get("humlog_user")));
      console.log("testting");
    }
  }, [loaded, dispatch]);

  return (
    <>
      {jobList && jobList.length > 0 && jobList.length != jobIndex ? (
        <div className="main_job st">
          <div className="row p-0 m-0 no-gutters">
            <div className="col-4">
              {" "}
              <h6 className="ml-2">Job Matches </h6>
            </div>
            <div className="col-4">
              {" "}
              <div className=" mt-3">
                <div className=" pt-2 ">
                  <div className="d-flex justify-content-center">
                    {val.company_logo && val.company_logo.length > 0 ? (
                      <img
                        src={val.company_logo}
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
                        {val.job_title}{" "}
                      </h4>
                      <h4 className="Job_ttb  mt-2 text-capitalize  text-center">
                        {val.company_name}|{val.job_location}{" "}
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
                  ₹{val.salary_from} - ₹ {val.salary_to} /month
                </h6>
                <div className="d-flex mt-2">
                  <VscBriefcase className="_job_ua" />
                  <p className="_job_ub ml-1"> Experience Required</p>
                </div>
                <h6 className="ch">
                  {" "}
                  {val.experience === 0
                    ? "Fresher"
                    : val.experience == 1
                    ? "Less than 1 year"
                    : val.experience == 2
                    ? "1-2 years"
                    : val.experience === 3
                    ? "2-4 years"
                    : val.experience === 4
                    ? "4-6 years"
                    : val.experience === 5
                    ? "6-8 years"
                    : val.experience === 6
                    ? "8-10 years"
                    : val.experience === 7
                    ? "10+ years"
                    : ""}
                </h6>
                <div className="d-flex mt-2">
                  <img src={genderi} className="_job_ua" />
                  <p className="_job_ub ml-1"> Gender</p>
                </div>
                <h6 className="ch">
                  {" "}
                  {val.gender === 0
                    ? "All"
                    : val.gender == 1
                    ? "Female"
                    : val.gender == 2
                    ? "Male"
                    : val.gender === 3
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
                  {val.shift === 0
                    ? "Field"
                    : val.shift == 1
                    ? "Office"
                    : val.shift == 2
                    ? "Morning Shift"
                    : val.shift === 3
                    ? "Night Shift"
                    : val.shift === 4
                    ? "work From Home"
                    : ""}
                </h6>
                <div className="d-flex mt-2 ">
                  <img src={pencili} className="_job_ua" />
                  <p className="_job_ub ml-1"> Skill required</p>
                </div>
                <h6 className="ch skiils_width">{val.skills} </h6>{" "}
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row p-0 m-0 no-gutters">
              <div className="col-12  mt-3  d-flex justify-content-around">
                <button
                  className="btn_va  shadow"
                  onClick={() => changeJobStatus(val, "Visited")}
                >
                  <IoIosCloseCircle className="cross_icon" /> Not Apply
                </button>
                <button
                  className="btn_vb d-flex shadow"
                  onClick={() => changeJobStatus(val, "Saved")}
                >
                  <HiOutlineStar className="box_ia job_pa" />
                  <div className="jobResponse">
                  Apply Later
                  </div>
                </button>
                <button
                  className="btn_vc d-flex shadow"
                  onClick={() => changeJobStatus(val, "Applied")}
                >
                    <BsCheck className="box_ib job_pb " />
                 <div className="jobResponse">
                 Apply Now
                   </div> 
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        jobList && (
          <div className="st ">
            <div className=" text-center pt-5 text-primary ">
            You visited all posted jobs
            <h3>Thank you</h3>{" "}
            </div>
          </div>
        )
      )}
    </>
  );
};
