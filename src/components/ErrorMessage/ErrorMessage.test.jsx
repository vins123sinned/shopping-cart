import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ErrorMessage } from "./ErrorMessage";

describe("ErrorMessage component", () => {
  it("Renders correct ErrorMessage", () => {
    render(<ErrorMessage message={"HTTP error: Status 404"} />);

    expect(screen.getByText(/Encountered an error/i)).toBeInTheDocument();
    expect(screen.getByText("HTTP error: Status 404")).toBeInTheDocument();
  });
});
