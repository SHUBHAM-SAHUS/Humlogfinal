import "./lading.scss";
import logoa from "../../../assets/images/fnlogo.jpeg";
import { useHistory } from "react-router-dom";
import facebookd from "../../../assets/images/facebookd.png";
import linkdind from "../../../assets/images/linkedind.png";
import whatsd from "../../../assets/images/whatsappd.png";
import youtubed from "../../../assets/images/YouTubed.png";
import twitterd from "../../../assets/images/twitterd.png";
import instrad from "../../../assets/images/instagramd.png";
import simpleicon from "../../../assets/images/simpleicc.png";
import supporticon from "../../../assets/images/supportcc.png";
import socialicon from "../../../assets/images/socialcc.png";
import wantjob from "../../../assets/images/job_want.png";
import staffjob from "../../../assets/images/staff_want.png";
import logom from "../../../assets/images/logo_a.png";

export const Landingpage = () => {
  const history = useHistory();
  return (
    <>
      <div className="p-0  m-0 main_landing">
        <div className="row no-gutters p-0">
           <div className="col-12 col-lg-6 mx-lg-auto pt-3 ">
            <div className="va  pb-lg-0">
              <div className="d-flex justify-content-between pt-1">
                <div className="vb ">
                  <img src={logom} width="20%" className=" " />
                  <img src={logoa} width="35%" className=" " />
                </div>

                <div className=" mt-1 mr-31">
                  <h2 className="logo_bb mr-2">
                    हिन्दी/<strong className="logo_cc">English</strong>
                  </h2>
                </div>
              </div>

              <div className="d-flex justify-content-around  pt-3 pt-lg-0 mt-4">

                <div className="mt-3">
                  <div className="d-flex justify-content-center ">
                    {" "}
                    <img src={wantjob} style={{ width:"50%", height:"50%"}} />{" "}
                  </div>

                  <div
                    className="text-capitalize btu text-center mx-auto  py-2 mt-3  w-75"
                    onClick={() => history.push("/JobSeekerlogin")}
                  >
                    {" "}
                    i want job{" "}
                  </div>
                </div>

                <div className="mt-3">
                  <div className="d-flex justify-content-center">
                    {" "}
                    <img src={staffjob} style={{ width:"50%", height:"50%"}}  className="img_job" />{" "}
                  </div>

                  <div
                    className="text-capitalize btuu text-center mx-auto  py-2 mt-3 staff_k w-75"

                    onClick={() => history.push("/recruiter")}
                  >
                    {" "}
                    i want staff{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3  pt-2">
              <div className="d-flex justify-content-around">
                <div className="w-25">
                  <div>
                    {" "}
                    <img src={simpleicon} style={{ width:"100%", height:"100%"}} className="img_staff" />{" "}
                  </div>

                  <div className="text-capitalize  text-center  mt-1 bty">
                    {" "}
                    Simple{" "}
                  </div>
                </div>

                <div className="w-25">
                  <div className="d-flex justify-content-center">
                    {" "}
                    <img src={socialicon} style={{ width:"100%", height:"100%"}} />{" "}
                  </div>

                  <div className="text-capitalize bty text-center  mt-1">
                    {" "}
                    social{" "}
                  </div>
                </div>

                <div className="w-25" onClick={() => history.push("/saarthi")}>
                  <div className="d-flex justify-content-center">
                    {" "}
                    <img src={supporticon} style={{ width:"100%", height:"100%"}} className="" />{" "}
                  </div>

                  <div className="text-capitalize bty text-center  mt-1">
                    {" "}
                    Support{" "}
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-around  mt-lg-3 landing_pdd  mrg">
                <a
                  href="https://www.facebook.com/Humlogjobs-104496931645739"
                >
                  <img src={facebookd} className="landing_icon" />{" "}
                </a>

                <a href="https://twitter.com/humlog_jobs">
                  {" "}
                  <img src={twitterd} className="landing_icon" />{" "}
                </a>
                <a
                  href="https://www.youtube.com/channel/UCMHUWjNiInbLlLD7vv-9kyA"
                >
                  {" "}
                  <img src={youtubed} className="landing_icon" />{" "}
                </a>
                <a
                  href="https://www.linkedin.com/company/humlogjobs"
                >
                  <img src={linkdind} className="landing_icon" />{" "}
                </a>
                <a
                  href="https://www.instagram.com/humlogjobs"
                >
                  <img src={instrad} className="landing_icon" />{" "}
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};
