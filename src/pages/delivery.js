import React from 'react';
import BackButton from 'atoms/backbutton';
import 'App.css';
import HomeBtn from 'atoms/homeBtn';
import { Link } from 'react-router-dom';
import RightRail from 'molecules/right-rail';
// import BreadCrumb from '../atoms/breadcrumb';
import NavStepper from '../atoms/stepper';

function Delivery() {

  const [activeStep, setActiveStep] = React.useState(0);
    
  const onNextClick =()=>{
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }

  return (
    <div className="content-wrapper pt-2">
      <div className="row d-flex flex-row align-items-center justify-content-center">
        <div className="col-md-2 col-2 d-flex justify-content-left">
          <BackButton />
        </div>
        <div className="col-md-8 col-8 flex text-center page-title">
        <NavStepper currentStep={activeStep} />
        </div>
        <div className="col-md-2  col-2 d-flex justify-content-end">
          <HomeBtn />
        </div>
      </div>

      <hr className="custom-hr" />
      <div className="row mt-1 mb-3">
        <div className="col-md-6">
          <label>Deliver Items to</label>
          <form className="forms-sample">
            <div className="form-group">
              <select className="form-control">
                <option selected>Select Location Type </option>
                <option>Residence</option>
                <option>Business</option>
                <option>Cemetry</option>
                <option>Funeral</option>
                <option>Hospital</option>
              </select>
            </div>
            <div className="row">
              <div className="form-group col-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Recipient First Name  "
                />
              </div>
              <div className="form-group col-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Recipient Last Name"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Street Address"
                />
              </div>
              <div className="form-group col-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Apartment or Suite (Optional)"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <select className="form-control">
                  <option selected>Select State</option>
                  <option>Albama</option>
                  <option>New York</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Delivery Zip"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-6">
                <select className="form-control">
                  <option selected>Select Country</option>
                  <option>US</option>
                </select>
              </div>
              <div className="form-group col-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
            </div>
          </form>
          <label>Gift Message</label>
          <form className="forms-sample">
            <div className="form-group">
              <select className="form-control">
                <option selected>Select Occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Love</option>
                <option>Sympathy</option>
                <option>GetWell Soon</option>
              </select>
            </div>

            <div className="row">
              <div className="form-group col-12">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Gift Message..."
                />
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-6 borderLeft">
          <RightRail />
          <div className="row mt-4">
            <div className="col-md-12 px-0 py-0">
              <Link to="/payment">
                <button type="button" onClick={onNextClick} className="btn customise-btn w-100">
                  PROCEED TO PAYMENT
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
