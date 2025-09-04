

import React from "react";
import { render, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";

describe("Sidebar", () => {
  it("renders all summary sections", () => {
    expect.hasAssertions();
    render(<Sidebar />);

    expect(screen.getByText("⚡️ 1.4kW")).toBeInTheDocument();
    expect(screen.getByText("☀️️ 5.8kW")).toBeInTheDocument();
    expect(screen.getByText("🔌️ 4.4kW")).toBeInTheDocument();

    expect(screen.getByText("Power draw")).toBeInTheDocument();
    expect(screen.getByText("Solar power production")).toBeInTheDocument();
    expect(screen.getByText("Fed into grid")).toBeInTheDocument();
  });

  it("renders all device sections", () => {
    render(<Sidebar />);

    expect(screen.getByText("Your devices:")).toBeInTheDocument();
    expect(screen.getByText("Air conditioner")).toBeInTheDocument();
    expect(screen.getByText("Wi-Fi router")).toBeInTheDocument();
    expect(screen.getByText("Humidifer")).toBeInTheDocument();
    expect(screen.getByText("Smart TV")).toBeInTheDocument();
    expect(screen.getByText("Diffuser")).toBeInTheDocument();
    expect(screen.getByText("Refrigerator")).toBeInTheDocument();
  });
});
