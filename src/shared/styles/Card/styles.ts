import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardContent = styled.div`
  background: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 30px;
  margin: 40px;
  width: -webkit-fill-available;
  max-width: 1440px;

  @media (max-width: 600px) {
    padding: 15px;
    margin: 15px;
  }
`;
