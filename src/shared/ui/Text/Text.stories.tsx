import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextTheme } from "shared/ui/Text/Text";
import "app/styles/index.scss";

const meta = {
  title: "shared/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TitleText: Story = {
  args: {
    title: "Title",
    text: "Text",
  },

  decorators: [
    (Story) => (
      <div className="app_light_theme">
        <Story />
      </div>
    ),
  ],
};

export const OnlyTitle: Story = {
  args: {
    title: "Title",
  },

  decorators: [
    (Story) => (
      <div className="app_dark_theme">
        <Story />
      </div>
    ),
  ],
};

export const OnlyText: Story = {
  args: {
    text: "Text",
  },

  decorators: [
    (Story) => (
      <div className="app_dark_theme">
        <Story />
      </div>
    ),
  ],
};

export const Error: Story = {
  args: {
    title: "Title",
    text: "Text",
    theme: TextTheme.ERROR,
  },

  decorators: [
    (Story) => (
      <div className="app_dark_theme">
        <Story />
      </div>
    ),
  ],
};
