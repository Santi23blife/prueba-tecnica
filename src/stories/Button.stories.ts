import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ButtonMUI } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: ButtonMUI,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof ButtonMUI>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    color: "primary",
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    label: "Button",
  },
};

export const Tertiary: Story = {
  args: {
    color: "info",
    label: "Button",
  },
};

export const Disabled: Story = {
  args: {
    color: "inherit",
    label: "Button",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};
