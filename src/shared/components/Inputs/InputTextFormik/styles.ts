import styled from "styled-components";

export const InputTextFormikContainer = styled.div`
  width: 100%;
  > div {
    width: 100%;

    .MuiInputBase-root {
      background-color: #fff;
    }

    @media (max-width: 400px) {
      padding: 0;
      margin: 0;
    }
  }
  @media (max-width: 400px) {
    padding: 0;
    margin: 0;
  }
`;
