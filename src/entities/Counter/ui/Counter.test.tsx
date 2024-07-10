import "@testing-library/jest-dom/extend-expect";
import { screen, waitFor } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Counter } from "./Counter";
import { userEvent } from "@storybook/test";

describe("Counter", () => {
  test("test render", () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    expect(screen.getByTestId("value-title")).toHaveTextContent("10");
  });

  test("test increment", async () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    userEvent.click(screen.getByTestId("increment-btn"));
    await waitFor(() => {
      expect(screen.getByTestId("value-title")).toHaveTextContent("11");
    });
  });

  test("test decrement", async () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    userEvent.click(screen.getByTestId("decrement-btn"));
    await waitFor(() => {
      expect(screen.getByTestId("value-title")).toHaveTextContent("9");
    });
  });
});
