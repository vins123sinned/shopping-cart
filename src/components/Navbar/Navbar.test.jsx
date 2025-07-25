import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { Navbar } from "./Navbar";

vi.mock("../CartLink/CartLink", () => ({
  CartLink: () => <a href="#">Shopping Cart</a>,
}));

const mockMatchMedia = (matches) => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches,
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  });
};

describe("Navigation component", () => {
  beforeEach(() => {
    mockMatchMedia(true);
  });

  it("Renders correct navbar on desktop", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("link", { name: /^VInSION$/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /^Products$/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /^Men's Clothing$/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /^Women's Clothing$/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /^Jewelry$/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /^Electronics$/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Cart/i })).toBeInTheDocument();
  });

  it("Renders correct navbar on mobile", async () => {
    const user = userEvent.setup();
    mockMatchMedia(false);

    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    const categoriesMenu = screen.getByRole("button", {
      name: /Categories Menu/i,
    });
    let links = screen.getAllByRole("link");

    expect(categoriesMenu).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /^VInSION$/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Cart/i })).toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /^Women's Clothing$/i }),
    ).not.toBeInTheDocument();

    await user.click(categoriesMenu);

    links = screen.getAllByRole("link");
    expect(links.length).toBe(7);

    expect(
      screen.getByRole("link", { name: /^Men's Clothing$/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /^Women's Clothing$/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /^Jewelry$/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /^Electronics$/i }),
    ).toBeInTheDocument();
  });
});
