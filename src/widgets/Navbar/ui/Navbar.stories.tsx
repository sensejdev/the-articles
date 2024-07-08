import type { Meta, StoryObj } from "@storybook/react";
import "app/styles/index.scss";
import { Navbar } from "widgets/Navbar";
import { BrowserRouter } from "react-router-dom";

const meta = {
  title: "widget/Navbar",
  component: Navbar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  args: {},
} satisfies Meta<typeof Navbar>;

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
