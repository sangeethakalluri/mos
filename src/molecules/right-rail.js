import React from "react";
import "App.css";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

function RightRail({ version }) {
  return (
    <React.Fragment>
      <div className="row card flex-row mb-2">
        <div className="col-12">
          <h4 className="text-left mt-3 pb-3 orderSummaryTitle">Summary</h4>
        </div>
        <div className="col-3 d-flex ">
          <img
            src="//s7img.ftdi.com/is/image/ProvideCommerce/BD2D_LOL?$ftd-tile-wide-mv-new$"
            className="variation-img rounded mt-3"
            alt="variation_image"
          />
        </div>
        <div className="col-9">
          <div className="d-flex mt-3">
            <h6 className="col-md-8 col-8 text-left px-0">
              Life of the Party Bouquet - Better
            </h6>
            <h6 className="col-md-4 col-4 text-right">$65</h6>
          </div>
          <div className="d-flex">
            <a
              href="#edit"
              className="col-md-2 col-2 text-left px-0 custom-link"
            >
              <EditOutlinedIcon />
            </a>
            <a
              href="#remove"
              className="col-md-4 col-5 text-right px-0 custom-link"
            >
              <DeleteOutlineOutlinedIcon />
            </a>
          </div>
          <hr />
          <h5>Delivery:</h5>
          <p className="mb-0">
            {" "}
            Thu, June 29 to 60515{"  "}
            <a href="#edit" className="custom-link">
            <EditOutlinedIcon />
            </a>
          </p>
          <p> Florist Crafted & Delivered </p>
        </div>
      </div>
      <div className="row card px-2 py-3">
        <div className="d-flex">
          <p className="text-left mb-0 col-8 osLabel">Order Subtotal</p>
          <p className="text-right mb-0 col-4 osLabel">$65.00</p>
        </div>
        <hr />
        <div className="d-flex">
          <p className="text-left mb-0 col-8 osLabel">Estimated Tax</p>
          <p className="text-right mb-0 col-4 osLabel">$13.28</p>
        </div>
        <hr />
        <div className="d-flex">
          <p className="text-left mb-0 col-8 osLabel">Estimated Subtotal</p>
          <p className="text-right mb-0 col-4 osLabel">$78.28</p>
        </div>
        {version === "payment" && (
          <div className="col-md-12 mt-4">
            <input
              type="text"
              className="form-control"
              placeholder="Promo Code / Coupon Code"
            />
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default RightRail;
