import Input from "../stories/Input";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Filling field with text", () => {
  const inputProps = {
    value: "Santiago",
    label: "Name",
    errorText: "Name is required",
    errorValidation: false,
    onBlur: jest.fn(),
    onChange: jest.fn(),
  };
  const { getByLabelText } = render(
    <Input
      label={inputProps.label}
      value={inputProps.value}
      errorText={inputProps.errorText}
      errorValidation={inputProps.errorValidation}
      onBlur={inputProps.onBlur}
      onChange={inputProps.onChange}
    />
  );

  const labels = screen.queryAllByText(inputProps.label);
  expect(labels.length).toBeGreaterThan(0);
  const input = getByLabelText(inputProps.label) as HTMLInputElement;

  fireEvent.change(input, { target: { value: "Jesus Javier" } });

  expect(inputProps.onChange).toHaveBeenCalled();
});
