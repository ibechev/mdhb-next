import React from "react";
import PropTypes from "prop-types";

import style from "./StyleButton";

const Button = ({ className = "foo", children, ...props }) => {
  return (
    <button className={`btn ${className}`.trim()} {...props}>
      {children}
      <style jsx>{style}</style>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Button;
