import type { Meta, StoryObj } from "@storybook/react";
import "app/styles/index.scss";
import { LoginForm } from "features/AuthByUsername/ui/LoginForm/LoginForm";
import { StoreProvider } from "app/providers/StoreProvider";

const meta = {
  title: "features/LoginForm",
  component: LoginForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInput: Story = {
  args: {},

  decorators: [
    (Story) => (
      <StoreProvider>
        <div className="app_dark_theme">
          <Story />
        </div>
      </StoreProvider>
    ),
  ],
};
