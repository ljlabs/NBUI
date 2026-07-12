import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Pill } from "./Pill";

describe("Pill", () => {
  it("renders children", () => {
    render(<Pill>Filter</Pill>);
    expect(screen.getByText("Filter")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const onClick = vi.fn();
    render(<Pill onClick={onClick}>Filter</Pill>);
    fireEvent.click(screen.getByText("Filter"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("applies selected styles", () => {
    const { container } = render(<Pill selected>Filter</Pill>);
    expect(container.firstChild).toHaveClass("bg-[var(--nb-primary)]");
  });

  it("applies unselected styles", () => {
    const { container } = render(<Pill selected={false}>Filter</Pill>);
    expect(container.firstChild).toHaveClass("bg-[var(--nb-surface-container-lowest)]");
  });
});
