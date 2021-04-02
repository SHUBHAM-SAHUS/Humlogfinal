import React, { useState } from "react";
import PropTypes from "prop-types";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import TabsUI from "../../../commoncomponent/TabsUI.js";
import { Userrollbtn } from "components/auth/Userrollbtn.js/Userrollbtn";

import logoa from "../../../../assets/images/fnlogo.jpeg";
import "./saarthi.scss";
import { SaarthiLogin } from "../Loginpage/SaarthiLogin.js";
import { SaarthiSignUp } from "../Signup/SaarthiSignUp.js";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

export const SaarthiPage = ({ history }) => {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const labels = ["Sign up ", "Sign In"];
  const tabs = {
    0: SaarthiLogin,
    1: SaarthiSignUp,
  };

  return (
    <>
      <div>
        <div className="main_login">
          <div className="row  no-gutters">
            <div className="col-md-4 p-0 m-0"> </div>
            <div className=" col-md-4  p-0  m-0 rb sha">
              <div className=" px-3 pt-2 ">
                <div className="d-flex justify-content-center ">
                  <img src={logoa} width="50%" alt="logo" />
                </div>

                <h6 className="text-center text-bold mt-4 font-weight-medium">
                  {" "}
                  Saarthi
                </h6>

                <div className=" mt-3">
                  <div className="mt-2 ">
                    <div className="mt-">
                      <div>
                        <div>
                          <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fixed"
                            scrollButtons="on"
                            className="recruiter-tab"
                            aria-label="scrollable auto tabs example"
                          >
                            {labels &&
                              labels.map((label, index) => (
                                <Tab
                                  key={index}
                                  label={label}
                                  {...a11yProps(index)}
                                />
                              ))}
                          </Tabs>
                          {tabs &&
                            labels.map((tabContent, index) => (
                              <TabPanel
                                className="custom-pane"
                                value={value}
                                index={index}
                                key={index}
                              >
                                {tabs[index]}
                              </TabPanel>
                            ))}

                          <p className="p-0 m-0 text-center mb-2">
                            {value === 0 ? (
                              <div>
                                {" "}
                                Already have an account?{" "}
                                <a
                                  className="text-primary recru"
                                  onClick={(e) => handleChange(e, 1)}
                                >
                                  {" "}
                                  Sign In
                                </a>{" "}
                              </div>
                            ) : (
                              <div>
                                {" "}
                                Don't have an account?{" "}
                                <a
                                  className="text-primary recru"
                                  onClick={(e) => handleChange(e, 0)}
                                >
                                  {" "}
                                  Sign Up{" "}
                                </a>{" "}
                              </div>
                            )}{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4"> </div>
          </div>
        </div>
      </div>
    </>
  );
};
