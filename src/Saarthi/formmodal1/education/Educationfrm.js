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

export const Educatiofrm = ({ handelClose }) => {
  const { userDetailsById } = useSelector((state) => state.userReducer);

  useEffect(() => {
    loadProfile();
  }, []);
  const loadProfile = () => {
    reset(userDetailsById);
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const { register, handleSubmit, reset } = useForm();

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

    // let dataArr=[];
    // console.log(val);
    //  if (val.school) {
    //    dataArr.push({institution_name: val.school});
    //  }
    //  if (val.collage) {
    //   dataArr.push({institution_name: val.school});
    // }
    // console.log(":======",dataArr);
    //  const userq =[val];
    //  const data =userq;
    let data = { ...dataval, contact:userDetailsById.contact, _id:userDetailsById._id };
    const formData = serialize(data);

    dispatch(userActions.upsertUserData({ formData }))
      .then((res) => {
        if (res.value.success) {
          console.log(res.value.message);
          //  history.push("/user/basicdetail/jobinterested")
          //   const shubham = [];
          // shubham.push({institution_name: "abc",class_name:"oooo"})
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
            <div className="mt-4">
              <Form onSubmit={handleSubmit(update)}>
                {/* start radio */}
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
                      ref={register}
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
                      ref={register}
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
                      ref={register}
                    />
                    <label className="form-check-label lw" for="Graduate & Above">
                      Graduate & above
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
                    ref={register}
                  
                  />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label className="pb">college</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=" Enter your college name"
                    name="collage_name"
                    ref={register}
                  />
                </Form.Group>

                <div className="btn_bdr py-2 px-2 ">
                  <button className="common_btn" type="submit">
                    {" "}
                    Save{" "}
                  </button>
                </div>

                {/* end radio */}
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
