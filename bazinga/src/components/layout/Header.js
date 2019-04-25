import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  const { branding } = props;
  return (
    <div>
      <p className="text-left display-4">
        <a href="/" className="text-decoration-none text-secondary ">
          {branding}
        </a>
      </p>
      <nav className="navbar navbar-expand-sm navbar-dark bg-secondary mb-3 py-0">
        <div className="container">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" /> Home
              </Link>
            </li>
            <li className="nav-item">
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
