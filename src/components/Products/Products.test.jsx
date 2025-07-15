import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { Products } from "./Products";
import userEvent from "@testing-library/user-event";

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

    expect(screen.getByRole("heading", { name: /all/i })).toBeInTheDocument();
    expect(products).toHaveLength(mockProducts.length);

    for (let i = 0; i < mockProducts.length; i++) {
      const product = mockProducts[i];
      const productCard = products[i];

      expect(
        within(productCard).getByTestId("product-image"),
      ).toBeInTheDocument();
      expect(
        within(productCard).getByRole("heading", { name: product.title }),
      ).toBeInTheDocument();
      expect(within(productCard).getByText(/\S?\d+\.\d{2}/)).toBeInTheDocument();
    }
  });

  it("Makes 'Add to Cart' button visible on product hover", async () => {
    const user = userEvent.setup();

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProducts,
    });

    render(<Products category="all" />);

    const productCard = (await screen.findAllByRole("article"))[0];

    expect(within(productCard).queryByRole("button")).not.toBeInTheDocument();

    await user.hover(productCard);

    expect(within(productCard).getByRole("button")).toBeVisible();
  });
});
