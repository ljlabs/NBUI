import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Icon } from "./Icon";

describe("Icon", () => {
  it("renders the icon name", () => {
    render(<Icon name="star" />);
    expect(screen.getByText("star")).toBeInTheDocument();
  });

  it("applies material-symbols-outlined class", () => {
    const { container } = render(<Icon name="star" />);
    expect(container.querySelector(".material-symbols-outlined")).toBeInTheDocument();
  });

  it("sets aria-hidden when no aria-label", () => {
    const { container } = render(<Icon name="star" />);
    const el = container.querySelector(".material-symbols-outlined");
    expect(el).toHaveAttribute("aria-hidden", "true");
  });

  it("does not set aria-hidden when aria-label is provided", () => {
    const { container } = render(<Icon name="star" aria-label="Star icon" />);
    const el = container.querySelector(".material-symbols-outlined");
    expect(el).not.toHaveAttribute("aria-hidden");
  });

  it("applies custom color", () => {
    const { container } = render(<Icon name="star" color="red" />);
    const el = container.querySelector(".material-symbols-outlined");
    expect(el?.getAttribute("style")).toContain("color: red");
  });

  it("applies sm size", () => {
    const { container } = render(<Icon name="star" size="sm" />);
    const el = container.querySelector(".material-symbols-outlined");
    expect(el).toHaveStyle({ fontSize: "18px" });
  });

  it("applies lg size", () => {
    const { container } = render(<Icon name="star" size="lg" />);
    const el = container.querySelector(".material-symbols-outlined");
    expect(el).toHaveStyle({ fontSize: "32px" });
  });

  it("applies numeric size", () => {
    const { container } = render(<Icon name="star" size={40} />);
    const el = container.querySelector(".material-symbols-outlined");
    expect(el).toHaveStyle({ fontSize: "40px" });
  });
});
