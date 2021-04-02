import { Userprofile } from "components/jobseeker/userprofile/Userprofile"
import { UserprofileEdit } from "components/jobseeker/userprofileEdit/Userprofile";
import { CompanyprofilePage } from "components/recruiter/companymainpage/CompanyprofilePage";
import { CompanyProfile, CompanyProfileform } from "components/recruiter/companyprofileform/CompanyProfileform";
import { JobDetails } from "components/recruiter/jobformdetails/JobDetails";
import { CompanyProfileEdit } from "components/recruiter/recruiterEditable/CompanyProfileEdit";
import { Recruiterprofile } from "components/recruiter/recruiterprofile/Recruiterprofile"
import storage from "utils/storage";



export const Profile=()=>{
    if (storage.get("humlog_user_role") == 0) {
    return(  
         <UserprofileEdit/>
    ); } else return <CompanyProfileEdit/>
}


