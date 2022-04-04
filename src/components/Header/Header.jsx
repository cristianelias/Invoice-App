/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

// Dependencies
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

// Components
import Logo from "./Logo";
import ThemeSwitch from "./ThemeSwitch";
import Avatar from "./Avatar";
import CreditsModal from "../Modal";

// Styles
const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.background.header};
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
    height: 80px;
    min-height: unset;
    grid-row: 1/2;
    grid-column: 1/4;
    border-radius: 0px;
  }

  @media (max-width: 500px) {
    min-width: 375px;
  }
`;

const StyledLink = styled(Link)`
  width: 100%;
  margin-bottom: auto;
`;

const Nav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 850px) {
    flex-flow: row nowrap;
    justify-content: space-between;
  }
`;

const Header = () => {
  return (
    <>
      <Container onClick={(e) => e.stopPropagation()}>
        <Nav>
          <StyledLink to="/">
            <Logo />
          </StyledLink>

          <ThemeSwitch />

          <Avatar />
        </Nav>
      </Container>
      <CreditsModal />
    </>
  );
};

export default Header;
