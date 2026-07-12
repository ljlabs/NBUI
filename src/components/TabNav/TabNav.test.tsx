import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { TabNav } from "./TabNav";

const tabs = [
  { key: "overview", label: "Overview" },
  { key: "code", label: "Code" },
  { key: "settings", label: "Settings" },
];

describe("TabNav", () => {
  it("renders all tabs", () => {
    render(<TabNav tabs={tabs} activeKey="overview" onChange={() => {}} />);
    expect(screen.getByText("Overview")).toBeInTheDocument();
    expect(screen.getByText("Code")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
  });

  it("calls onChange when tab clicked", () => {
    const onChange = vi.fn();
    render(<TabNav tabs={tabs} activeKey="overview" onChange={onChange} />);
    fireEvent.click(screen.getByText("Code"));
    expect(onChange).toHaveBeenCalledWith("code");
  });

  it("sets aria-selected on active tab", () => {
    render(<TabNav tabs={tabs} activeKey="overview" onChange={() => {}} />);
    expect(screen.getByText("Overview")).toHaveAttribute("aria-selected", "true");
    expect(screen.getByText("Code")).toHaveAttribute("aria-selected", "false");
  });

  it("applies fullWidth", () => {
    const { container } = render(
      <TabNav tabs={tabs} activeKey="overview" onChange={() => {}} fullWidth />,
    );
    expect(container.firstChild).toHaveClass("flex");
  });
});
