import { fn } from "@storybook/test";
import MapEmbed from "./MapEmbed";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/MapEmbed",
  component: MapEmbed,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
} as Meta<typeof MapEmbed>;

export default meta;
type Store = StoryObj<typeof meta>;

export const MapEmbedField: Store = {
  args: {
    coords: [37, -122],
    styles: { width: "400px", height: "400px" },
  },
};
