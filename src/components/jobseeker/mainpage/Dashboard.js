import { Dashboardpage } from "components/jobseeker/dashboardpage/Dashboardpage";

export const Dashboard = () => {
  return (
    <>
     user.role == 0 ?  <Dashboardpage /> : <RecruiterDashboardpage/>
    </>
  );
};
