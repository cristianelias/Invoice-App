// Dependencies
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";

// Contexts
import ThemeContext from "../../state/ThemeContext";

// Themes
import dark from "../../configs/darkTheme";
import light from "../../configs/lightTheme";

const Theme = ({ children }) => {
  const [isLight, setIsLight] = useState(true);

  return (
    <>
      <ThemeContext.Provider value={{ isLight, setIsLight }}>
        <ThemeProvider theme={isLight ? light : dark}>{children}</ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
};
export default Theme;
