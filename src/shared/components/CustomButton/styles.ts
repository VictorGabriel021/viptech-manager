import styled from "styled-components";

import { Button } from "@mui/material";

import { Colors } from "shared/constants/color";

import { Variant } from ".";

export const CustomizedButton = styled(Button)<{
  variant: Variant;
  color: keyof typeof Colors;
}>`
  && {
    background-color: ${({ variant, color }) =>
      variant === "contained" ? Colors[color] : "none"};

    color: ${({ variant, color }) =>
      variant !== "contained" ? Colors[color] : "none"};
  }
`;
