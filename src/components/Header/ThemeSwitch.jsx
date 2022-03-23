// Dependencies
import styled from "@emotion/styled";

// Assets
import lightThemeImage from "../../assets/icon-sun.svg";
import darkThemeImage from "../../assets/icon-moon.svg";
import { useContext } from "react";

// Context
import ThemeContext from "../../state/ThemeContext";

// Styles
const ThemeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 42px 32px 41px;

  @media (max-width: 850px) {
    margin-left: auto;
  }
`;

const ThemeImage = styled.img`
  cursor: pointer;
  height: 20px;
  width: 20px;
`;

const ThemeSwitch = () => {
  const { isLight, setIsLight } = useContext(ThemeContext);

  return (
    <ThemeContainer onClick={() => setIsLight(!isLight)} role="img">
      <ThemeImage
        src={isLight ? darkThemeImage : lightThemeImage}
        alt="Theme color switch."
      />
    </ThemeContainer>
  );
};
export default ThemeSwitch;
