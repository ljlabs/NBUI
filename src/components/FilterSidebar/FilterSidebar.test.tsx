import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { FilterSidebar } from "./FilterSidebar";
import type { FilterGroup } from "./FilterSidebar.types";

const pillGroup: FilterGroup = {
  title: "Color",
  mode: "pill",
  options: [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
  ],
};

const checkboxGroup: FilterGroup = {
  title: "Size",
  mode: "checkbox",
  options: [
    { label: "Small", value: "sm" },
    { label: "Large", value: "lg" },
  ],
};

const radioGroup: FilterGroup = {
  title: "Sort",
  mode: "radio",
  options: [
    { label: "Newest", value: "newest" },
    { label: "Oldest", value: "oldest" },
  ],
};

describe("FilterSidebar", () => {
  it("renders title", () => {
    render(
      <FilterSidebar
        groups={[]}
        selected={{}}
        onChange={() => {}}
        onClearAll={() => {}}
        title="My Filters"
      />,
    );
    expect(screen.getByText("My Filters")).toBeInTheDocument();
  });

  it("renders group titles", () => {
    render(
      <FilterSidebar
        groups={[pillGroup, checkboxGroup]}
        selected={{}}
        onChange={() => {}}
        onClearAll={() => {}}
      />,
    );
    expect(screen.getByText("Color")).toBeInTheDocument();
    expect(screen.getByText("Size")).toBeInTheDocument();
  });

  it("renders pill options", () => {
    render(
      <FilterSidebar
        groups={[pillGroup]}
        selected={{}}
        onChange={() => {}}
        onClearAll={() => {}}
      />,
    );
    expect(screen.getByText("Red")).toBeInTheDocument();
    expect(screen.getByText("Blue")).toBeInTheDocument();
  });

  it("calls onChange when pill clicked", () => {
    const onChange = vi.fn();
    render(
      <FilterSidebar
        groups={[pillGroup]}
        selected={{}}
        onChange={onChange}
        onClearAll={() => {}}
      />,
    );
    fireEvent.click(screen.getByText("Red"));
    expect(onChange).toHaveBeenCalledWith("Color", "red");
  });

  it("calls onChange when checkbox toggled", () => {
    const onChange = vi.fn();
    render(
      <FilterSidebar
        groups={[checkboxGroup]}
        selected={{}}
        onChange={onChange}
        onClearAll={() => {}}
      />,
    );
    fireEvent.click(screen.getByText("Small"));
    expect(onChange).toHaveBeenCalledWith("Size", "sm");
  });

  it("calls onChange when radio button clicked", () => {
    const onChange = vi.fn();
    render(
      <FilterSidebar
        groups={[radioGroup]}
        selected={{}}
        onChange={onChange}
        onClearAll={() => {}}
      />,
    );
    fireEvent.click(screen.getByText("Newest"));
    expect(onChange).toHaveBeenCalledWith("Sort", "newest");
  });

  it("calls onClearAll when clear button clicked", () => {
    const onClearAll = vi.fn();
    render(
      <FilterSidebar
        groups={[]}
        selected={{}}
        onChange={() => {}}
        onClearAll={onClearAll}
      />,
    );
    fireEvent.click(screen.getByText("Clear All"));
    expect(onClearAll).toHaveBeenCalled();
  });

  it("renders children", () => {
    render(
      <FilterSidebar
        groups={[]}
        selected={{}}
        onChange={() => {}}
        onClearAll={() => {}}
      >
        <span data-testid="extra">Extra content</span>
      </FilterSidebar>,
    );
    expect(screen.getByTestId("extra")).toBeInTheDocument();
  });
});
