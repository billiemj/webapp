import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-secondary mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand ">
          {branding}
        </a>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="/">
              Home{" "}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/add-media">
              Add Media{" "}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "Bazinga"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
