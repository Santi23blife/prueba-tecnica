import { Meta, StoryObj } from "@storybook/react";
import ListCardsMUI from "./ListCardsMUI";
import { fn } from "@storybook/test";

const meta = {
  title: "Example/ListCardsMUI",
  component: ListCardsMUI,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
} as Meta<typeof ListCardsMUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const List: Story = {
  args: {
    maxHeight: 200,
  },
};
