import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { IconButton } from "./IconButton";

describe("IconButton", () => {
  it("renders the icon", () => {
    render(<IconButton icon="star" aria-label="Star" />);
    expect(screen.getByText("star")).toBeInTheDocument();
  });

  it("requires aria-label", () => {
    render(<IconButton icon="star" aria-label="Star icon" />);
    expect(screen.getByLabelText("Star icon")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const onClick = vi.fn();
    render(<IconButton icon="star" aria-label="Star" onClick={onClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("applies sm size", () => {
    const { container } = render(<IconButton icon="star" aria-label="Star" size="sm" />);
    expect(container.firstChild).toHaveClass("p-2");
  });

  it("applies md size", () => {
    const { container } = render(<IconButton icon="star" aria-label="Star" size="md" />);
    expect(container.firstChild).toHaveClass("p-3");
  });

  it("applies lg size", () => {
    const { container } = render(<IconButton icon="star" aria-label="Star" size="lg" />);
    expect(container.firstChild).toHaveClass("p-4");
  });
});
