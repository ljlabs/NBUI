import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Card, CardHeader, CardBody, CardActions } from "./Card";

describe("Card", () => {
  it("renders children", () => {
    render(<Card>Content</Card>);
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("applies elevated variant classes", () => {
    const { container } = render(<Card variant="elevated">Content</Card>);
    expect(container.firstChild).toHaveClass("bg-white");
  });

  it("applies filled variant classes", () => {
    const { container } = render(<Card variant="filled">Content</Card>);
    expect(container.firstChild).toHaveClass("bg-[var(--nb-surface-container)]");
  });

  it("calls onClick when interactive", () => {
    const onClick = vi.fn();
    render(<Card onClick={onClick}>Content</Card>);
    fireEvent.click(screen.getByText("Content"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("has role=button when onClick is provided", () => {
    render(<Card onClick={() => {}}>Content</Card>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});

describe("CardHeader", () => {
  it("renders title", () => {
    render(<CardHeader title="My Title" />);
    expect(screen.getByText("My Title")).toBeInTheDocument();
  });

  it("renders subtitle", () => {
    render(<CardHeader title="My Title" subtitle="Subtitle" />);
    expect(screen.getByText("Subtitle")).toBeInTheDocument();
  });

  it("renders action", () => {
    render(<CardHeader title="Title" action={<span data-testid="action">Action</span>} />);
    expect(screen.getByTestId("action")).toBeInTheDocument();
  });
});

describe("CardBody", () => {
  it("renders children", () => {
    render(<CardBody>Body content</CardBody>);
    expect(screen.getByText("Body content")).toBeInTheDocument();
  });
});

describe("CardActions", () => {
  it("renders children", () => {
    render(<CardActions><button>Save</button></CardActions>);
    expect(screen.getByText("Save")).toBeInTheDocument();
  });

  it("applies right alignment", () => {
    const { container } = render(<CardActions align="right"><button>Save</button></CardActions>);
    expect(container.firstChild).toHaveClass("justify-end");
  });
});
