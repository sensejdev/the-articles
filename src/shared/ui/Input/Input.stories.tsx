import type { Meta, StoryObj } from "@storybook/react";
import "app/styles/index.scss";
import { Input } from "shared/ui/Input/Input";

const meta = {
  title: "shared/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInput: Story = {
  args: {
    placeholder: "Text",
  },

  decorators: [
    (Story) => (
      <div className="app_dark_theme">
        <Story />
      </div>
    ),
  ],
};
