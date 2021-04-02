import { Jobmatch } from "components/jobseeker/jobmatch/Jobmatch"
import { JobDetails } from "components/recruiter/jobformdetails/JobDetails";

import storage from "utils/storage";

export const Jobs=()=>{
    if (storage.get("humlog_user_role") == 0) {
    return(  
    <Jobmatch/>
    ); } else return <JobDetails/>
}