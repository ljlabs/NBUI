import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { SearchBar } from "./SearchBar";

describe("SearchBar", () => {
  it("renders with placeholder", () => {
    render(<SearchBar placeholder="Search items..." />);
    expect(screen.getByPlaceholderText("Search items...")).toBeInTheDocument();
  });

  it("calls onSearch on Enter", () => {
    const onSearch = vi.fn();
    render(<SearchBar onSearch={onSearch} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.keyDown(input, { key: "Enter" });
    expect(onSearch).toHaveBeenCalledWith("test");
  });

  it("calls onChange on input", () => {
    const onChange = vi.fn();
    render(<SearchBar onChange={onChange} />);
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "hello" } });
    expect(onChange).toHaveBeenCalledWith("hello");
  });

  it("renders button when showButton and size=lg", () => {
    render(<SearchBar showButton size="lg" buttonLabel="Go" />);
    expect(screen.getByText("Go")).toBeInTheDocument();
  });

  it("does not render button when size is not lg", () => {
    render(<SearchBar showButton size="md" buttonLabel="Go" />);
    expect(screen.queryByText("Go")).not.toBeInTheDocument();
  });

  it("applies sm size classes", () => {
    const { container } = render(<SearchBar size="sm" />);
    const input = container.querySelector("input");
    expect(input).toHaveClass("h-10");
  });

  it("applies lg size classes", () => {
    const { container } = render(<SearchBar size="lg" />);
    const input = container.querySelector("input");
    expect(input).toHaveClass("h-16");
  });
});
