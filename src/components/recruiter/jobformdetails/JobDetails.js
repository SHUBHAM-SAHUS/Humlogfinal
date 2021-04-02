import React, { useState, useEffect } from "react";

import "./jobdetail.scss";
import industry from "../../../assets/images/industry.png";
import { Form, Col } from "react-bootstrap";
import { AiOutlineHome } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { MdPhoneInTalk } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import * as JobAction from "redux/actions/JobActions";
import storage from "utils/storage";
import { serialize } from "object-to-formdata";
import { useHistory } from "react-router-dom";
import { getAllJobs } from "api";
import classNames from "classnames";
import { AiOutlineDelete, AiOutlineMinusCircle } from "react-icons/ai";
import { ImSwitch } from "react-icons/im";
import { AiOutlineUser } from "react-icons/ai";
import * as userActions from "redux/actions/UserActions";
import { GrMore } from "react-icons/gr";
import Menu from "@material-ui/core/Menu";
import TextField from "@material-ui/core/TextField";
import { DistrictList } from "components/jobseeker/DistrictList";

import Autocomplete from "@material-ui/lab/Autocomplete";

export const JobDetails = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const { JobCategoryList } = useSelector((state) => state.jobCategoryReducer);
  const [count, setCount]= useState(200);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

   
  const [loaded, setLoaded] = useState(false);
  const [category, setcategory] = useState("");
  const { watch, register, handleSubmit, reset, errors } = useForm({
    mode: "onBlur",
  });
  const watchSalary_from = watch("salary_from");
  const isGreater = (salary_to: string) =>
    parseInt(salary_to) > parseInt(watchSalary_from);

  const [planets, setPlanets] = useState({});

  const { userDetails } = useSelector((state) => state.userReducer);

  const update = (val) => {
    let data = {
      ...val,
      created_by: userDetails._id,
      company_logo: userDetails.profile_pic,
      company_name: userDetails.company_name,
    };
    console.log(data);
    const formData = serialize(data);

    dispatch(JobAction.createJobData({ formData }))
      .then((res) => {
        if (res.value.success) {
          console.log(res.value.message);
          history.push("/dashboard");
        }
      })
      .catch((err) => console.log(err));

    console.log(val);
    reset();
  };
  const DistrictListt = DistrictList.sort()
  return (
    <>
      <div className="px-3 st">
        <div className="row no-gutters">
          <div className="col-12 ">
            <div className="">
              <div className="d-flex justify-content-center text-center">
                <div>
                  <div className="">
                    <h5 className="text-left cc"> Job details</h5>
                    <Form onSubmit={handleSubmit(update)}>
                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label className="d-flex justify-content-start llbl">
                          Job category{" "}
                          <font className="text-danger ml-1">*</font>{" "}
                        </Form.Label>
                        <Form.Control
                          as="select"
                          ref={register}
                          autocomplete="off"
                          name="category"
                          value={category}
                          onChange={(e) => setcategory(e.target.value)}
                          ref={register({
                            required: " Please enter  job  details",
                          })}
                        >
                          {JobCategoryList.map((val) => {
                            return (
                              <>
                                <option value={val._id}> {val.name}</option>
                              </>
                            );
                          })}
                        </Form.Control>
                        {errors.category && (
                          <p className="text-danger  oom p-0 m-0">
                            {errors.category.message}
                          </p>
                        )}
                      </Form.Group>

                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label className="d-flex justify-content-start llbl">
                          Job Title <font className="text-danger ml-1">*</font>{" "}
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Add your job title"
                          name="job_title"
                          autocomplete="off"
                          className={classNames("form-control", {
                            "is-invalid": errors.job_title,
                          })}
                          ref={register({
                            required: " Please enter job title",
                            maxLength: {
                              value: 30,
                              message: "Maximum 30 character can be entered",
                            },
                          })}
                        />
                        {errors.job_title && (
                          <p className="text-danger  oom p-0 m-0">
                            {errors.job_title.message}
                          </p>
                        )}
                      </Form.Group>

                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label className="d-flex justify-content-start llbl">
                          monthly salary
                          <b>
                            {" "}
                            <font className="text-danger ml-1">*</font>{" "}
                          </b>
                        </Form.Label>
                        <Form.Row>
                          <Col>
                            <Form.Control
                              placeholder="Eg. ₹ 10000 "
                              ref={register}
                              name="salary_from"
                              autocomplete="off"
                              className={classNames("form-control", {
                                "is-invalid": errors.salary_from,
                              })}
                              ref={register({
                                required: "This field is required",
                                pattern: {
                                  value: /^[0-9\b]+$/,
                                  message: "Enter  only numbers",
                                },

                                maxLength: {
                                  value: 5,
                                  message: "Maimum 5 digit allowed",
                                },
                              })}
                            />
                            {errors.salary_from && (
                              <p className="text-danger  oom p-0 m-0">
                                {errors.salary_from.message}
                              </p>
                            )}
                          </Col>
                          to
                          <Col>
                            <Form.Control
                              placeholder="Eg. ₹ 20000 "
                              ref={register}
                              name="salary_to"
                              autocomplete="off"
                              className={classNames("form-control", {
                                "is-invalid": errors.salary_to,
                              })}
                              ref={register({
                                required: "This field is required",
                                pattern: {
                                  value: /^[0-9\b]+$/,
                                  message: "Enter  only numbers",
                                },

                                maxLength: {
                                  value: 5,
                                  message: "Maimum 5 digit allowed",
                                },
                                validate: isGreater,
                              })}
                            />
                            {errors.salary_to &&
                              errors.salary_to.type == "validate" && (
                                <p className="text-danger  oom p-0 m-0">
                                  Salary should be more than minimum salary
                                </p>
                              )}

                            {errors.salary_to && (
                              <p className="text-danger  oom p-0 m-0">
                                {errors.salary_to.message}
                              </p>
                            )}
                          </Col>
                        </Form.Row>
                      </Form.Group>

                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label className="d-flex justify-content-start llbl">
                          Job Location{" "}
                          <font className="text-danger ml-1">*</font>{" "}
                        </Form.Label>
                  
                        <Autocomplete
                          id="combo-box-demo"
                          name="job_location"
                          ref={register}
                          options={DistrictList}
                          defaultValue={userDetails.job_location?.length > 0 ? userDetails.job_location: null}
                          getOptionLabel={(option) => option}
                          style={{ width: "100%" }}
                          className="mt-2 p-0 m-0"
                        
                          renderInput={(params) => (
                            <TextField
                              name="job_location"
                             
                              inputRef={register({
                                required:"Please enter district",
                              })}
                              {...params}
                              variant="outlined"
                            />
                          )}
                        />
                            {errors.job_location && (
                          <p className="text-danger  oom p-0 m-0">
                            {errors.job_location.message}
                          </p>
                        )}
                      </Form.Group>
                 

                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="d-flex justify-content-start llbl">
                          Add your description{" "}
                          <font className="text-danger ml-1">*</font>{" "}
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          name="description"
                          autocomplete="off"
                          placeholder='Description should be of maximum 200 charcters  ' 
                          onChange={(e)=>setCount(200-(e.target.value.length))}
                          className={classNames("form-control", {
                            "is-invalid": errors.description,
                            
                          })}
                          ref={register({
                            required: " Please enter  job  description",

                            maxLength: {
                              value: 200,
                              message: "Desscription should be less than 200 characters",
                            },
                          })}
                        />
                        <div className="text-right">
                        <p className="p-0 m-0"> {!errors.description && `${count}`} </p>
                        </div>
                        
                        {errors.description && (
                          <p className="text-danger  oom p-0 m-0">
                            {errors.description.message}
                          </p>
                        )}
                      </Form.Group>

                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label className="d-flex justify-content-start llbl">
                          skill required{" "}
                          <font className="text-danger ml-1">*</font>{" "}
                        </Form.Label>
                        <Form.Control
                          type="text"
                          autocomplete="off"
                          placeholder="Add your skills here"
                          name="skills"
                          ref={register}
                          className={classNames("form-control", {
                            "is-invalid": errors.skills,
                          })}
                          ref={register({
                            required: " Please enter  skills",
                          })}
                        />
                        {errors.skills && (
                          <p className="text-danger  oom p-0 m-0">
                            {errors.skills.message}
                          </p>
                        )}
                      </Form.Group>

                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label className="d-flex justify-content-start llbl">
                          Number of openings
                          <font className="text-danger ml-1">*</font>{" "}
                        </Form.Label>
                        <Form.Control
                          type="text"
                          autocomplete="off"
                          autocomplete="off"
                          placeholder=" Require candidate"
                          name="openings"
                          className={classNames("form-control", {
                            "is-invalid": errors.openings,
                          })}
                          ref={register({
                            required: "This field is required",
                            pattern: {
                              value: /^[0-9\b]+$/,
                              message: "Enter  only numbers",
                            },

                            maxLength: {
                              value: 3,
                              message: "Maximum 3 digit can be entered",
                            },
                          })}
                        />
                        {errors.openings && (
                          <p className="text-danger  oom p-0 m-0">
                            {errors.openings.message}
                          </p>
                        )}
                      </Form.Group>

                      <div className="form-group mt-2">
                        <Form.Label className="d-flex justify-content-start llbl">
                          Job Shift/Type{" "}
                          <font className="text-danger ml-1">*</font>{" "}
                        </Form.Label>

                        <div className="d-flex justify-content-between">
                          <div className="form-check detail_btn_cca text-center mr-2">
                            <input
                              className="form-check-input d-none"
                              type="radio"
                              name="shift"
                              id="Field"
                              value="0"
                              ref={register({
                                required: "Please  select shift",
                              })}
                            />
                            <label
                              className="form-check-label  lw  text-capitalize"
                              for="Field"
                            >
                              Field
                            </label>
                          </div>

                          <div className="form-check detail_btn_cca text-center mr-2">
                            <input
                              className="form-check-input d-none"
                              type="radio"
                              name="shift"
                              id="Office"
                              value="1"
                              ref={register({
                                required: "Please  select shift",
                              })}
                            />
                            <label
                              className="form-check-label  lw  text-capitalize"
                              for="Office"
                            >
                              Office
                            </label>
                          </div>

                          <div className="form-check detail_btn_cca text-center mr-2">
                            <input
                              className="form-check-input d-none"
                              type="radio"
                              name="shift"
                              id="morning shift"
                              value="2"
                              ref={register({
                                required: "Please  select shift",
                              })}
                            />
                            <label
                              className="form-check-label lw  text-capitalize"
                              for="morning shift"
                            >
                              morning shift
                            </label>
                          </div>
                        </div>

                        <div className=" d-flex justify-content-between mt-2">
                          <div className="form-check detail_btn_cca text-center ">
                            <input
                              className="form-check-input d-none"
                              type="radio"
                              name="shift"
                              id="Night shift"
                              value="3"
                              ref={register({
                                required: "Please  select shift",
                              })}
                            />
                            <label
                              className="form-check-label lw  text-capitalize"
                              for="Night shift"
                            >
                              Night shift
                            </label>
                          </div>

                          <div className="form-check detail_btn_cca text-center ">
                            <input
                              className="form-check-input d-none fw"
                              type="radio"
                              name="shift"
                              id="WorkFromHome"
                              value="4"
                              ref={register({
                                required: "Please  select shift",
                              })}
                            />
                            <label
                              className="form-check-label lw py-1 text-capitalize "
                              for="WorkFromHome"
                            >
                              Work From Home
                            </label>
                          </div>

                          <div className="form-check detail_btn_cca text-center hidd border-white"></div>
                        </div>
                        {errors.shift && (
                          <p className="text-danger  oom p-0 m-0">
                            {errors.shift.message}
                          </p>
                        )}
                      </div>

                   

                      <Form.Label className="d-flex justify-content-start llbl">
                        Experience Required
                        <font className="text-danger ml-1">*</font>{" "}
                      </Form.Label>
                      <div className="d-flex justify-content-between ">
                        <div className="form-check detail_btn_cca text-center">
                          <input
                            className="form-check-input d-none"
                            type="radio"
                            name="experience"
                            id="Fresher"
                            value="0"
                            ref={register({
                              required: "Please  select experience",
                            })}
                          />
                          <label
                            className="form-check-label lw py-1"
                            for="Fresher"
                          >
                            Fresher
                          </label>
                        </div>

                        <div className="form-check detail_btn_cca text-center">
                          <input
                            className="form-check-input d-none"
                            type="radio"
                            name="experience"
                            id="Less than 1"
                            value="1"
                            ref={register({
                              required: "Please  select experience",
                            })}
                          />
                          <label
                            className="form-check-label lw py-1"
                            for="Less than 1"
                          >
                            Less than 1
                          </label>
                        </div>

                        <div className="form-check detail_btn_cca text-center">
                          <input
                            className="form-check-input d-none"
                            type="radio"
                            name="experience"
                            id="1-2"
                            value="2"
                            ref={register({
                              required: "Please  select experience",
                            })}
                          />
                          <label className="form-check-label lw py-1" for="1-2">
                            1-2
                          </label>
                        </div>

                        <div className="form-check  detail_btn_cca text-center">
                          <input
                            className="form-check-input d-none"
                            type="radio"
                            name="experience"
                            id="2-4"
                            value="3"
                            ref={register({
                              required: "Please  select experience",
                            })}
                          />
                          <label className="form-check-label lw py-1" for="2-4">
                            2-4
                          </label>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between mt-2">
                        <div className="form-check detail_btn_cca text-center">
                          <input
                            className="form-check-input d-none"
                            type="radio"
                            name="experience"
                            id="4-6"
                            value="4"
                            ref={register({
                              required: "Please  select experience",
                            })}
                          />
                          <label className="form-check-label lw py-1" for="4-6">
                            4-6
                          </label>
                        </div>

                        <div className="form-check detail_btn_cca text-center">
                          <input
                            className="form-check-input d-none"
                            type="radio"
                            name="experience"
                            id="6-8"
                            value="5"
                            ref={register({
                              required: "Please  select experience",
                            })}
                          />
                          <label className="form-check-label lw py-1" for="6-8">
                            6-8
                          </label>
                        </div>

                        <div className="form-check detail_btn_cca text-center">
                          <input
                            className="form-check-input d-none"
                            type="radio"
                            name="experience"
                            id="8-10"
                            value="6"
                            ref={register({
                              required: "Please  select experience",
                            })}
                          />
                          <label
                            className="form-check-label lw py-1"
                            for="8-10"
                          >
                            8-10
                          </label>
                        </div>

                        <div className="form-check  detail_btn_cca text-center">
                          <input
                            className="form-check-input d-none"
                            type="radio"
                            name="experience"
                            id="10+"
                            value="7"
                            ref={register({
                              required: "Please  select experience",
                            })}
                          />
                          <label className="form-check-label lw py-1" for="10+">
                            10+
                          </label>
                        </div>
                      </div>
                      {errors.experience && (
                        <p className="text-danger  oom p-0 m-0">
                          {errors.experience.message}
                        </p>
                      )}

               

                      <div className="form-group mt-2">
                        <Form.Label className="d-flex justify-content-start llbl">
                          Gender <font className="text-danger ml-1">*</font>{" "}
                        </Form.Label>

                        <div className="d-flex justify-content-between">
                          <div className="form-check detail_btn_cca text-center mr-2">
                            <input
                              className="form-check-input d-none"
                              type="radio"
                              name="gender"
                              id="All"
                              value="0"
                              ref={register({
                                required: "Please  select gender",
                              })}
                            />
                            <label
                              className="form-check-label lw py-1 text-capitalize"
                              for="All"
                            >
                              All
                            </label>
                          </div>

                          <div className="form-check  detail_btn_cca text-center mr-2">
                            <input
                              className="form-check-input d-none"
                              type="radio"
                              name="gender"
                              id="Male"
                              value="2"
                              ref={register({
                                required: "Please  select gender",
                              })}
                            />
                            <label
                              className="form-check-label  lw py-1 text-capitalize"
                              for="Male"
                            >
                              Male
                            </label>
                          </div>

                          <div className="form-check detail_btn_cca text-center mr-2">
                            <input
                              className="form-check-input d-none fw"
                              type="radio"
                              name="gender"
                              id="Female"
                              value="1"
                              ref={register({
                                required: "Please  select gender",
                              })}
                            />
                            <label
                              className="form-check-label lw py-1 text-capitalize"
                              for="Female"
                            >
                              Female
                            </label>
                          </div>

                          <div className="form-check detail_btn_cca text-center mr-2">
                            <input
                              className="form-check-input d-none fw"
                              type="radio"
                              name="gender"
                              id="Other"
                              value="3"
                              ref={register({
                                required: "Please  select gender",
                              })}
                            />
                            <label
                              className="form-check-label lw py-1 text-capitalize"
                              for="Other"
                            >
                              Other
                            </label>
                          </div>
                        </div>
                        {errors.gender && (
                          <p className="text-danger  oom p-0 m-0">
                            {errors.gender.message}
                          </p>
                        )}
                      </div>

                      <button className="common_btn mt-4" type="submit">
                        {" "}
                        Submit
                      </button>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
