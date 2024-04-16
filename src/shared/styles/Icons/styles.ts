import styled from "styled-components";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { Colors } from "shared/constants/color";

export const EditIconCustom = styled(EditIcon)`
  color: ${Colors.primary};
  cursor: pointer;

  &:hover {
    color: ${Colors.secondary};
  }
`;

export const DeleteIconCustom = styled(DeleteIcon)`
  color: ${Colors.error};
  cursor: pointer;

  &:hover {
    color: ${Colors.errorHover};
  }
`;
