import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders children text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });

  it("calls onClick when clicked", () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const onClick = vi.fn();
    render(<Button disabled onClick={onClick}>Click</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).not.toHaveBeenCalled();
  });

  it("is disabled when loading", () => {
    const onClick = vi.fn();
    render(<Button loading onClick={onClick}>Click</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).not.toHaveBeenCalled();
  });

  it("shows loading spinner when loading", () => {
    const { container } = render(<Button loading>Click</Button>);
    expect(container.querySelector(".animate-spin")).toBeInTheDocument();
  });

  it("applies primary variant classes", () => {
    render(<Button variant="primary">Click</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-[var(--nb-primary)]");
  });

  it("applies secondary variant classes", () => {
    render(<Button variant="secondary">Click</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-white");
  });

  it("applies ghost variant classes", () => {
    render(<Button variant="ghost">Click</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-transparent");
  });

  it("applies danger variant classes", () => {
    render(<Button variant="danger">Click</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-[var(--nb-error)]");
  });

  it("applies fullWidth", () => {
    render(<Button fullWidth>Click</Button>);
    expect(screen.getByRole("button")).toHaveClass("w-full");
  });

  it("renders startIcon", () => {
    render(<Button startIcon={<span data-testid="icon">★</span>}>Click</Button>);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("renders endIcon", () => {
    render(<Button endIcon={<span data-testid="icon">→</span>}>Click</Button>);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("is focusable via keyboard", () => {
    render(<Button>Click</Button>);
    const btn = screen.getByRole("button");
    btn.focus();
    expect(btn).toHaveFocus();
  });
});
