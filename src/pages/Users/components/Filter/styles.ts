import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 10px;
`;
