import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { CardMUI } from "./CardMUI";

const meta = {
  title: "Example/CardMUI",
  component: CardMUI,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
} as Meta<typeof CardMUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalEvent: Story = {
  args: {
    title: "Card Title",
    content: "Card Content",
    colorContent: "gray"
  },
};

export const UrgentEvent: Story = {
  args: {
    title: "Urgent Event",
    content: "This is an urgent event",
    colorContent: "red",
    colorTitle: "red",
  },
};
