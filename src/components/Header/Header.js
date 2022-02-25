/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

// Dependencies
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

// Components
import Logo from "./Logo";
import ThemeSwitch from "./ThemeSwitch";
import Avatar from "./Avatar";

// Styles
const Container = styled.header`
  background-color: #373b53;
  user-select: none;
  width: 103px;
  height: 100vh;
  border-radius: 0 20px 20px 0;
  min-height: 350px;
  grid-column: 1/2;
  position: fixed;
  z-index: 3;
  display: flex;
  justify-content: center;

  @media (max-width: 850px) {
    width: 100%;
    min-width: 360px;
    height: 80px;
    min-height: unset;
    grid-row: 1/2;
    grid-column: 1/4;
    border-radius: 0px;
    margin-bottom: 56px;
  }

  @media (max-width: 500px) {
    height: 75px;
  }
`;

const StyledLink = styled(Link)`
  width: 100%;
`;

const Nav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  justify-content: flex-end;

  @media (max-width: 850px) {
    flex-flow: row nowrap;
  }
`;

const Header = () => {
  return (
    <Container>
      <StyledLink to="/">
        <Nav>
          <Logo />

          <ThemeSwitch />

          <Avatar />
        </Nav>
      </StyledLink>
    </Container>
  );
};

export default Header;
