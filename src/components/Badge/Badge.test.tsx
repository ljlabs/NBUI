import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders children", () => {
    render(<Badge>v2.0</Badge>);
    expect(screen.getByText("v2.0")).toBeInTheDocument();
  });

  it("renders dot when dot prop is true", () => {
    const { container } = render(<Badge dot />);
    const dot = container.querySelector(".bg-current");
    expect(dot).toBeInTheDocument();
  });

  it("applies sm size classes", () => {
    const { container } = render(<Badge size="sm">test</Badge>);
    expect(container.firstChild).toHaveClass("text-xs");
  });

  it("applies md size classes", () => {
    const { container } = render(<Badge size="md">test</Badge>);
    expect(container.firstChild).toHaveClass("text-sm");
  });

  it("applies filled variant color", () => {
    const { container } = render(<Badge variant="filled" color="primary">test</Badge>);
    expect(container.firstChild).toHaveClass("bg-[var(--nb-primary)]");
  });

  it("applies outlined variant", () => {
    const { container } = render(<Badge variant="outlined" color="primary">test</Badge>);
    expect(container.firstChild).toHaveClass("bg-transparent");
  });

  it("applies soft variant", () => {
    const { container } = render(<Badge variant="soft" color="tertiary">test</Badge>);
    expect(container.firstChild).toHaveClass("bg-[var(--nb-tertiary-container)]");
  });

  it("merges className", () => {
    const { container } = render(<Badge className="custom-class">test</Badge>);
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
