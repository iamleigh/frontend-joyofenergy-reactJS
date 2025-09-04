import React from "react";
import PropTypes from "prop-types";

const Button = ({ label }) => {
    return (
        <button
            className="
              h5
              inline-block
              shadow-2
              pl2
              pr2
              pt1
              pb1
              roundedmore
              border-grey
              bg-blue
              white
              bold
            "
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
};

export default Button;
