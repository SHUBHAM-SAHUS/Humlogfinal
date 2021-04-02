import { Dashboardpage } from "components/jobseeker/dashboardpage/Dashboardpage"
import { Recruiterdashboard } from "components/recruiter/recruiterdashboard/Recruiterdashboard";
import { SarthiDashboard } from "Saarthi/dashboard/dashboard";
import storage from "utils/storage";
export const Dashboard=()=>

{
    if (storage.get("humlog_user_role") == 0) {
    return(  
    
    <Dashboardpage/>
    ); } 
     else {
         if (storage.get("humlog_user_role") == 1)
         {
            return  (<SarthiDashboard/>)

         }else return <Recruiterdashboard/>}
    
}