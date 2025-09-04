import React from "react";
import { render, screen } from "@testing-library/react";
import DeviceSection from "./DeviceSection";

describe("DeviceSection", () => {
  it("renders content correctly", () => {
    render(<DeviceSection title="Air conditioner" usage="0.3093kW" />);

    expect(screen.getByText("Air conditioner")).toBeInTheDocument();
    expect(screen.getByText("0.3093kW")).toBeInTheDocument();
  });
});
