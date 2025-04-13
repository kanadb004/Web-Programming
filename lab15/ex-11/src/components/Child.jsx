import React from "react";
import PropTypes from "prop-types";

const Child = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

Child.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Child;
