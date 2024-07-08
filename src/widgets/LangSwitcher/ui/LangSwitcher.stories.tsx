import type { Meta, StoryObj } from "@storybook/react";
import "app/styles/index.scss";
import { LangSwitcher } from "widgets/LangSwitcher";

const meta = {
  title: "widget/LangSwitcher",
  component: LangSwitcher,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  args: {},
} satisfies Meta<typeof LangSwitcher>;

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

export const Dark: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className="app dark">
        <Story />
      </div>
    ),
  ],
};
