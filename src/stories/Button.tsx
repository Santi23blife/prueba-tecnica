import { Button } from "@mui/material";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  type?: "primary" | "secondary" | "tertiary" | "fourth";
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;

  color?:
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | "inherit";

  isFormSubmit?: boolean;
  styles?: React.CSSProperties;
}

/**
 * Primary UI component for user interaction
 */
export const ButtonMUI = ({
  size = "medium",
  label,
  onClick,
  color = "primary",
  isFormSubmit = false,
  styles = {},
}: ButtonProps) => {
  return (
    <Button
      type={isFormSubmit ? "submit" : "button"}
      variant="contained"
      color={color}
      size={size}
      onClick={onClick}
      sx={styles}
    >
      {label}
    </Button>
  );
};
