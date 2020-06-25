import React from "react";
import newOrderSvg from "static/images/newOrder.svg";
import bannerImg from "static/images/banner.png";
import Face1 from "static/images/face1.jpg";
import Face2 from "static/images/face3.jpg";
import Face3 from "static/images/face4.jpg";
import Face4 from "static/images/face5.jpg";

import { Link } from "react-router-dom";

function DashBoard() {
  return (
    <div className="content-wrapper">
      <div className="row pr-5">
        <div className="col-md-7 grid-margin stretch-card">
          <div className="card">
            <div className="card-body py-0 px-0 px-sm-3">
              <div className="row align-items-center">
                <div className="banner">
                  <img
                    src={bannerImg}
                    className="pt-4 gradient-corona-img img-fluid col-12"
                    alt="bannerImage"
                  />
                  <div className="banner-content">
                    <p className="title">Congratulations William</p>
                    <p className="description">
                      You have done 57.6% more sales today. Check your new badge
                      in your profile.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-xl-5 grid-margin stretch-card messages-comp">
          <div className="card">
            <div className="card-body">
              <div className="preview-list">
                <div className="preview-item border-bottom">
                  <div className="preview-thumbnail">
                    <img
                      src={Face1}
                      alt="Person Preview"
                      className="rounded-circle"
                    />
                  </div>
                  <div className="preview-item-content d-flex flex-grow">
                    <div className="flex-grow">
                      <div className="d-flex d-md-block d-xl-flex justify-content-between">
                        <h6 className="preview-subject">Leonard</h6>
                        <p className="text-muted text-small">5 minutes ago</p>
                      </div>
                      <p className="text-muted">
                        Well, it seems to be working now.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="preview-item border-bottom">
                  <div className="preview-thumbnail">
                    <img
                      src={Face2}
                      alt="Person Preview"
                      className="rounded-circle"
                    />
                  </div>
                  <div className="preview-item-content d-flex flex-grow">
                    <div className="flex-grow">
                      <div className="d-flex d-md-block d-xl-flex justify-content-between">
                        <h6 className="preview-subject">Luella Mills</h6>
                        <p className="text-muted text-small">10 Minutes Ago</p>
                      </div>
                      <p className="text-muted">
                        Well, it seems to be working now.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="preview-item border-bottom">
                  <div className="preview-thumbnail">
                    <img
                      src={Face3}
                      alt="Person Preview"
                      className="rounded-circle"
                    />
                  </div>
                  <div className="preview-item-content d-flex flex-grow">
                    <div className="flex-grow">
                      <div className="d-flex d-md-block d-xl-flex justify-content-between">
                        <h6 className="preview-subject">Ethel Kelly</h6>
                        <p className="text-muted text-small">2 Hours Ago</p>
                      </div>
                      <p className="text-muted">Please review the tickets</p>
                    </div>
                  </div>
                </div>
                <div className="preview-item">
                  <div className="preview-thumbnail">
                    <img
                      src={Face4}
                      alt="Person Preview"
                      className="rounded-circle"
                    />
                  </div>
                  <div className="preview-item-content d-flex flex-grow">
                    <div className="flex-grow">
                      <div className="d-flex d-md-block d-xl-flex justify-content-between">
                        <h6 className="preview-subject">Herman May</h6>
                        <p className="text-muted text-small">4 Hours Ago</p>
                      </div>
                      <p className="text-muted">
                        Thanks a lot. It was easy to fix it .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row pr-5">
        <div className="col-sm-4 grid-margin">
          <div className="card">
            <div className="card-body">
              <h5>Revenue</h5>
              <div className="row">
                <div className="col-8 col-sm-12 col-xl-8 my-auto">
                  <div className="d-flex d-sm-block d-md-flex align-items-center">
                    <h2 className="mb-0">$32,123</h2>
                    <p className="text-success ml-2 mb-0 font-weight-medium">
                      +3.5%
                    </p>
                  </div>
                  <h6 className="text-muted font-weight-normal">
                    11.38% Since last month
                  </h6>
                </div>
                <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                  <i className="icon-lg mdi mdi-codepen text-primary ml-auto"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 grid-margin">
          <div className="card">
            <div className="card-body">
              <h5>Sales</h5>
              <div className="row">
                <div className="col-8 col-sm-12 col-xl-8 my-auto">
                  <div className="d-flex d-sm-block d-md-flex align-items-center">
                    <h2 className="mb-0">$45,850</h2>
                    <p className="text-success ml-2 mb-0 font-weight-medium">
                      +8.3%
                    </p>
                  </div>
                  <h6 className="text-muted font-weight-normal">
                    {" "}
                    9.61% Since last month
                  </h6>
                </div>
                <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                  <i className="icon-lg mdi mdi-wallet-travel text-danger ml-auto"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 grid-margin">
          <div className="card">
            <div className="card-body">
              <h5>Purchase</h5>
              <div className="row">
                <div className="col-8 col-sm-12 col-xl-8 my-auto">
                  <div className="d-flex d-sm-block d-md-flex align-items-center">
                    <h2 className="mb-0">$2,039</h2>
                    <p className="text-danger ml-2 mb-0 font-weight-medium">
                      -2.1%{" "}
                    </p>
                  </div>
                  <h6 className="text-muted font-weight-normal">
                    2.27% Since last month
                  </h6>
                </div>
                <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                  <i className="icon-lg mdi mdi-monitor text-success ml-auto"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row pr-5">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Order Status</h4>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>
                        <div className="form-check form-check-muted m-0">
                          <label className="form-check-label">
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                          </label>
                        </div>
                      </th>
                      <th> Recipient Name </th>
                      <th> Order No </th>
                      <th> Product Cost </th>
                      <th> Item Name </th>
                      <th> Payment Mode </th>
                      <th> Order Date </th>
                      <th> Delivery Status </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="form-check form-check-muted m-0">
                          <label className="form-check-label">
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                          </label>
                        </div>
                      </td>
                      <td>
                        <span className="pl-2">Henry Klein</span>
                      </td>
                      <td> 02312 </td>
                      <td> $145 </td>
                      <td> Red Roses </td>
                      <td> Credit card </td>
                      <td> 04 Dec 2019 </td>
                      <td>
                        <div className="badge badge-outline-success">
                          Delivered
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-muted m-0">
                          <label className="form-check-label">
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                          </label>
                        </div>
                      </td>
                      <td>
                        <span className="pl-2">Estella Bryan</span>
                      </td>
                      <td> 02312 </td>
                      <td> $155 </td>
                      <td> Floral Arrangement </td>
                      <td> Cash on delivered </td>
                      <td> 04 Dec 2019 </td>
                      <td>
                        <div className="badge badge-outline-warning">
                          Pending
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-muted m-0">
                          <label className="form-check-label">
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                          </label>
                        </div>
                      </td>
                      <td>
                        <span className="pl-2">Lucy Abbott</span>
                      </td>
                      <td> 02312 </td>
                      <td> $125.00 </td>
                      <td> Wedding Decoration </td>
                      <td> Credit card </td>
                      <td> 04 Dec 2019 </td>
                      <td>
                        <div className="badge badge-outline-danger">
                          Rejected
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-muted m-0">
                          <label className="form-check-label">
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                          </label>
                        </div>
                      </td>
                      <td>
                        <span className="pl-2">Peter Gill</span>
                      </td>
                      <td> 02312 </td>
                      <td> $14,500 </td>
                      <td> Funeral Arrangement </td>
                      <td> Online Payment </td>
                      <td> 04 Dec 2019 </td>
                      <td>
                        <div className="badge badge-outline-success">
                          Delivered
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-muted m-0">
                          <label className="form-check-label">
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                          </label>
                        </div>
                      </td>
                      <td>
                        <span className="pl-2">Sallie Reyes</span>
                      </td>
                      <td> 02312 </td>
                      <td> $89.50 </td>
                      <td> Floral Bouquet </td>
                      <td> Credit card </td>
                      <td> 04 Dec 2019 </td>
                      <td>
                        <div className="badge badge-outline-success">
                          Delivered
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Link to="/newOrder">
        <div className="newOrderLink">
          <img src={newOrderSvg} alt="newOrderSvg" />
          <span className="newOrder">New Order</span>
        </div>
      </Link>
    </div>
  );
}

export default DashBoard;
