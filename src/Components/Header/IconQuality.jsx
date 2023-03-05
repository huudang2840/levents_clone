import React from "react";
import PropTypes from "prop-types";

IconQuality.propTypes = {
  img: PropTypes.string,
  quality: PropTypes.number,
};
IconQuality.defaultProps = {
  img: "/",
  quality: 1,
};

function IconQuality(props) {
  const { img, quality } = props;

  return (
    <div className="iq">
      <img className="iq__icon" src={img} style={{ width: "18px", height: "18px" }} alt="" />
      <div className="iq__quality">
        <p>{quality}</p>
      </div>
    </div>
  );
}

export default IconQuality;
