import React from "react";

import { useField } from "formik";

import { InputTextFormikContainer } from "./styles";

import { BaseTextFieldProps, TextField } from "@mui/material";

interface InputTextFormikProps extends Partial<BaseTextFieldProps> {
  name: string;
  variant?: "standard" | "filled" | "outlined";
  blockEmptySpaces?: boolean;
  [key: string]: unknown;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.FocusEvent<HTMLInputElement | any>
  ) => void;
}

export const InputTextFormik: React.FC<InputTextFormikProps> = ({
  name,
  blockEmptySpaces,
  onChange,
  onBlur,
  ...rest
}) => {
  const [field, meta] = useField(name);
  const errorText = meta.error && meta.touched ? meta.error : "";

  const defaultOnChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (blockEmptySpaces) {
      event.target.value = event.target.value.trim();
    }
    field.onChange(event);
  };

  const defaultOnBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    field.onBlur(event);
  };

  return (
    <InputTextFormikContainer>
      <TextField
        {...rest}
        {...field}
        onChange={onChange ? onChange : defaultOnChangeHandler}
        helperText={errorText}
        error={!!errorText}
        onBlur={onBlur ? onBlur : defaultOnBlurHandler}
      />
    </InputTextFormikContainer>
  );
};
