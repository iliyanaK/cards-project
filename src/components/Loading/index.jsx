import React from "react";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = ({ type, timeout, height, width }) => (
  <Loader
    type={type}
    color="#00BFFF"
    height={height}
    width={width}
    timeout={timeout}
  />
);

Loading.propTypes = {
  type: PropTypes.oneOf([
    "Audio",
    "Ball-Triangle",
    "Bars",
    "Circles",
    "Grid",
    "Hearts",
    "Oval",
    "Puff",
    "Rings",
    "ThreeDots",
  ]),
  timeout: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number,
};

Loading.defaultProps = {
  type: "Oval",
  timeout: 100,
  height: 100,
  width: 100,
};

export default Loading;
