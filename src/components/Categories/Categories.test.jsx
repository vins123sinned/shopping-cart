import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Categories } from "./Categories";

describe("Categories component", () => {
  it("Renders correct Categories", () => {
    render(<Categories />);

    expect(
      screen.getByRole("heading", { name: /Shop By Category/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Shoes/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Jewelry/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /^Men's Clothing$/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /^Women's Clothing$/i }),
    ).toBeInTheDocument();
  });
});
