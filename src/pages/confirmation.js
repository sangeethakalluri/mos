import React from "react";
import BackButton from "atoms/backbutton";
import "App.css";
import HomeBtn from "atoms/homeBtn";
import { Link } from "react-router-dom";
import RightRail from "molecules/right-rail";
import PaidIcon from "static/images/paid_icon.svg";
import CheckIcon from "static/images/checkmark.svg";
import NavStepper from '../atoms/stepper';

function Confirmation() {
  return (
    <div className="content-wrapper pt-2">
      <div className="row d-flex flex-row align-items-center justify-content-center">
          <div className="col-md-2 col-2 d-flex justify-content-left">
            <BackButton />
          </div>
          <div className="col-md-8 col-8 flex text-center page-title">
            <NavStepper currentStep="3" />
          </div>
          <div className="col-md-2  col-2 d-flex justify-content-end">
            <HomeBtn />
          </div>
        </div>
        <hr className="custom-hr" />

      
      <div className="row mt-3 mb-3">
        <div className="col-md-6">
          <h3 className="d-flex pb-3">
            {" "}
            Your order is confirmed #MOS12345&nbsp;&nbsp;
            <img className="checkMark" src={CheckIcon} alt="checkMarkIcon" />
          </h3>
          <RightRail />
        </div>
        <div className="col-md-5 borderLeft  margintop-10">
          <div className="row rightPanel">
            <div className="col-md-12 d-flex flex-column align-items-center">
              <img src={PaidIcon} alt="paid icon" />
              <p className="paidText">PAID</p>
            </div>
            <div className="col-md-6 col-6">
              <p className="totalPaidText text-right mb-0">Total Paid</p>
              <p className="totalPaidAmount text-right mb-0">$100.00</p>
            </div>
            <div className="col-md-5 col-6 borderLeft">
              <p className="changeDueText text-left mb-0">Change Due</p>
              <p className="changeDueAmount text-left mb-0">$21.72</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="offset-md-2 col-md-8 py-0 pr-0">
              <Link to="/newOrder">
                <button type="button" class="btn customise-btn w-100">
                  START NEW ORDER
                </button>
              </Link>
            </div>
            <div className="col-md-2 d-flex margintop-10 justify-content-center align-items-center">
              <HomeBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
