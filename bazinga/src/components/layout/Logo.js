import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "./logo.png";

const Logo = props => {
  const { branding } = props;
  return (
    <div>
      <p className="text-left">
        <Link to="/" className="text-decoration-none text-secondary ">
          <img src={logo} alt={branding} />
        </Link>
      </p>
    </div>
  );
};

Logo.defaultProps = {
  branding: "Bazinga"
};

Logo.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Logo;
