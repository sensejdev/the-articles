import type { Meta, StoryObj } from "@storybook/react";
import "app/styles/index.scss";
import { Main } from "pages/Main";
import { NotFound } from "pages/NotFound";

const meta = {
  title: "page/NotFound",
  component: NotFound,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof NotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},

  decorators: [
    (Story) => (
      <div className="app light">
        <Story />
      </div>
    ),
  ],
};

export const Secondary: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className="app dark">
        <Story />
      </div>
    ),
  ],
};
