import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { Product } from "./Product.jsx";
import { MemoryRouter } from "react-router-dom";
import { act } from "react";

vi.mock("../Quantity/Quantity.jsx");

const mockProduct = {
  id: 9,
  title: "Placeholder Super Ultra Pro Max HD 123GB MODEL 1x2w3ecasdn",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  price: 328.65,
  category: "jewelery",
  image: "https://example.blank",
};

describe("Product component", () => {
  beforeEach(() => {
    window.fetch = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("Renders correct Product", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProduct,
    });

    act(() => {
      render(
        <MemoryRouter>
          <Product />
        </MemoryRouter>,
      );
    });

    screen.debug();

    const productSection = await screen.findByTestId("product-section");

    expect(
      within(productSection).getByAltText("Product Image"),
    ).toBeInTheDocument();
    expect(within(productSection).getByText(/Jewelry/i)).toBeInTheDocument();
    expect(
      within(productSection).getByRole("heading", { name: mockProduct.title }),
    ).toBeInTheDocument();
    expect(
      within(productSection).getByText(new RegExp(mockProduct.price, "i")),
    ).toBeInTheDocument();
    expect(
      within(productSection).getByText(mockProduct.description),
    ).toBeInTheDocument();

    // Quantity component when finished
  });
});
