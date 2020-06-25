import React from "react";
import FtdLogo from "static/images/ftd.svg";
import FaceImg from "static/images/face2.jpg";

function VerticalMenu() {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
        <a className="sidebar-brand brand-logo" href="/">
          <img src={FtdLogo} alt="ftd logo" />
        </a>
        <a className="sidebar-brand brand-logo-mini" href="/">
          <img src={FtdLogo} alt="ftd logo" />
        </a>
      </div>
      <ul className="nav">
        <li className="nav-item profile">
          <div className="profile-desc">
            <div className="profile-pic">
              <div className="count-indicator">
                <img
                  className="img-xs rounded-circle "
                  src={FaceImg}
                  alt="FaceImg"
                />
                <span className="count bg-success"></span>
              </div>
              <div className="profile-name display-mobile">
                <h5 className="mb-0 font-weight-normal">Henry Klein</h5>
                <span>Florist Member</span>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item menu-items mt-5">
          <a className="nav-link" href="/">
            <span className="menu-icon">
              <i className="mdi mdi-home"></i>
            </span>
            <span className="menu-title display-mobile">Dashboard</span>
          </a>
        </li>
        <li className="nav-item menu-items">
          <a className="nav-link" href="/">
            <span className="menu-icon">
              <i className="mdi mdi-cube-outline"></i>
            </span>
            <span className="menu-title display-mobile">Orders</span>
          </a>
        </li>
        <li className="nav-item menu-items">
          <a className="nav-link" href="/">
            <span className="menu-icon">
              <i className="mdi mdi-account-multiple"></i>
            </span>
            <span className="menu-title display-mobile">Florists</span>
          </a>
        </li>
        <li className="nav-item menu-items">
          <a className="nav-link" href="/">
            <span className="menu-icon">
              <i className="mdi mdi-email"></i>
            </span>
            <span className="menu-title display-mobile">Messages</span>
          </a>
        </li>
        <li className="nav-item menu-items">
          <a className="nav-link" href="/">
            <span className="menu-icon">
              <i className="mdi mdi-bell"></i>
            </span>
            <span className="menu-title display-mobile">Notifications</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default VerticalMenu;
