import { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";
import { fn } from "@storybook/test";

const meta = {
  title: "Example/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
} as Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    text: "Hola, esto es solo un ejemplo (12px)",
    variant: "h1",
    component: "h1",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    text: "Hola, esto es solo un ejemplo (16px)",
    variant: "h1",
    component: "h1",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    text: "Hola, esto es solo un ejemplo (24px)",
    variant: "h1",
    component: "h1",
    size: "large",
  },
};
