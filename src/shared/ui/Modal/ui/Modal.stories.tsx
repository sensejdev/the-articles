import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import "app/styles/index.scss";
import { Modal } from "shared/ui/Modal";

const meta = {
  title: "shared/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Modal text",
    isOpen: true,
  },
  decorators: [
    (Story) => (
      <div className="app light">
        <Story />
      </div>
    ),
  ],
};
