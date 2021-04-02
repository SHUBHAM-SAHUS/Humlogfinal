import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.scss";
import men from "assets/images/men.jpg";
import { Nav } from "react-bootstrap";
import { RiGroupLine } from "react-icons/ri";
import { BsBriefcase, BsBell } from "react-icons/bs";
import dashboard from "assets/images/dashboard.png";
import {useLocation} from "react-router-dom";
import {useHistory} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as userActions from "redux/actions/UserActions";
import * as authActions from "redux/actions/AuthActions";
import {CgTemplate} from "react-icons/cg";



export const HeadFooter = () => {
const location = useLocation();
const history = useHistory();
const { userDetails } = useSelector((state) => state.userReducer);
  return (
    <>
          {(location.pathname === `/user/basicdetail` || location.pathname === `/companydetail` ||  location.pathname ===    `/user/basicdetail/jobinterested`) ? (<div></div>) 
           :          

            
        <header className=" fixed-bottom bottom_navigation">
        <div className="row no-gutters">
          <div className="col-md-4"> </div>
        <div className="col-md-4 main_headfooter py-2 px-2">
          <div className="">
            <Nav className="d-flex justify-content-around">
              
          
            <NavLink
                to="/dashboard"
                activeClassName="menu_active"
                className="nav_aa"
              >
                
         

                 <CgTemplate className="mx-auto d-flex justify-content-center icon_uu"/>                   

                
                <p
                  className={location.pathname==='/dashboard'?'dashboard_menu_one text-center': 'dashboard_menu text-center'}
           
                  activeClassName="menu_active">
                  Dashboard
                </p>
              
              </NavLink>

              <NavLink
                to="/community"
                activeClassName="menu_active"
                className="nav_aa"
              >
                 <div className="">
                 <RiGroupLine className="mx-auto d-flex justify-content-center icon_uu"/>
                <p className="dashboard_menu text-center">Community</p>
                </div>
                
              </NavLink>

              <NavLink
                to="/jobs"
                activeClassName="menu_active"
                className="nav_aa"
              >
                <BsBriefcase className="mx-auto d-flex justify-content-center icon_uu" />{" "}
                <p className="dashboard_menu text-center"> Jobs</p>{" "}
              </NavLink>

              <NavLink
                to="/Notification"
                activeClassName="menu_active"
                className="nav_aa"
              >
                <BsBell className="mx-auto d-flex justify-content-center icon_uu" />
                <p className="dashboard_menu text-center"> Notifications</p>
              </NavLink>

              <NavLink
                to="/profile"
                activeClassName="menu_active"
                className="nav_aa"
              >
        
{userDetails.profile_pic &&
                        userDetails.profile_pic.length > 0 ? (
                          <img
                            className="playerProfilePic_home_tile"
                            src={userDetails.profile_pic}
                            width="18px"
                            height="18px"
                            
                            className="mx-auto d-flex justify-content-center Icon_u rounded-circle"
                          />
                        ) : (
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8yJmOL8nb6x7NO2xuLB-Cc1qP2MRFdq24qg&usqp=CAU"
                            
                            width="18px"
                            height="18px"
                            className="mx-auto d-flex justify-content-center Icon_uu rounded-circle"
                          />
                        )}

 



                <p className="dashboard_menu text-center">Profile</p>
              </NavLink>
            </Nav>
          </div>
        </div>
        <div className="col-md-4">  </div>
        </div>
      </header>

  }

    </>
  );
};
