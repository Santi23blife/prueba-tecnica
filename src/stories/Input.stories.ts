import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Input from "./Input";

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
} as Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InputField: Story = {
  args: {
    label: "Input Label",
  },
};
