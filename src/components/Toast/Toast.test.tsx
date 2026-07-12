import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { Toast } from "./Toast";

describe("Toast", () => {
  it("renders when open", () => {
    render(<Toast open onClose={() => {}}>Saved!</Toast>);
    expect(screen.getByText("Saved!")).toBeInTheDocument();
  });

  it("does not render when closed", () => {
    render(<Toast open={false} onClose={() => {}}>Saved!</Toast>);
    expect(screen.queryByText("Saved!")).not.toBeInTheDocument();
  });

  it("calls onClose on dismiss click", () => {
    const onClose = vi.fn();
    render(<Toast open onClose={onClose}>Saved!</Toast>);
    fireEvent.click(screen.getByLabelText("Dismiss"));
    expect(onClose).toHaveBeenCalled();
  });

  it("auto-dismisses after timeout", () => {
    vi.useFakeTimers();
    const onClose = vi.fn();
    render(<Toast open onClose={onClose} autoDismiss={3000}>Saved!</Toast>);
    act(() => {
      vi.advanceTimersByTime(3000);
    });
    expect(onClose).toHaveBeenCalled();
    vi.useRealTimers();
  });

  it("shows success variant icon", () => {
    render(<Toast open onClose={() => {}} variant="success">Done!</Toast>);
    expect(screen.getByText("check_circle")).toBeInTheDocument();
  });

  it("shows error variant icon", () => {
    render(<Toast open onClose={() => {}} variant="error">Error!</Toast>);
    expect(screen.getByText("error")).toBeInTheDocument();
  });
});
