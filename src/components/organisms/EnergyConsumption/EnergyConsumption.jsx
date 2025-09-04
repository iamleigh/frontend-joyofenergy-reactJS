import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { renderChart } from "../../../utils/chart.js";
import { groupByDay, sortByTime } from "../../../utils/reading.js";
import Button from "../../atoms/Button/index.js";

const EnergyConsumption = ({ readings }) => {
    const containerId = "usageChart";
    useEffect(() => {
        renderChart(containerId, sortByTime(groupByDay(readings)).slice(-30));
    }, []);

    return (
        <>
            <h1 className="regular darkgray line-height-1 mb3">
                Energy consumption
            </h1>
            <section className="mb3">
                <Button label="Last 30 days" />
            </section>
            <section className="chartheight mb3">
                <canvas id={containerId} data-testid="usageChart" />
            </section>
        </>
    );
};

EnergyConsumption.propTypes = {
    readings: PropTypes.arrayOf(
        PropTypes.shape({
            time: PropTypes.string.isRequired,
            usage: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default EnergyConsumption;
