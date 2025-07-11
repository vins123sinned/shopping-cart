import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { Footer } from "./Footer";

vi.mock("../Attribution/Attribution.jsx");

describe("Footer component", () => {
  it("Renders correct Footer", () => {
    render(<Footer />);

    expect(screen.getByRole("heading", { name: /VInSION/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /An exploration of form, fabric, and future./i })).toBeInTheDocument();
    expect(screen.getByText(/VInSION is where vision becomes form/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Image Attribution/i })).toBeInTheDocument();
    expect(screen.getByText(/© 2025 VInSION. All rights reserved./i)).toBeInTheDocument();
  });
});
