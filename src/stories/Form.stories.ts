import { fn } from "@storybook/test";
import Form from "./Form";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    onClick: fn(),
  },
} as Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FormField: Story = {
  args: {
    handleSubmit: fn(),
    submitText: "Submit",
    fields: [
      {
        label: "Input name",
        type: "text",
        name: "name",
        message: "Name is required",
      },
      {
        label: "Input last name",
        type: "text",
        name: "last name",
        message: "Last name is required",
      },
    ],
  },
};
