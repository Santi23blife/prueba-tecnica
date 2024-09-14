import { NotificationAddOutlined } from "@mui/icons-material";
import React from "react";

interface IconProps {
  iconName: "notification" | "user";
  sizes?: "small" | "medium" | "large";
}

const Icon: React.FC<IconProps> = ({ iconName, sizes }) => {
  const iconsMap = {
    notification: <NotificationAddOutlined />,
    user: <NotificationAddOutlined />,
  };
  return iconsMap[iconName];
};

export default Icon;
