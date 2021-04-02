 import React,{useState} from "react";
import { Applieduser } from "../Applieduser/Applieduser"
import "./dasdhboard.scss"
import TabsUI from "../../commoncomponent/TabsUI.js"

import { ScheduleInterview } from "../Jobseekerinterviwshedule/ScheduleInterview";


export const Dashboardpage=()=>{

    const labelsData = [
        
        'Applied',
        'Saved',
        'Interview',
        'Selected',
        'Not Shortlisted'
        
      ];
      const tabsData = {
        0: <Applieduser status='Applied'/>,
        1: <Applieduser status='Saved'/>,
        2: <ScheduleInterview />,
        3: <Applieduser status='Hired'/>,
        4: <Applieduser status='Rejected'/>,
       


       
      };
    
    return(
        <>
        <div className="st  m-0 p-0" >
        <TabsUI labels={labelsData} tabs={tabsData} />
         </div>
       
        </>
    );
}