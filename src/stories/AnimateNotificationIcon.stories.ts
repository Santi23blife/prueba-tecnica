import AnimationNotification from "./AnimationNotificaction";
import { fn } from "@storybook/test";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/AnimateNotificationIcon",
  component: AnimationNotification,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  ArgTypes: {
    background: { control: "color" },
  },
  args: { onClick: fn() },
} as Meta<typeof AnimationNotification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    iconName: "notification",
    onClick: () => {},
  },
};
