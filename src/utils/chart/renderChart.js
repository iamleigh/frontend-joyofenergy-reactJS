import { Chart } from "chart.js";
import { formatDateLabel } from "../date";

/**
 * Renders a bar chart inside a container using the provided readings.
 *
 * @param {string} containerId - DOM ID of the canvas element.
 * @param {Array<{time: string | number, value: number}>} readings - Data points.
 * @param {object} [options] - Optional override for default chart config.
 */
export const renderChart = (containerId, readings, options) => {
    const labels = readings.map(({ time }) => formatDateLabel(time));
    const values = readings.map(({ value }) => value);

    const data = {
        labels: labels,
        datasets: [
            {
                label: "kWh usage",
                data: values,
                fill: true,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
                borderWidth: 0.2,
                backgroundColor: "#5A8EDA",
                borderRadius: 10,
            },
        ],
    };

    const chart = new Chart(containerId, {
        type: "bar",
        data: data,
        options: {
            scales: {
                y: {
                    grid: {
                        display: false,
                    },
                },
                x: {
                    grid: {
                        display: false,
                    },
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
            },
            maintainAspectRatio: true,
            ...options,
        },
    });

    return chart;
};
