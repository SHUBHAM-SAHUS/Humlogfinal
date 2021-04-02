import React,{useEffect} from "react";
import "./education.scss";
import { Form, Row, Col } from "react-bootstrap";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { AiOutlineUser } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { serialize } from "object-to-formdata";
import storage from "utils/storage";
import { useHistory } from "react-router-dom";
import * as userActions from "redux/actions/UserActions";
import { useDispatch ,useSelector} from "react-redux";
import { UserActionTypes } from "redux/actions/UserActions/actionType";
import classNames from "classnames";

export const Educatiofrm = ({ handelClose }) => {
  const { userDetails } = useSelector((state) => state.userReducer);

  useEffect(() => {
    loadProfile();
  }, []);
  const loadProfile = () => {
    let data = {
      qualification: userDetails.qualification.toString(),
      school_name: userDetails.educational_info[0]?.institution_name,
      collage_name: userDetails.educational_info[1]?.institution_name
      
    }
    reset(data);
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const { register, handleSubmit, reset,errors } = useForm({
    
  });

  const update = (val) => {
    const dataval = {
      qualification: val.qualification,
      educational_info: JSON.stringify([
        {
          institution_name: val.school_name,
          class_name: val.qualification > 3 ? val.qualification : null,
        },
        {
          institution_name: val.collage_name,
          class_name: val.qualification <= 3 ? val.qualification : null,
        },
      ]),
    };


    let data = { ...dataval, _id: storage.get("humlog_user") };
    const formData = serialize(data);

    dispatch(userActions.updateUserData({ formData }))
      .then((res) => {
        if (res.value.success) {
          console.log(res.value.message);
     
        }
      })
      .catch((err) => console.log(err));

    console.log(val);
  
    handelClose();
  };

  return (
    <>
      <div className="sup_pp">
        <div className="row no-gutters">
          <div className="col-12  pt-2">
            <h2 className="tttle text-dark  font-weight-bold">Education & Qualification</h2>
            <div className="mt-4 ">
              <Form onSubmit={handleSubmit(update)}>
             
                <div className="d-flex justify-content-between">
                  <div className="form-check detail_btn_cca text-center">
                    <input
                      className="form-check-input d-none"
                      type="radio"
                      name="qualification"
                      id="Below 10th"
                      value="0"
                      ref={register}
                    />
                    <label className="form-check-label  lw" for="Below 10th">
                      Below 10th
                    </label>
                  </div>

                  <div className="form-check detail_btn_cca text-center">
                    <input
                      className="form-check-input d-none"
                      type="radio"
                      name="qualification"
                      id="10th pass"
                      value="1"
                      ref={register({
                        required: "Please  select qualification",
                      
                      })}
                  
                    />
                    <label className="form-check-label lw" for="10th pass">
                      10th pass
                    </label>
                  </div>

                  <div className="form-check detail_btn_cca text-center">
                    <input
                      className="form-check-input d-none"
                      type="radio"
                      name="qualification"
                      id="12th pass"
                      value="2"
                      ref={register({
                        required: "Please  select qualification",
                      
                      })}
                    />
                    <label className="form-check-label lw " for="12th pass">
                      12th pass
                    </label>
                  </div>

                  <div className="form-check detail_btn_cca text-center">
                    <input
                      className="form-check-input d-none"
                      type="radio"
                      name="qualification"
                      id="Graduate & Above"
                      value="3"
                      
                      autocomplete="off"
                      ref={register({
                        required: "Please  select qualification",
                      
                      })}
                    />
                    <label className="form-check-label lw" for="Graduate & Above">
                      Graduate & above
                    </label>
                  </div>
                </div>

                <div className="d-flex justify-content-between mt-2">
                  <div className="form-check detail_btn_cca text-center">
                    <input
                      className="form-check-input d-none"
                      type="radio"
                      name="qualification"
                      id="12th+ITI"
                      value="4"
                      ref={register({
                        required: "Please  select qualification",
                      
                      })}
                    />
                    <label className="form-check-label  lw" for="12th+ITI">
                      12th+ITI
                    </label>
                  </div>

                  <div className="form-check detail_btn_cca text-center">
                    <input
                      className="form-check-input d-none"
                      type="radio"
                      name="qualification"
                      id="Grad+ITI"
                      value="5"
                      ref={register({
                        required: "Please  select qualification",
                      
                      })}
                    />
                    <label className="form-check-label lw" for="Grad+ITI">
                    Graduate
                    +
                    ITI
                    </label>
                  </div>

                  <div className="form-check detail_btn_cca text-center">
                    <input
                      className="form-check-input d-none"
                      type="radio"
                      name="qualification"
                      id="12th+Diploma"
                      value="6"
                      ref={register({
                        required: "Please  select qualification",
                      
                      })}
                    />
                    <label className="form-check-label lw " for="12th+Diploma">
                      12th  +  Diploma
                    </label>
                  </div>

                  <div className="form-check detail_btn_cca text-center ">
                    <input
                      className="form-check-input d-none"
                      type="radio"
                      name="qualification"
                      id="Grad+Diploma"
                      value="7"
                      
                      autocomplete="off"
                      ref={register({
                        required: "Please  select qualification",
                      
                      })}   
                            />
                    <label className="form-check-label lw" for="Grad+Diploma">
                      Graduate + 
                      Diploma
                    </label>
                  </div>
                </div>

                <Form.Group
                  controlId="exampleForm.ControlInput1"
                  className="mt-4"
                >
                  <Form.Label className="pa">School </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your school name"
                    name="school_name"
              
                    autocomplete="off"
                    ref={register({
                      
                      maxLength:{
                             value:30,
                             message:" enter maxmimum 30 charcater"
                      }
                  
                  })}
                  
                  />
                  {errors.school_name && <p className="text-danger  oom">{errors.school_name.message}</p>}
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label className="pb">college</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=" Enter your college name"
                    name="collage_name"
                  
                    autocomplete="off"
                    ref={register({
                      
                        maxLength:{
                               value:30,
                               message:" enter maxmimum 30 charcater"
                        }
                    
                    })}
                  />
                  {errors.collage_name && <p className="text-danger  oom">{errors.collage_name.message}</p>}
                </Form.Group>

                <div className=" py-2 px-2 ">
                  <button className="common_btn" type="submit">
                    {" "}
                    Save{" "}
                  </button>
                </div>

                
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
