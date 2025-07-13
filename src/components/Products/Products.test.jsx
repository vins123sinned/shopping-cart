import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Products } from "./Products";

const mockProducts = [
  {
    title: "Product 1",
    price: 1,
    image: "product1",
    description: "This is product 1",
    category: 1,
  },
  {
    title: "Product 2",
    price: 2,
    image: "product2",
    description: "Product 2 is where it's at!",
    category: 2,
  },
  {
    title: "Product 3",
    price: 3,
    image: "product3",
    description: "Product 3.",
    category: 1,
  },
  {
    title: "Product 4",
    price: 4,
    image: "product4",
    description: "I'm doing this project! Prod. 4",
    category: 1,
  },
];

describe("Products component", () => {
  beforeEach(() => {
    window.fetch = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("Renders all products correctly", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProducts,
    });

    render(<Products category="all" />);

    const products = await screen.findAllByRole("article");

    expect(screen.getByRole("heading", { name: "all" })).toBeInTheDocument();
    expect(products).toHaveLength(mockProducts.length);

    mockProducts.forEach((product) => {
      expect(
        screen.getByRole("heading", { name: product.title }),
      ).toBeInTheDocument();
      expect(screen.getByText(product.description)).toBeInTheDocument();
    });
  });
});
