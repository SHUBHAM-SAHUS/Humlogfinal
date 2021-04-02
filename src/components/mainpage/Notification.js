import { Notificationpage } from "components/jobseeker/notification/Notificationpage"
import { RecruiterNotification } from "components/recruiter/recruiternotification/RecruiterNotifiction"


import storage from "utils/storage";

export const Notification=()=>{
    if (storage.get("humlog_user_role") == 0) {
    return(  
      <Notificationpage/>
    ); } else return <RecruiterNotification/>
}



