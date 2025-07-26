import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { Cart } from "./Cart.jsx";
import * as ReactRouterDom from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { useState } from "react";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useOutletContext: actual.useOutletContext,
  };
});

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

const OutletWrapper = () => {
  const [cart, setCart] = useState(mockCart);

  return <ReactRouterDom.Outlet context={[cart, setCart]} />;
};

describe("Cart Component", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("Renders Correct Cart", async () => {
    vi.spyOn(ReactRouterDom, "useOutletContext").mockReturnValue([
      mockCart,
      vi.fn(),
    ]);

    render(
      <ReactRouterDom.MemoryRouter>
        <Cart />
      </ReactRouterDom.MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: /Your Cart/i }),
    ).toBeInTheDocument();

    const cartItems = screen.getByRole("region", { name: /Cart Items/i });

    expect(cartItems).toBeInTheDocument();
    expect(within(cartItems).getAllByRole("article")).toHaveLength(3);

    const orderSummary = screen.getByRole("region", { name: /Order Summary/i });

    expect(orderSummary).toBeInTheDocument();
    expect(within(orderSummary).getByText(/Subtotal/i)).toBeInTheDocument();
    expect(within(orderSummary).getByText(/Sales Tax/i)).toBeInTheDocument();
    expect(within(orderSummary).getByText(/Shipping Fee/i)).toBeInTheDocument();
    expect(within(orderSummary).getByText(/Order Total/i)).toBeInTheDocument();
    expect(
      within(orderSummary).getByRole("button", { name: /Checkout/i }),
    ).toBeInTheDocument();
  });

  it("Checkout button works correctly", async () => {
    const user = userEvent.setup();

    render(
      <ReactRouterDom.MemoryRouter>
        <ReactRouterDom.Routes>
          <ReactRouterDom.Route element={<OutletWrapper />}>
            <ReactRouterDom.Route path="*" element={<Cart />} />
          </ReactRouterDom.Route>
        </ReactRouterDom.Routes>
      </ReactRouterDom.MemoryRouter>,
    );

    const checkoutButton = screen.getByRole("button", { name: /Checkout/i });
    const cartItems = screen.getByRole("region", { name: /Cart Items/i });

    expect(checkoutButton).toBeInTheDocument();
    expect(within(cartItems).getAllByRole("article")).toHaveLength(3);

    await user.click(checkoutButton);

    expect(within(cartItems).queryAllByRole("article")).toHaveLength(0);
  });
});
