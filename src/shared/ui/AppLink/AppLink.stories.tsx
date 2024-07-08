import type { Meta, StoryObj } from "@storybook/react";
import "app/styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

const meta = {
  title: "shared/AppLink",
  component: AppLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    to: "/",
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
    children: "Text",
  },

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

export const Secondary: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
    children: "Text",
  },
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
