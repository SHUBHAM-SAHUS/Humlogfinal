import { Jobmatch } from "components/jobseeker/jobmatch/Jobmatch";

export const Jobs = () => {
  return (
    <>
      <div className="row no-gutters">
        <div className="col-md-4 p-0 m-0"></div>

        <div className="col-md-4">
          <Jobmatch />
        </div>

        <div className="col-md-4"></div>
      </div>
    </>
  );
};
