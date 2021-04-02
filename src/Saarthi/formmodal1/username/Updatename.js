import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { UserActionTypes } from "redux/actions/UserActions/actionType";
import * as userActions from "redux/actions/UserActions";
import { serialize } from "object-to-formdata";
import storage from "utils/storage";
import { useHistory } from "react-router-dom";
import classNames from "classnames";
// import "./aboutself.scss";
// import * as userActions from "redux/actions/UserActions";
import * as authActions from "redux/actions/AuthActions";
// import { useDispatch, useSelector } from "react-redux";
export const Updatename = ({ handelClose }) => {
  const dispatch = useDispatch();
  const {register,handleSubmit,errors,reset} = useForm({  mode: 'onChange'});
  const [loaded, setLoaded] = useState(false);
  const history = useHistory();
  let userId = storage.get("humlog_user");
  const { userDetailsById } = useSelector((state) => state.userReducer);

  useEffect(() => {
    loadProfile();
  }, []);
  const loadProfile = () => {
    reset(userDetailsById);
  };

  const handleClick = () => {};

  const handleDelete = () => {};

  const update = (val) => {
    let data = { ...val, contact:userDetailsById.contact, _id:userDetailsById._id };
    const formData = serialize(data);

    dispatch(userActions.upsertUserData({ formData }))
      .then((res) => {
        if (res.value.success) {
          console.log(res.value.message);
          //  history.push("/user/basicdetail/jobinterested")
        }
      })
      .catch((err) => console.log(err));

    console.log(val);

    handelClose();
  };

  return (
    <>
      <div className="conatiner">
        {" "}
        <div className="row">
          {" "}
          <div className="col-12 ">
            <div className="  ">
              <Form onSubmit={handleSubmit(update)}>
                {/* <h3 className="about_oa"> i am </h3> */}

                <div>
                  <div className="">
     
                  </div>

                  <div className="mt-4 ">
                    <Form.Group controlId="formGroupEmail">
                      <Form.Label className="lbl_a">Enter Username</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                     
                        ref={register({
                          required: " Please enter your full name",
                          pattern:{
                            value:/^[a-zA-Z]+$/,
                            message:" Numeric value not allow"
                          }
                        
                        
                        })}
                        name="name"
                        className=" textff font-weight-semibold"
                        name="name"
                        autocomplete="off"
                        className={classNames("form-control", {
                          "is-invalid": errors.name
                        })}
                      />
                        {errors.name && <p className="text-danger  oom">{errors.name.message}</p>}
                    </Form.Group>
                    <button className="common_btn mt-4"> Save </button>
                  </div>
                </div>
              </Form>
            </div>{" "}
          </div>{" "}
        </div>
      </div>
    </>
  );
};
