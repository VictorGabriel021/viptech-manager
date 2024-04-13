import { Header, Logo, NavbarContainer } from "./styles";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Header>
      <Link to="/">
        <Logo>VIP Tech Manager</Logo>
      </Link>
      <NavbarContainer>
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/users">USUÁRIOS</NavLink>
          </li>
        </ul>
      </NavbarContainer>
    </Header>
  );
};

export default Navbar;
