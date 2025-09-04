import React from "react";
import PropTypes from "prop-types";

const SummarySection = ({ summary, subtitle }) => (
    <>
        <h2 className="h2 greyBlue">{summary}</h2>
        <p className="darkgray mb2">{subtitle}</p>
    </>
);

SummarySection.propTypes = {
    summary: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};

export default SummarySection;
