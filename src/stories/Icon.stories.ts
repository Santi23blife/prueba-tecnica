import { Meta, StoryObj } from "@storybook/react";
import Icon from "./Icon";
import { NotificationAddOutlined } from "@mui/icons-material";

const meta = {
  title: "Example/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    iconName: "notification",
  },
};
