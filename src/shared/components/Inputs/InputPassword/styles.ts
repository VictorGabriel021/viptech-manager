import styled from "styled-components";

import { OutlinedInput } from "@mui/material";

export const OutlinedInputCustom = styled(OutlinedInput)`
  [type="password"]::-ms-reveal,
  [type="password"]::-ms-clear {
    display: none;
  }
`;
