import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Product } from "./Product.jsx";

const mockProduct = {
  id: 9,
  title: "Placeholder Super Ultra Pro Max HD 123GB MODEL 1x2w3ecasdn",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  price: 328.65,
  category: "Placeholders",
  image: "https://example.blank",
};

describe("Product component", () => {
  beforeEach(() => {
    window.fetch = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("Renders correct Product", () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProduct,
    });

    render(<Product />);

    // Find by or await

    expect(screen.getByAltText("product image")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: mockProduct.category }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: mockProduct.title }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(mockProduct.price, "i")),
    ).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();

    // Quantity component when finished
  });
});
