import { TextField } from "@mui/material";

type InputProps = {
  label: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  errorValidation: boolean;
  errorText: string;
};

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  onBlur,
  errorValidation,
  errorText,
}) => {
  return (
    <TextField
      fullWidth
      label={label}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={errorValidation}
      helperText={errorText}
    />
  );
};

export default Input;
