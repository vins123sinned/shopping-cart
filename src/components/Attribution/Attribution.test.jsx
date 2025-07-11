import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Attribution } from "./Attribution";

describe("Attribution component", () => {
  it("Renders correct Attribution", () => {
    render(<Attribution photo="Test Photo" name="Test Name" link="/test" />);

    const link = screen.getByRole("link", { name: "Test Name" });

    expect(screen.getByRole("listitem").textContent).toMatch(/Photo by/i);
    expect(screen.getByText("Test Name")).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/test");
  });
});
