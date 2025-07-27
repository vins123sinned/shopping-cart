import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";

describe("ErrorPage component", () => {
  it("Renders correct ErrorPage", () => {
    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>,
    );

    expect(screen.getByRole("link", { name: /VInSION/i })).toBeInTheDocument();
    expect(screen.getByText(/Page does not exist/i)).toBeInTheDocument();
    expect(
      screen.getByText(/The page you are trying to visit does not exist/i),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Home/i })).toBeInTheDocument();
  });
});
