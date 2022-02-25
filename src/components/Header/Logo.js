// Dependencies
import styled from "@emotion/styled";

// Assets
import logo from "../../assets/logo.svg";

// Styles
const LogoContainer = styled.div`
  margin-bottom: auto;
  background-color: #7c5dfa;
  height: 103px;
  width: 103px;
  position: relative;
  border-top-right-radius: 20px;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;

  @media (max-width: 850px) {
    width: 80px;
    height: 80px;
    margin-right: auto;
    margin-bottom: unset;
    border-radius: 0 20px 20px 0;
  }
`;

const StyledLogo = styled.img`
  height: 37.7px;
  width: 40px;
  z-index: 2;

  @media (max-width: 850px) {
    height: 31px;
    width: 31px;
  }
`;

const LogoBackground = styled.div`
  background-color: #9277ff;
  height: 50%;
  width: 100%;
  position: absolute;
  z-index: 1;
  bottom: 0;
  border-top-left-radius: 20px;

  @media (max-width: 850px) {
    border-radius: 20px 0 20px 0;
  }
`;

const Logo = () => {
  return (
    <LogoContainer>
      <StyledLogo src={logo} alt="Logo, click to go to homepage" />
      <LogoBackground />
    </LogoContainer>
  );
};
export default Logo;
