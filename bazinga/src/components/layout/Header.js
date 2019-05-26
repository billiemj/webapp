import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Header = props => {
  return (
    <div className="mb-5">
      <Logo />
      <nav className="navbar navbar-expand-lg navbar-dark  ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" /> Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/media/add-media" className="nav-link">
                <i className="fas fa-plus" /> Add Media
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

Header.defaultProps = {
  branding: "Bazinga"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
