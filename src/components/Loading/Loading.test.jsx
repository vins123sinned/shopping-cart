import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Loading } from "./Loading";

describe("Loading component", () => {
  it("Renders correct Loading", () => {
    render(<Loading />);

    expect(screen.getByTestId("spinner")).toBeInTheDocument();
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });
});
