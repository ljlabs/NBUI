import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { HeroSection } from "./HeroSection";

describe("HeroSection", () => {
  it("renders headline", () => {
    render(<HeroSection headline="Welcome" />);
    expect(screen.getByText("Welcome")).toBeInTheDocument();
  });

  it("renders description", () => {
    render(<HeroSection headline="Welcome" description="Build something great" />);
    expect(screen.getByText("Build something great")).toBeInTheDocument();
  });

  it("renders label as badge", () => {
    render(<HeroSection headline="Welcome" label="NEW" />);
    expect(screen.getByText("NEW")).toBeInTheDocument();
  });

  it("renders primary action", () => {
    render(<HeroSection headline="Welcome" primaryAction={<button>Get Started</button>} />);
    expect(screen.getByText("Get Started")).toBeInTheDocument();
  });

  it("renders media slot", () => {
    render(<HeroSection headline="Welcome" media={<div data-testid="media">Image</div>} />);
    expect(screen.getByTestId("media")).toBeInTheDocument();
  });
});
