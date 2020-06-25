import React from "react";
import ProductTile from "molecules/product-tile";
import products from "static/data/products.json";
import StaticDatePicker from "atoms/datepicker";

function ListingPage() {
  console.log("products", products);
  return (
    <div className="content-wrapper">
      <div className="row">
        <div className="offset-md-1 form-group col-md-3">
          <label for="inputEmail4" className="font-italic">
            Delivery Zip
          </label>
          <input
            type="zip"
            className="form-control"
            id="inputEmail4"
            placeholder="ie.:94117"
          />
        </div>
        <div className="form-group col-md-3 datePicker">
          <label for="deliveryDate" className="font-italic">
            Delivery Date
          </label>
          <StaticDatePicker />
        </div>
        <div className="form-group col-md-3">
          <label for="inputPassword4" className="font-italic">
            Occasion Type
          </label>
          <select className="form-control">
            <option>Birthday</option>
            <option>Love</option>
            <option>Anniversary</option>
            <option>Sympathy</option>
            <option>GetWell Soon</option>
          </select>
        </div>
        <div className="col-md-2 pt-4 viewGifts">
          <button type="button" class="btn customise-btn">
            VIEW GIFTS
          </button>
        </div>
      </div>
      <div className="row pt-3">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body py-3 px-4 px-sm-4">
              <div className="row mb-4">
                <div className="col-md-4 col-2 col-sm-2 d-flex">
                  <span className="mdi mdi-format-list-bulleted"></span>&nbsp;
                  <span class=" d-none d-md-block d-lg-block">
                    Show Filters
                  </span>
                </div>
                <div className="col-md-4 col-8 col-sm-8 text-center">
                  <span>7,618 results</span>
                </div>
                <div className="col-md-4  col-2 col-sm-2 d-flex justify-content-end">
                  <span class=" d-none d-md-block d-lg-block">
                    Sort By: &nbsp;Featured
                  </span>
                  <span className="mdi mdi-chevron-down"></span>
                </div>
              </div>
              <div className="row mb-4 d-flex flex-wrap justify-content-center">
                {products.map((item) => {
                  return (
                    <div className="">
                      <ProductTile {...item} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingPage;
