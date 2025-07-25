import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import { HomePage } from "./HomePage";

vi.mock("../Categories/Categories.jsx");

describe("Homepage component", () => {
  it("Renders correct homepage", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading").textContent).toMatch(/This is VInSION/i);
    expect(screen.getByRole("paragraph").textContent).toMatch(
      /Discover the Summer 2025 Collection./i,
    );
  });
});
