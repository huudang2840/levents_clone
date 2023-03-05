import React from "react";
import "./Button.scss";
import PropTypes from "prop-types";

Button.propTypes = {
  btnText: PropTypes.string,
  customStyle: PropTypes.object,
};

function Button(props) {
  const { btnText, customStyle } = props;
  return (
    <button className="btn" style={customStyle}>
      {btnText}
    </button>
  );
}

export default Button;
