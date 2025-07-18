import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Quantity } from "./Quantity";

describe("Quantity component", () => {
  it("Renders correct Quantity", () => {
    render(<Quantity />);

    const buttons = screen.getAllByRole("button");
    const input = screen.getByRole("textbox");

    expect(buttons.length).toBe(2);
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("1");
  });

  it("Allows user to type in quantity", async () => {
    const user = userEvent.setup();

    render(<Quantity />);

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
    const user = userEvent.setup();

    render(<Quantity />);

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
});
