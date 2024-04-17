import React, { useState } from "react";

import { useField } from "formik";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

interface InputpasswordProps {
  name: string;
  label: string;
  disabled?: boolean;
}

const InputPassword: React.FC<InputpasswordProps> = ({
  name,
  label,
  disabled,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [field, meta] = useField(name);
  const errorText = meta.error && meta.touched ? meta.error : "";

  const defaultOnChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    field.onChange(event);
  };

  const onChangeVisibilityHandler = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormControl variant="outlined" error={!!errorText} fullWidth>
      <InputLabel>{label}</InputLabel>
      <OutlinedInput
        {...field}
        disabled={disabled}
        type={showPassword ? "text" : "password"}
        label={label}
        value={field.value}
        fullWidth
        autoComplete="current-password"
        onChange={defaultOnChangeHandler}
        inputProps={{ maxLength: 30 }}
        onKeyDown={(event) => {
          if (event.code === "Space") event.preventDefault();
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={onChangeVisibilityHandler}
              onMouseDown={(e: any) => e.preventDefault()}
            >
              {showPassword ? (
                <VisibilityIcon fontSize="small" />
              ) : (
                <VisibilityOffIcon fontSize="small" />
              )}
            </IconButton>
          </InputAdornment>
        }
      />
      {!!errorText && <FormHelperText error>{errorText}</FormHelperText>}
    </FormControl>
  );
};

export default InputPassword;
