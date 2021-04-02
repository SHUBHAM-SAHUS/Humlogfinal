<div className=" supert_pst">
<div className=" ">
<form onSubmit={handleSubmit(update)}>
    <div className="row no-gutters">
      <div className=" col-12 ">
      <div className="d-flex justify-content-between pt-2">

       <p  className="in">Industry Intrested In </p>
            <div className="d-flex">
          <BiFilterAlt className="job_icon_a" />
          <p className="job_icon_b">Filter by Sector</p>
        </div>
        </div>
           <p className="in_a"> Select maximum 3 categories</p>
        <div className="d-flex justify-content-end pt-2">
          {/* <BiFilterAlt className="job_icon_a" /> */}
          {/* <p className="job_icon_b">filter by Sector</p> */}
        </div>
        <hr className="hrr" />
        <div className="d-flex justify-content-around mt-4">
          <div className="col-4">
            <input
              type="checkbox"
              id="house"
              className="d-none"
              ref={register}
              name="job_intrested"
              disabled={!((event)=>event.currentTarget) && checkedCount >= 3 }
              value="House Help/ Care Taker"
              
            />
            <label for="house">
              <div className="d-flex justify-content-center">
              <img src={hh} width="100%" alt="image" className="sgl" />{" "}
              <img src={hhc} width="100%" alt="image"  className="dbl"/>{" "}
              </div>
            </label>
            <h6 className="job_title text-center">
              {" "}
              House Help/ Care Taker
            </h6>
          </div>

          <div className="col-4">
            <input
              type="checkbox"
              id="sale"
              className="d-none"
              ref={register}
              name="job_intrested"
              disabled={checkedCount >= 3 }
              value="Field Sales Agent"
            />
            <label for="sale">
              <div className="d-flex justify-content-center">
              <img src={ss} width="100%" alt="image" className="sgl" />{" "}
                <img src={ssc} width="100%" alt="image"  className="dbl"/>{" "}
              </div>
            </label>
            <h6 className="job_title text-center">
              {" "}
              Field Sales Agent
            </h6>
          </div>

          <div className="col-4">
            <input
              type="checkbox"
              id="plumber"
              className="d-none"
              ref={register}
              name="job_intrested"
              disabled={checkedCount >= 3 }
              value="Plumbling"
            />
            <label for="plumber">
              <div className="d-flex justify-content-center">
              <img src={nn} width="100%" alt="image" className="sgl" />{" "}
                <img src={nnc} width="100%" alt="image"  className="dbl"/>{" "}
              </div>
            </label>
            <h6 className="job_title text-center"> Plumbling</h6>
          </div>
        </div>
      </div>
    </div>

    <div className="row p-0 m-0 mt-2">
      <div className="col-12  ">
        <div className="d-flex justify-content-between">
          <div className="col-4">
            <input
              type="checkbox"
              id="tailer"
              className="d-none"
              ref={register}
              name="job_intrested"
              disabled={checkedCount >= 3 }
              value="Tailor"
            />
            <label for="tailer">
              <div className="d-flex justify-content-center">
              <img src={tt} width="100%" alt="image" className="sgl" />{" "}
                <img src={ttc} width="100%" alt="image"  className="dbl"/>{" "}
              </div>
            </label>
            <h6 className="job_title text-center"> Tailor</h6>
          </div>

          <div className="col-4">
            <input
              type="checkbox"
              id="peon"
              className="d-none"
              ref={register}
              name="job_intrested"
              disabled={checkedCount >= 3 }
              value="Office boy/Peon"
            />
            <label for="peon">
              <div className="d-flex justify-content-center">
              <img src={pp} width="100%" alt="image" className="sgl" />{" "}
                <img src={ppc} width="100%" alt="image"  className="dbl"/>{" "}
              </div>
            </label>
            <h6 className="job_title text-center"> Office boy/Peon</h6>
          </div>

          <div className="col-4">
            <input
              type="checkbox"
              id="calling"
              className="d-none"
              ref={register}
              name="job_intrested"
              disabled={checkedCount >= 3 }
              value="Tele Calling"
            />
            <label for="calling">
              <div className="d-flex justify-content-center">
              <img src={mm} width="100%" alt="image" className="sgl" />{" "}
                <img src={mmc} width="100%" alt="image"  className="dbl"/>{" "}
              </div>
            </label>
            <h6 className="job_title text-center"> Tele Calling</h6>
          </div>
        </div>
      </div>
    </div>

    <div className="row mt-2">
      <div className="col-12  ">
        <div className="d-flex justify-content-between">
          <div className="col-4">
            <input
              type="checkbox"
              id="ele"
              className="d-none"
              ref={register}
              name="job_intrested"
              disabled={checkedCount >= 3 }
              value="Electrician"
            />
            <label for="ele">
              <div className="d-flex justify-content-center">
              <img src={ee} width="100%" alt="image" className="sgl" />{" "}
                <img src={eec} width="100%" alt="image"  className="dbl"/>{" "}
              </div>
            </label>
            <h6 className="job_title text-center"> Electrician</h6>
          </div>

          <div className="col-4">
            <input
              type="checkbox"
              id="recep"
              className="d-none"
              ref={register}
              value="Receptionist"
              name="job_intrested"
              disabled={checkedCount >= 3 }
            />
            <label for="recep">
              <div className="d-flex justify-content-center">
              <img src={rr} width="100%" alt="image" className="sgl" />{" "}
                <img src={rrc} width="100%" alt="image"  className="dbl"/>{" "}
              </div>
            </label>
            <h6 className="job_title text-center">Receptionist</h6>
          </div>

          <div className="col-4">
            <input
              type="checkbox"
              id="plumbing"
              className="d-none"
              ref={register}
              value="Delivery"
              name="job_intrested"
              disabled={checkedCount >= 3 }
            />
            <label for="plumbing">
              <div className="d-flex justify-content-center">
              <img src={dd} width="100%" alt="image" className="sgl" />{" "}
                <img src={ddc} width="100%" alt="image"  className="dbl"/>{" "}
              </div>
            </label>

            <h6 className="job_title text-center"> Delivery</h6>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-3 pstt">
      <button className="common_btn" type="submit">
        {" "}
        Save{" "}
      </button>
    </div>
  </form>
</div>
</div>