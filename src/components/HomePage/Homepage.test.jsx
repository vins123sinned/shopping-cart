import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { HomePage } from "./HomePage";
import { vi } from "vitest";

vi.mock("../Categories/Categories.jsx");

describe("Homepage component", () => {
  it("Renders correct homepage", () => {
    render(<HomePage />);

    expect(screen.getByRole("heading").textContent).toMatch(/This is VInSION/i);
    expect(screen.getByRole("paragraph").textContent).toMatch(
      /Discover the Summer 2025 Collection./i,
    );
  });
});
