import styled from "styled-components";

import { Colors } from "shared/constants/color";

export const Container = styled.div`
  display: inline-block;
  margin-bottom: 20px;

  a {
    color: #000;

    &:hover {
      color: ${Colors.primary};
    }
  }
`;

export const SpanContainer = styled.span`
  display: flex;
  align-items: center;
`;
