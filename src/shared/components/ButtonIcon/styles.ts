import styled from "styled-components";

import { Button } from "@mui/material";

import { Colors } from "../../constants/color";

export const ButtonContainer = styled.div`
  display: flex;

  &:hover {
    button {
      background-color: ${Colors.secondary} !important;
    }

    div {
      background-color: ${Colors.tertiary};
    }
  }
`;

export const ButtonContent = styled(Button)`
  min-height: 70px;
  height: 100%;
  width: 100%;
  max-width: 400px;
  min-width: auto;
  border-radius: 10px 0 0 10px !important;
  text-transform: uppercase;
  background-color: ${Colors.primary} !important;

  h5 {
    font-weight: bold;
    font-size: 1.5rem;

    @media (max-width: 500px) {
      font-size: 0.8rem;
    }
  }
`;

export const ButtonIconContent = styled.div`
  background-color: ${Colors.secondary};
  width: 70px;
  border-radius: 0 10px 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
`;
