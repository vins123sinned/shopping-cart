import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import * as ReactRouterDom from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { AddToCart } from "./AddToCart";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useOutletContext: actual.useOutletContext,
  };
});

describe("CddToCart component", () => {
  it("Renders correct AddToCart", () => {
    vi.spyOn(ReactRouterDom, "useOutletContext").mockReturnValue([
      vi.fn(),
      vi.fn(),
    ]);

    render(<AddToCart />);

    expect(
      screen.getByRole("button", { name: /Add to Cart/i }),
    ).toBeInTheDocument();
  });

  it("Add to Cart invokes setCart on click", async () => {
    const mockSetCart = vi.fn();
    vi.spyOn(ReactRouterDom, "useOutletContext").mockReturnValue([
      [],
      mockSetCart,
    ]);
    const user = userEvent.setup();

    render(<AddToCart />);

    const button = screen.getByRole("button", { name: /Add to Cart/i });

    expect(mockSetCart).toHaveBeenCalledTimes(0);

    await user.click(button);

    expect(mockSetCart).toHaveBeenCalledTimes(1);
  });
});
