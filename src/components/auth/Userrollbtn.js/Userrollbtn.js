import { useHistory } from "react-router-dom";
import "./btn.scss";

export const  Userrollbtn=()=>{

     const history= useHistory();
    
    return(
        <>  
        <div id="myDIV">
          
            <div className="d-flex  justify-content-between px-2 mt-2 ">
                  <div className={history.location.pathname == '/JobSeekerlogin' ? 'btn_a mr-1' : 'btn_b mr-1'} id="bto"  onClick={()=>history.push("/JobSeekerlogin")}> Job-Seeker </div>
                  <div className={history.location.pathname == '/recruiter' ? 'btn_a ml-1' : 'btn_b ml-1'}   id="bto" onClick={()=>history.push("/recruiter")}> Employer </div>
                </div>

                </div>
       </>
    )
}