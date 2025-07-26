import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CartLink } from "./CartLink";
import { MemoryRouter } from "react-router-dom";

const mockCart = [
  {
    category: "Placeholder",
    id: 123,
    imageLink: "abc",
    price: 123.45,
    quantity: 12,
    title: "Placeholder Product",
  },
  {
    category: "Candy Bars",
    id: 1981,
    imageLink: "acc",
    price: 1.2,
    quantity: 5,
    title: "Skor Toffee Bar",
  },
  {
    category: "Candy Bars",
    id: 97,
    imageLink: "blank",
    price: 1,
    quantity: 12,
    title: "Heath Toffee Bar",
  },
];

describe("CartLink component", () => {
  it("Renders correct CartLink", () => {
    render(
      <MemoryRouter>
        <CartLink cart={mockCart} />
      </MemoryRouter>,
    );

    expect(screen.getByRole("link", { name: /Cart/i })).toBeInTheDocument();
    expect(screen.getByText(29)).toBeInTheDocument();
  });
});
