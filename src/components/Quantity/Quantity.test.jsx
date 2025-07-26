import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import * as ReactRouterDom from "react-router-dom";
import { useState } from "react";
import userEvent from "@testing-library/user-event";
import { Quantity } from "./Quantity";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useOutletContext: actual.useOutletContext,
  };
});

const OutletWrapper = ({ context }) => {
  return <ReactRouterDom.Outlet context={context} />;
};

const QuantityWrapper = () => {
  const [quantity, setQuantity] = useState("1");

  return <Quantity quantity={quantity} setQuantity={setQuantity} />;
};

const CartWrapper = () => {
  const [cart, setCart] = useState([
    {
      category: "Placeholder",
      id: 123,
      imageLink: "placeholder-image-link",
      price: 101.23,
      quantity: 1,
      title: "Product 1",
    },
  ]);

  return (
    <ReactRouterDom.MemoryRouter>
      <ReactRouterDom.Routes>
        <ReactRouterDom.Route
          element={<OutletWrapper context={[cart, setCart]} />}
        >
          <ReactRouterDom.Route
            path="*"
            element={
              <Quantity
                quantity={cart[0].quantity}
                id={cart[0].id}
                type="cart"
              />
            }
          />
        </ReactRouterDom.Route>
      </ReactRouterDom.Routes>
    </ReactRouterDom.MemoryRouter>
  );
};

describe("Quantity component", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("Renders correct Quantity", () => {
    vi.spyOn(ReactRouterDom, "useOutletContext").mockReturnValue([
      vi.fn(),
      vi.fn(),
    ]);

    render(<QuantityWrapper />);

    const buttons = screen.getAllByRole("button");
    const input = screen.getByRole("textbox");

    expect(buttons.length).toBe(2);
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("1");
  });

  it("Allows user to type in quantity", async () => {
    vi.spyOn(ReactRouterDom, "useOutletContext").mockReturnValue([
      vi.fn(),
      vi.fn(),
    ]);

    const user = userEvent.setup();

    render(<QuantityWrapper />);

    const input = screen.getByRole("textbox");

    expect(input).toHaveValue("1");
    await user.type(input, "invalid!");
    expect(input).toHaveValue("1");
    await user.type(input, "23");
    expect(input).toHaveValue("12");
    await user.type(input, "{backspace}");
    expect(input).toHaveValue("1");
    await user.type(input, "{backspace}");
    expect(input).toHaveValue("0");
  });

  it("Increment and decrement on button click", async () => {
    vi.spyOn(ReactRouterDom, "useOutletContext").mockReturnValue([
      vi.fn(),
      vi.fn(),
    ]);

    const user = userEvent.setup();

    render(<QuantityWrapper />);

    const increaseButton = screen.getByRole("button", { name: /increase/i });
    const decreaseButton = screen.getByRole("button", { name: /decrease/i });
    const input = screen.getByRole("textbox");

    expect(increaseButton).toBeInTheDocument();
    expect(decreaseButton).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("1");

    await user.click(decreaseButton);
    expect(input).toHaveValue("0");
    await user.click(decreaseButton);
    expect(input).toHaveValue("0");
    await user.click(increaseButton);
    expect(input).toHaveValue("1");
    await user.clear(input);
    expect(input).toHaveValue("0");
    await user.type(input, "99");
    await user.click(increaseButton);
    expect(input).toHaveValue("100");
    await user.click(increaseButton);
    expect(input).toHaveValue("100");
  });

  it("Quantity works with cart state", async () => {
    const user = userEvent.setup();

    render(<CartWrapper />);

    const input = screen.getByRole("textbox");

    expect(input).toHaveValue("1");
    await user.type(input, "invalid!");
    expect(input).toHaveValue("1");
    await user.type(input, "23");
    expect(input).toHaveValue("12");
    await user.type(input, "{backspace}");
    expect(input).toHaveValue("1");
    await user.type(input, "{backspace}");
    expect(input).toHaveValue("0");
  });
});
