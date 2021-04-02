import { Userprofile } from "components/jobseeker/userprofile/Userprofile"
import { CompanyProfile } from "components/recruiter/companyprofileform/CompanyProfileform"
import { UserprofileEdit } from "../userprofileEdit/Userprofile";

export const Profile=()=>{
    return(
        <>
        {/* <Userprofile/> */}
          {/* <CompanyProfile/> */}
          <UserprofileEdit/>
          user.role == 0 ?  <Dashboardpage /> : <RecruiterDashboardpage/>
    
        </>
    );
}