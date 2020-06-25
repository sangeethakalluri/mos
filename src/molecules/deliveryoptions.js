import React from "react";
import { Link } from "react-router-dom";
import "App.css";
import StaticDatePicker from "atoms/datepicker";

function DeliveryOptions() {
  return (
    <div className="row delivery-options px-4">
      <h5 className="text-center col-md-12 col-sm-12 col-xs-12 mb-4">
        ENTER LOCATION DETAILS
      </h5>
      <div className="col-md-5 col-sm-12 col-xs-12 mt-5">
        <div className="form-group">
          <label>DELIVERY ZIPCODE</label>
          <input type="text" className="form-control" value="92121" readonly />
        </div>
        <div className="form-group">
          <label>LOCATION TYPE</label>
          <select className="custom-select select-field" disabled>
            <option>Apartment</option>
          </select>
        </div>
      </div>
      <div className="col-md-6 col-sm-12 col-xs-12 datePicker">
        <StaticDatePicker />
      </div>
      <div class="offset-md-2 col-md-8  col-sm-12 col-xs-12 pt-4 pb-4 d-flex justify-content-center">
        <Link to="/delivery">
          <button type="button" class="btn customise-btn">
            CHECKOUT
          </button>
        </Link>
      </div>
    </div>
  );
}

export default DeliveryOptions;
