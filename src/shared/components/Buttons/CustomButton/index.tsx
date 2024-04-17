import { ReactNode } from "react";

import { CustomizedButton } from "./styles";

import { ButtonProps } from "@mui/material";

import { Colors } from "shared/constants/color";

export type Variant = "contained" | "outlined" | "text";

interface IButtonProps extends Omit<ButtonProps, "color"> {
  children: ReactNode;
  variant: Variant;
  color: keyof typeof Colors;
}

const CustomButton = ({ children, ...rest }: IButtonProps) => {
  return <CustomizedButton {...rest}>{children}</CustomizedButton>;
};

export default CustomButton;
