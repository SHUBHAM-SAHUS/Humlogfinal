import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as JobActions from "redux/actions/JobActions";
import storage from "utils/storage";
import moment from 'moment';
import "./schdule.scss";

export const ScheduleInterview=()=>{
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  let userId = storage.get("humlog_user");
  useEffect(() => {
    if (!loaded) {
      setLoaded(true);
      dispatch(JobActions.getInterviewByUserId(userId));

    }
  }, [loaded, dispatch, userId]);
  
  const { interviewList } = useSelector((state) => state.jobReducer);
     return(
         <>
         
           <div className="">
                 
                {
                  interviewList.map(val=>{
                    return(
                      <>
                       <div className=" main_notification py-2 border px-2" >
                            
                        <div className="row no-gutters p-0 m-0">
                              <div className="col-6">
                              <h6 className="font-weight-bold ml-1 ">  Title - </h6> 
                              <h6 className="font-weight-bold ml-1">  Contact person Name - </h6>
                              <h6 className="font-weight-bold ml-1 ">  Start-Time - </h6>
                              <h6 className="font-weight-bold ml-1">  End-Time - </h6>
                              <h6 className="font-weight-bold ml-1">  Date - </h6>

                              </div>
                              <div className="col-6 pl-2">
                              <h6 className="font-weight-bold warp_text ">{val.title} </h6>
                              <h6 className=" font-weight-bold warp_text ">{val.contact_person}</h6>
                              <h6 className=" font-weight-bold warp_text ">{val.start_time}</h6>
                              <h6 className=" font-weight-bold warp_text ">{val.end_time} </h6>
                               <h6 className=" font-weight-bold warp_text ml-1"> {moment(val.date).format('YYYY- MM- DD')} </h6>
                                        

                              </div>

                            </div> 
                  
                       
                    
                          </div>     



                      </>
                    )
                  })
                }
      
           </div>

         </>
     )
}