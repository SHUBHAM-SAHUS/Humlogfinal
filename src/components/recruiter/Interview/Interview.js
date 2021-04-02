import { useLocation, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { serialize } from "object-to-formdata";

import { Form, Col } from "react-bootstrap";
import classNames from "classnames";
import * as JobAction from "redux/actions/JobActions";
import * as UserActions from "redux/actions/UserActions"

export const Interview = () => {
  const { handleSubmit, errors, register } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  let location = useLocation();

  const update = (val) => {
    let data = { ...val,
      recruiter_id:location.state.recruiter_id,
      seeker_id:location.state.seeker_id,
      title: location.state.jobs.job_title,
      job_id: location.state.jobs._id,
     };

    dispatch(JobAction.scheduleInterview({ data }))
      .then((res) => {
        if (res.value.success) {
          let jobUpdate = { _id: location.state.seeker_id, jobs: JSON.stringify(jobData) }
          let formData = serialize(jobUpdate);
          dispatch(UserActions.updateUserData({ formData }))
          .then((res) => {
            if (res.value.success) {
              history.goBack();
              console.log(res.value.message);
             
            }
          })
          .catch((err) => console.log(err));          
        }
      })
      .catch((err) => console.log(err));

      let jobData=location.state.jobs
      jobData.status = "Selected"

 

   

  };
  return (
    <>
      <div className="st">
        <div className="row no-gutters p-0 m-0">
          <div className="col-12 px-3">
            <Form onSubmit={handleSubmit(update)}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label className="font-weight-semibold">Title</Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Add your title here"
                  name="title"
                  value={location.state.jobs.job_title}
                  disabled
                  autocomplete="off"
                  className={classNames("form-control", {
                    "is-invalid": errors.title,
                  })}
                  ref={register({
                    required: " Please enter job title",
                    maxLength: {
                      value: 30,
                      message: "Maximum 30 character can be entered",
                    },
                  })}
                />

                {errors.title && (
                  <p className="text-danger  oom p-0 m-0">
                    {errors.title.message}
                  </p>
                )}
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label className="font-weight-semibold">Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  placeholder="Add your title here"
                  className={classNames("form-control", {
                    "is-invalid": errors.date,
                  })}
                  ref={register({
                    required: "Please  select date ",
                  })}
                />

                {errors.date && (
                  <p className="text-danger  oom p-0 m-0">
                    {errors.date.message}
                  </p>
                )}
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label className="font-weight-semibold">
                  Contact Person Name
                </Form.Label>
                <Form.Control
                  type="text"
                  
                  name="contact_person"
                  placeholder="Enter contact person name"
                  className={classNames("form-control", {
                    "is-invalid": errors.contact_person,
                  })}
                  ref={register({
                    required: " Please enter contact person  name",

                    pattern: {
                      value: /^[a-zA-Z\s]*$/,
                      message: " Numeric value not allow",
                    },

                    maxLength: {
                      value: 25,
                      message: " Maximum 25 Character limit ",
                    },
                  })}
                />
                  {errors.contact_person && (
                          <p className="text-danger  txt">
                            {errors.contact_person.message}
                          </p>
                        )}
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  rows={3}
                  placeholder="Write your description here"
                  className={classNames("form-control", {
                    "is-invalid": errors.description,
                  })}
                  ref={register({
                    required: " Please enter  job  description",

                    maxLength: {
                      value: 200,
                      message: "Description should be less than 200 characters",
                    },
                  })}
                />
                     {errors.description && (
                          <p className="text-danger  oom p-0 m-0">
                            {errors.description.message}
                          </p>
                        )}
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label className="d-flex justify-content-start llbl"         >
                  Start time
                  <b>
                    {" "}
                    <font className="text-danger ml-1">*</font>{" "}
                  </b>
                </Form.Label>
                <Form.Row>
                  <Col>
                    <Form.Control
                      placeholder="Eg. 10000"
                      
                      name="start_time"
                      type="time"
                      className={classNames("form-control", {
                        "is-invalid": errors.date,
                      })}
                      ref={register({
                        required: "Please  select date ",
                      })}


                    />
                    {errors.start_time && (
                      <p className="text-danger  oom p-0 m-0">
                        {errors.start_time.message}
                      </p>
                    )}
                  </Col>
                  to
                  <Col>
                    <Form.Control
                      placeholder="Eg. 20000"
                      ref={register}
                      name="end_time"
                      type="time"
                      className={classNames("form-control", {
                        "is-invalid": errors.end_time,
                      })}

                      ref={register({
                        required: "Please  select date ",
                      })}


                    />

                    {errors.end_time && (
                      <p className="text-danger  oom p-0 m-0">
                        {errors.end_time.message}
                      </p>
                    )}
                  </Col>
                </Form.Row>
              </Form.Group>

              <button className="common_btn mt-4 mb-2" type="submit">
                {" "}
                Submit
              </button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
