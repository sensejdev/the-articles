import type { Meta, StoryObj } from "@storybook/react";
import "app/styles/index.scss";
import { PageError } from "widgets/PageError";
import { BrowserRouter } from "react-router-dom";

const meta = {
  title: "widget/PageError",
  component: PageError,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},

  decorators: [
    (Story) => (
      <BrowserRouter>
        <div className="app dark">
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div className="app dark">
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
};
