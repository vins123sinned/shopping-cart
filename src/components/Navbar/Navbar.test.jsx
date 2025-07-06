import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";
import { MemoryRouter } from "react-router-dom";

describe("Navigation component", () => {
  it("Renders correct navbar", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("link", { name: /^VInSION$/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /^Men's Clothing$/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /^Women's Clothing$/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /^Jewelry$/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /^Electronics$/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Cart/i })).toBeInTheDocument();
  });
});
