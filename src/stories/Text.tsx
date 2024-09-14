import { CardContent, Typography } from "@mui/material";
import React from "react";

export interface TextProps {
  text: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "small" | "medium" | "large" | "xlarge" | "2xlarge";
  color?: string;
  weight?: "bold" | "normal" | "medium";
}

export const Text: React.FC<TextProps> = ({
  text,
  variant = "h1",
  component = "h1",
  size = "medium",
  color = "black",
  weight = "normal",
}) => {
  const sizeMap = {
    small: 12,
    medium: 16,
    large: 24,
    xlarge: 32,
    "2xlarge": 48,
  };

  const weightMap = {
    bold: 700,
    medium: 500,
    normal: 400,
  };

  return (
    <Typography
      variant={variant}
      sx={{
        fontSize: sizeMap[size],
        color: color,
        fontWeight: weightMap[weight],
      }}
    >
      {text}
    </Typography>
  );
};
