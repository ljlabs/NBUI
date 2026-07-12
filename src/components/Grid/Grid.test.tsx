import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Grid } from "./Grid";

describe("Grid", () => {
  it("renders children", () => {
    render(
      <Grid>
        <div>Item 1</div>
        <div>Item 2</div>
      </Grid>,
    );
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("applies grid class", () => {
    const { container } = render(
      <Grid>
        <div>Item</div>
      </Grid>,
    );
    expect(container.firstChild).toHaveClass("grid");
  });

  it("applies gap sm", () => {
    const { container } = render(
      <Grid gap="sm">
        <div>Item</div>
      </Grid>,
    );
    expect(container.firstChild).toHaveClass("gap-2");
  });

  it("applies gap lg", () => {
    const { container } = render(
      <Grid gap="lg">
        <div>Item</div>
      </Grid>,
    );
    expect(container.firstChild).toHaveClass("gap-6");
  });
});
