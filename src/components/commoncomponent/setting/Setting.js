import React,{useState} from "react";
import { BiBookOpen } from "react-icons/bi";
import { useForm } from "react-hook-form";
import "./setting.scss";
import { useDispatch, useSelector } from "react-redux";
import * as userActions from "redux/actions/UserActions";
import * as authActions from "redux/actions/AuthActions";
import {useHistory} from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import whats from "../../../assets/images/whatsappd.png"


export const Setting = () => {
  const { register, handleSubmit, errors } = useForm({ mode: "onChange" });
  const dispatch = useDispatch();
  const history = useHistory();
  const [state, setState]= useState({
    checkedA: true,
    checkedB: true,
  });



//  function SwitchLabels() {
  

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handelLogout = () => {
    dispatch(authActions.logout);
    setTimeout(()=>{
      window.location.reload();
      history.push('/JobSeekerlogin');
    },200);

    // history.push('/JobSeekerlogin');
 }

  return (
    <>
      <div className="">
        <div className="row p-0 m-0">
          <div className="col-md-"></div>
       
          <div className="col-md-12 st ">
          <BiArrowBack className="text-center back_icon" onClick={history.goBack} />
           
            <div>
              <div className="form-group mt-2">
                <label for="email" className="cols-sm-2 control-label">
                  <BiBookOpen className="detail_icon_user" />

                  <b> Language</b>
                </label>

                <div className="d-flex justify-content-between">
                  <div className="form-check  setting_op text-center">
                    <input
                      className="form-check-input d-none"
                      type="radi"
                      name="qualification"
                      value="0"
                      id="below 10th"
                      ref={register({
                        required: "Please  Select  Qualification Field",
                      })}
                    />
                    <label
                      className="form-check-label text-capitalize  lw py-2"
                      for="below 10th"
                    >
                      Hindi
                    </label>
                  </div>

                  <div className="form-check  setting_op text-center">
                    <input
                      className="form-check-input d-none"
                      type="radio"
                      name="qualification"
                      id="10th pass"
                      value="1"
                      ref={register({
                        required: "Please  Select  Qualification Field",
                      })}
                    />
                    <label
                      className="form-check-label text-capitalize  lw py-2 bg_cll"
                      for="10th pass"
                    >
                      English
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-check  setting_pp text-center form-check-label text-capitalize  lw py-2 px-5">
              Choose plan
            </div>

            <div className="form-check  setting_pp text-center form-check-label text-capitalize  lw py-2 px-5 mt-3" onClick={handelLogout}>
              Logout
            </div>

           <a  className="text-light"> <div className="form-check  setting_pp text-center form-check-label text-capitalize  lw py-2 px-5 mt-3" onClick={()=>history.push("/terms&conditionss")}>
              Terms  & Condition
            </div> </a>
                      
            {/* <h6 className="p-0 m-0 mt-2"> Notifications</h6> */}
            {/* <div className="d-flex justify-content-between mt-2">
                <h6 className="p-0 m-0 mt-2"> SMS</h6>
              
              <FormControlLabel
        control={
          <Switch
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label=""
      />
      </div> */}

              {/* <div className="d-flex justify-content-between mt-2">
                <h6 className="p-0 m-0 mt-1"> Whatsapp</h6>
              
              <FormControlLabel
        control={
          <Switch
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label=""
      />
      </div> */}
       {/* <img src={whats} width="50px"/> */}
       
          </div>
        </div>
      </div>
    </>
  );
};
