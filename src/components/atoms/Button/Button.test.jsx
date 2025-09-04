import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Button from "./Button";

describe("Button", () => {
    it("renders the button with the correct label", () => {
        render(<Button label="Click Me" />);
        expect(screen.getByRole("button")).toHaveTextContent("Click Me");
    });
});
