import React from "react";
import BackButton from "atoms/backbutton";
import "App.css";
import HomeBtn from "atoms/homeBtn";

function variations() {
  return (
    <div className="content-wrapper pt-2">
      <div class="row d-flex flex-row align-items-center justify-content-center">
        <div class="col-md-2 col-2 d-flex justify-content-left">
          <BackButton />
        </div>
        <div class="col-md-8 col-8 flex text-center page-title">
          Life of the Party Bouquet
        </div>
        <div class="col-md-2  col-2 d-flex justify-content-end">
          <HomeBtn />
        </div>
      </div>
      <hr className="custom-hr" />
      <div className="row ">
        <div className="col-lg-4 col-md-4 ">
          <div className="row mb-1">
            <div className=" col-12 ">
              <h5>SELECT AN OPTION</h5>
            </div>
          </div>
          <div className="row card flex-row mb-2">
            <div className="  col-md-4 col-4 padding-0">
              <img
                src="//s7img.ftdi.com/is/image/ProvideCommerce/BD2D_LOL?$ftd-tile-wide-mv-new$"
                className="variation-img card-img-left rounded float-left my-3"
                alt="variation_image"
              />
            </div>
            <div className="col-md-4 col-4">
              <p className="mt-4 variationType">Better</p>
              <p className="text-color-grey">Full and Lush</p>
            </div>
            <div className="col-md-4 col-4 mt-4 text-right pr-3">
              <p className="variationPrice">$65</p>
              <a href="#s">view details</a>
            </div>
          </div>
          <div className="row card flex-row mb-2">
            <div className=" col-md-4 col-4 padding-0">
              <img
                src="//s7img.ftdi.com/is/image/ProvideCommerce/BD2D_LOL?$ftd-tile-wide-mv-new$"
                className="variation-img  rounded  my-3"
                alt="variation_image"
              />
            </div>
            <div className=" col-md-4 col-4">
              <p className="mt-4 variationType">Best</p>
              <p className="text-color-grey">Full and Lush</p>
            </div>
            <div className=" col-md-4 col-4 mt-4 text-right pr-3">
              <p className="variationPrice">$75</p>
              <a href="#s">view details</a>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-1 d-none d-lg-block  borderLeft "></div> 
                <div className="col-lg-5 col-md-6  col-12  margintop-10">
                    <DeliveryOptions />
                </div> */}
      </div>
    </div>
  );
}

export default variations;
