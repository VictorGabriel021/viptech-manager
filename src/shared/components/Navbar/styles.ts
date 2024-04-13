import styled from "styled-components";

import { Colors } from "shared/constants/color";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${Colors.primary};
  color: #fff;
  padding: 25px 40px;

  a {
    color: rgba(255, 255, 255, 0.5);
    font-size: 1.125rem;
    font-style: normal;

    &.active {
      font-weight: bold;
      color: #fff;
    }

    &:hover {
      color: #fff;
    }
  }

  @media (max-width: 550px) {
    flex-direction: column;
    gap: 15px;
    padding: 20px 0;
  }
`;

export const Logo = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const NavbarContainer = styled.nav`
  display: flex;
  gap: 30px;
`;
