import React, { Component } from "react";
import RightRail from "molecules/right-rail";
import BackButton from "atoms/backbutton";
import HomeBtn from "atoms/homeBtn";
import { Link } from "react-router-dom";
import "App.css";
import CreditCardSvg from "static/images/credit_card.svg";
import GiftCardSvg from "static/images/giftcard.svg";
import CashIcon from "static/images/cash.png";
import CreditCard from "atoms/creditcard";
import GiftCard from "atoms/giftcard";
import Cash from "atoms/cash";
// import BreadCrumb from "../atoms/breadcrumb";
import NavStepper from '../atoms/stepper';

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = { paymentType: <CreditCard /> ,activeStep : 1 };
  }

  onPaymentTypeChange = (type) => {
    let obj = {
      creditcard: <CreditCard />,
      giftcard: <GiftCard />,
      cash: <Cash />,
    };
    this.setState({
      paymentType: obj[type],
    });
  };

   onNextClick =()=>{

      this.setState((state)=>({
        activeStep : state.activeStep + 1,
      }));
  }

  render() {
    return (
      <div className="content-wrapper pt-2">
        <div className="row d-flex flex-row align-items-center justify-content-center">
          <div className="col-md-2 col-2 d-flex justify-content-left">
            <BackButton />
          </div>
          <div className="col-md-8 col-8 flex text-center page-title">
            {/* <BreadCrumb type="payment" /> */}
            <NavStepper currentStep={this.state.activeStep} />
          </div>
          <div className="col-md-2  col-2 d-flex justify-content-end">
            <HomeBtn />
          </div>
        </div>
        <hr className="custom-hr" />
        <div className="row mt-1 mb-3">
          <div className="mt-4 col-md-6">
            <nav class="nav nav-tabs">
              <a
                href="#creditcard_payment"
                onClick={() => this.onPaymentTypeChange("creditcard")}
                data-toggle="tab"
                class="nav-item nav-link active"
              >
                <img
                  src={CreditCardSvg}
                  alt="creditcard_payment"
                  className="payment-icons mr-1"
                />
                Credit
              </a>

              <a
                href="#giftcard_payment"
                data-toggle="tab"
                class="nav-item nav-link"
                onClick={() => this.onPaymentTypeChange("giftcard")}
              >
                <img
                  src={GiftCardSvg}
                  alt="giftcard_payment"
                  className="payment-icons mr-1"
                />
                Gift Card
              </a>

              <a
                href="#cash"
                class="nav-item nav-link"
                data-toggle="tab"
                onClick={() => this.onPaymentTypeChange("cash")}
              >
                <img src={CashIcon} alt="cash" className="payment-icons mr-1" />
                Cash
              </a>
            </nav>
            {this.state.paymentType}
          </div>
          <div className="mt-4 col-md-6 borderLeft">
            <RightRail version={`payment`} />
            <div className="row mt-4">
              <div className="col-md-12 px-0 py-0">
                <Link to="/confirmation">
                  <button type="button" class="btn customise-btn w-100">
                    COMPLETE ORDER
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Payment;
