// import { Input, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import logo from "../../../../assets/images/fnlogo.jpeg";
import facebook from "assets/images/face.png";
import google from "assets/images/google.png";
import TabsUI from "../../../commoncomponent/TabsUI.js";
import { Userrollbtn } from "components/auth/Userrollbtn.js/Userrollbtn";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import "./forget.scss";
import { RecruiterLogin } from "../Loginpage/RecruiterLogin.js";
import { RecruiterSignup } from "../signuppage/RecruiterSignup.js";
import { Socialbtn } from "components/commoncomponent/socialbtn/Socialbtn.js";
import {Form,Button} from "react-bootstrap";
import { FaRegRegistered } from "react-icons/fa";


export const Forgetpassword = ({ history }) => {

const {register,handleSubmit,errors,reset} = useForm();


const update=(val)=>{

}

  return (
    <>
      <div>
    

        <div className="main_login">
          <div className="row  no-gutters">
            <div className="col-md-4"> </div>
            <div className=" col-md-4  rb sha ">
              <div className=" login_aa px-5">
                <div className="d-flex justify-content-center ">
                  <img src={logo} width="50%" alt="logo" />
                </div>

                
            

                {/* <Userrollbtn /> */}

                <div className=" mt-3">
                  
                 
                 {/* <Socialbtn/> */}

                 

                  <div className="pt-2 pb-4  ">
                  <Form onSubmit={handleSubmit(update)}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label className="text-capitalize">Email</Form.Label>
    <Form.Control type="email" placeholder="Enter your Email Address" name="email" ref={register}  autoComplete="off"/>
  
  </Form.Group>


 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
                 
            
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">  </div>
          </div>
        </div>
      </div>
    </>
  );
};
