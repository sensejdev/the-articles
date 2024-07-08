import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button, ThemeButton } from "./Button";
import "app/styles/index.scss";

const meta = {
  title: "shared/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Text",
  },
  decorators: [
    (Story) => (
      <div className="app light">
        <Story />
      </div>
    ),
  ],
};

export const Clear: Story = {
  args: {
    children: "Text",
    theme: ThemeButton.CLEAR,
  },
  decorators: [
    (Story) => (
      <div className="app light">
        <Story />
      </div>
    ),
  ],
};

export const Outline: Story = {
  args: {
    children: "Text",
    theme: ThemeButton.OUTLINE,
  },
  decorators: [
    (Story) => (
      <div className="app light">
        <Story />
      </div>
    ),
  ],
};
