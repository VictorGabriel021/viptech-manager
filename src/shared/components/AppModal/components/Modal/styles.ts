import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 265px;
  min-height: 150px;

  > h2 {
    text-transform: uppercase;
  }

  > img {
    background-position: center 30px;
    padding-bottom: 15px;
    margin: 5px 0;
  }

  > p {
    text-align: center;
    margin-top: 15px;
    margin-bottom: 5px;
  }

  button:first-child {
    margin-top: 15px;
  }

  button + button {
    margin-top: 5px;
  }
`;
