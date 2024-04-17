import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
`;

export const RepresentativeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: auto;
  padding: 15px 0;
  max-height: 450px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap-reverse;
  gap: 20px;
`;
