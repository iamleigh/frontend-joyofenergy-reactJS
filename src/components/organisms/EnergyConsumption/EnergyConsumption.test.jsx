import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import EnergyConsumption from "./EnergyConsumption.jsx";

describe("EnergyConsumption", () => {
    const mockReadings = [
        { time: "2025-09-01T00:00:00Z", usage: 12 },
        { time: "2025-09-02T00:00:00Z", usage: 15 },
        { time: "2025-09-03T00:00:00Z", usage: 14 },
    ];

    it("renders the heading, button, and canvas", () => {
        render(<EnergyConsumption readings={mockReadings} />);

        expect(
            screen.getByRole("heading", { name: /energy consumption/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: /last 30 days/i })
        ).toBeInTheDocument();
        expect(screen.getByTestId("usageChart")).toBeInTheDocument();
    });
});
