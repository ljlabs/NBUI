import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Modal } from "./Modal";

describe("Modal", () => {
  it("renders when open", () => {
    render(<Modal open onClose={() => {}} title="Test Modal">Content</Modal>);
    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByText("Test Modal")).toBeInTheDocument();
  });

  it("does not render when closed", () => {
    render(<Modal open={false} onClose={() => {}}>Content</Modal>);
    expect(screen.queryByText("Content")).not.toBeInTheDocument();
  });

  it("calls onClose on backdrop click", () => {
    const onClose = vi.fn();
    render(<Modal open onClose={onClose}>Content</Modal>);
    fireEvent.click(screen.getByRole("dialog").parentElement!);
    expect(onClose).toHaveBeenCalled();
  });

  it("calls onClose on Escape", () => {
    const onClose = vi.fn();
    render(<Modal open onClose={onClose}>Content</Modal>);
    fireEvent.keyDown(screen.getByRole("dialog"), { key: "Escape" });
    expect(onClose).toHaveBeenCalled();
  });

  it("does not close on backdrop when closeOnBackdrop=false", () => {
    const onClose = vi.fn();
    render(<Modal open onClose={onClose} closeOnBackdrop={false}>Content</Modal>);
    fireEvent.click(screen.getByRole("dialog").parentElement!);
    expect(onClose).not.toHaveBeenCalled();
  });

  it("renders actions", () => {
    render(
      <Modal open onClose={() => {}} actions={<button>Save</button>}>
        Content
      </Modal>
    );
    expect(screen.getByText("Save")).toBeInTheDocument();
  });
});
