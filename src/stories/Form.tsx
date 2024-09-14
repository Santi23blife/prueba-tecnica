import { TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { ButtonMUI } from "./Button";

export interface Field {
  name: string;
  type: "text" | "email" | "hours" | "date";
  message: string;
  label: string;
  value?: string | number;
}

export interface FormProps {
  handleSubmit: (args: any) => void;
  fields: Field[];
  submitText: string;
  formStyles?: React.CSSProperties;
  boxStyles?: React.CSSProperties;
  buttonActionStyles?: React.CSSProperties;
}

const Form: React.FC<FormProps> = ({
  fields,
  handleSubmit = () => {},
  submitText = "",
  formStyles = {},
  boxStyles = {},
  buttonActionStyles = {},
}) => {
  const validationObject: { [key: string]: yup.StringSchema } = {};
  const typeInput: {
    [key: string]: { valids: (message: string) => yup.StringSchema };
  } = {
    text: {
      valids: (message: string) => yup.string().required(message),
    },
    email: {
      valids: (message: string) =>
        yup.string().email(message).required(message),
    },
    hours: {
      valids: (message: string) =>
        yup.string().matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, message),
    },
    date: {
      valids: (message: string) =>
        yup.string().matches(/^(\d{4})-(\d{2})-(\d{2})$/, message),
    },
  };

  fields.forEach((field) => {
    const { type, message } = field;
    validationObject[field.name] = typeInput[type].valids(message);
  });

  const validationSchema = yup.object(validationObject);

  const initialValues: { [key: string]: string } = fields.reduce(
    (acc, field) => ({ ...acc, [field.name]: field.value || "" }),
    {}
  );

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
      formik.resetForm();
    },
  });

  return (
    <div style={boxStyles}>
      <form onSubmit={formik.handleSubmit} style={formStyles}>
        {fields.map((field) => (
          <TextField
            key={field.name}
            fullWidth
            id={field.name}
            name={field.name}
            label={field.label}
            type={field.type}
            value={formik.values[field.name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched[field.name] && Boolean(formik.errors[field.name])
            }
            helperText={formik.touched[field.name] && formik.errors[field.name]}
            style={{ marginBottom: "12px" }}
          />
        ))}
        <ButtonMUI
          isFormSubmit={true}
          label={submitText}
          size="large"
          styles={buttonActionStyles}
        />
      </form>
    </div>
  );
};

export default Form;
