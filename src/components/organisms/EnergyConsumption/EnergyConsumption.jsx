import React, { useEffect } from "react";
import { renderChart } from "../../../utils/chart.js";
import { groupByDay, sortByTime } from "../../../utils/reading.js";
import Button from "../../atoms/Button/index.js";

export const EnergyConsumption = ({ readings }) => {
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
            <section className="chartHeight mb3">
                <canvas id={containerId} />
            </section>
        </>
    );
};
