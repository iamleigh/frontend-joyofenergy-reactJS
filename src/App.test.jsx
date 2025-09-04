import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { App } from "./App.jsx";

vi.mock("../utils/chart.js");

describe("App", () => {
    it("renders energy dashboard", async () => {
        render(<App />);
        const heading = await screen.findByRole("heading", { level: 1 });
        expect(heading).toHaveTextContent("Energy consumption");
    });
});
