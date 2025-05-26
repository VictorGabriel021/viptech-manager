import React from "react";

import { useField } from "formik";

import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface SelectCustomProps {
  name: string;
  options: string[] | number[];
  label: string;
  disabled?: boolean;
}

const SelectCustom: React.FC<SelectCustomProps> = ({
  name,
  options,
  label,
  disabled,
  ...rest
}) => {
  const [field, meta] = useField(name);
  const errorText = meta.error && meta.touched ? meta.error : "";

  const handleChange = (event: SelectChangeEvent<any>) => {
    const newValue = event.target.value;
    field.onChange({ target: { name, value: newValue } });
  };

  return (
    <FormControl error={!!errorText} fullWidth>
      <InputLabel id={label}>{label}</InputLabel>
      <Select
        {...rest}
        name={field.name}
        value={field.value || ""}
        onChange={handleChange}
        disabled={disabled}
        labelId={label}
        id={label}
        label={label}
        style={{ width: "100%" }}
      >
        <MenuItem value="">
          <em>Nenhum</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
      {errorText && <FormHelperText>{errorText}</FormHelperText>}
    </FormControl>
  );
};

export default SelectCustom;
