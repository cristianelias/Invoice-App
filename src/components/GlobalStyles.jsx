// Dependencies
import { css, Global, useTheme } from "@emotion/react";

const GlobalStyles = () => {
  const theme = useTheme();

  const styles = css`
    *,
    *::before,
    *::after {
      box-sizing: border-box !important;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    a,
    button {
      all: unset;
      cursor: pointer;
    }

    fieldset {
      border: 0;
      padding: 0;
      margin: 0;
      min-width: 0;
    }

    body {
      font-family: "Spartan", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      background-color: ${theme.colors.background.secondary};
      transition: background-color 0.8s ease-out;
      padding: 0;
      margin: 0;
      font-weight: 500;
      min-width: 375px;
    }
  `;

  return <Global styles={styles} />;
};

export default GlobalStyles;
