import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "./Button";

describe("Button", () => {
  test("test render", () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
    screen.debug();
  });

  test("test clear theme", () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("clear");
    screen.debug();
  });
});
