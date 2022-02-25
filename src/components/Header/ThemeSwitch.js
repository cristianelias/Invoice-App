// Dependencies
import styled from "@emotion/styled";
import { useState } from "react";

// Assets
import lightThemeImage from "../../assets/icon-sun.svg";
import darkThemeImage from "../../assets/icon-moon.svg";

// Styles
const ThemeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 42px 32px 41px;
`;

const ThemeImage = styled.img`
  cursor: pointer;
  height: 20px;
  width: 20px;
`;

const ThemeSwitch = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <ThemeContainer
      onClick={() => {
        setDarkTheme(!darkTheme);
        alert("-Cris: 🧶 🐈   I am working on this, stay tuned!   🧶 🐈 ");
      }}
      role="img"
    >
      <ThemeImage
        src={darkTheme === true ? lightThemeImage : darkThemeImage}
        alt="Theme color switch."
      />
    </ThemeContainer>
  );
};
export default ThemeSwitch;
