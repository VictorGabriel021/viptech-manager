import styled from "styled-components";

export const Container = styled.div`
  padding: 150px 80px;
  display: flex;

  @media (max-width: 1560px) {
    padding: 70px 40px;
  }

  @media (max-width: 1420px) {
    flex-wrap: wrap;
  }

  @media (max-width: 600px) {
    padding: 35px 15px;
  }
`;

export const Content = styled.div`
  hyphens: auto;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #263238;
  text-shadow: 1px 1px 1px #000;
  line-height: 60px;
  letter-spacing: -0.015em;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Description = styled.p`
  color: #9e9e9e;
  font-size: 1.5rem;
  line-height: 2rem;
  margin: 35px 0 140px 0;

  @media (max-width: 768px) {
    margin: 35px 0 60px 0;
    font-size: 1.2rem;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export const Image = styled.img`
  max-height: 550px;

  @media (max-width: 950px) {
    width: 100%;
    max-height: auto;
  }
`;
