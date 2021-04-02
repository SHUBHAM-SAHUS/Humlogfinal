import React, { useEffect } from "react";
import "./experience.scss";


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
import { useDispatch, useSelector } from "react-redux";
import { UserActionTypes } from "redux/actions/UserActions/actionType";
export const Experience = ({ handelClose }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { handleSubmit, register, reset } = useForm();
  const { userDetails } = useSelector((state) => state.userReducer);

  useEffect(() => {
    loadProfile();
  }, []);
  const loadProfile = () => {
    let data = userDetails;

    data.experience = String(userDetails.experience);

    reset(data);
  };

  const update = (val) => {
    let data = { ...val, _id: storage.get("humlog_user") };
    const formData = serialize(data);

    dispatch(userActions.updateUserData({ formData }))
      .then((res) => {
        if (res.value.success) {
          console.log(res.value.message);
          
        }
      })
      .catch((err) => console.log(err));

    console.log(val);
    reset();
    handelClose();
  };

  return (
    <>
      <div className="">
        <div className="row no-gutters">
          <div className=" col-12 ">
            <h2 className="tttle text-dark  font-weight-bold">
              Years of experience
            </h2>
            <div className="mt-4 ">
              <Form onSubmit={handleSubmit(update)}>
                <div className="d-flex justify-content-between">
                  <div className="form-check detail_btn_cca text-center">
                    <input
                      className="form-check-input d-none"
                      type="radio"
                      name="experience"
                      id="Fresher"
                      value="0"
                      ref={register}
                    />
                    <label className="form-check-label lw" for="Fresher">
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
                      ref={register}
                    />
                    <label className="form-check-label lw" for="Less than 1">
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
                      ref={register}
                    />
                    <label className="form-check-label lw" for="1-2">
                      1-2
                    </label>
                  </div>

                  <div className="form-check   detail_btn_cca text-center">
                    <input
                      className="form-check-input d-none"
                      type="radio"
                      name="experience"
                      id="2-4"
                      value="3"
                      ref={register}
                    />
                    <label className="form-check-label lw" for="2-4">
                      2-4
                    </label>
                  </div>
                </div>

                <div className="d-flex justify-content-between mt-2">
                  <div className="form-check  detail_btn_cca text-center">
                    <input
                      className="form-check-input d-none"
                      type="radio"
                      name="experience"
                      id="4-6"
                      value="4"
                      ref={register}
                    />
                    <label className="form-check-label lw" for="4-6">
                      4-6
                    </label>
                  </div>

                  <div className="form-check  detail_btn_cca text-center ">
                    <input
                      className="form-check-input d-none"
                      type="radio"
                      name="experience"
                      id="6-8"
                      value="5"
                      ref={register}
                    />
                    <label className="form-check-label lw" for="6-8">
                      6-8
                    </label>
                  </div>

                  <div className="form-check  detail_btn_cca text-center">
                    <input
                      className="form-check-input d-none"
                      type="radio"
                      name="experience"
                      id="8-10"
                      value="6"
                      ref={register}
                    />
                    <label className="form-check-label lw" for="8-10">
                      8-10
                    </label>
                  </div>

                  <div className="form-check  detail_btn_cpo text-center">
                    <input
                      className="form-check-input d-none"
                      type="radio"
                      name="experience"
                      id="10+"
                      value="7"
                      ref={register}
                    />
                    <label className="form-check-label lw" for="10+">
                      10+
                    </label>
                  </div>
                </div>

                

                <div className="mt-3">
                  
                  <button className="common_btn" type="submit">
                    Save
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
