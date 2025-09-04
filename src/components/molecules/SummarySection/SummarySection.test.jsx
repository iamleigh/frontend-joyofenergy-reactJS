import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SummarySection } from "./SummarySection.jsx";

describe("SummarySection", () => {
    it("renders content correctly", () => {
        render(<SummarySection summary="⚡️ 1.4kW" subtitle="Power draw" />);

        const summaryElement = screen.getByText("⚡️ 1.4kW");
        const subtitleElement = screen.getByText("Power draw");

        expect(summaryElement).toBeInTheDocument();
        expect(subtitleElement).toBeInTheDocument();
    });
});
