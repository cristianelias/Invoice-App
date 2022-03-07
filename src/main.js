// Dependencies
import { StrictMode } from "react";
import { render } from "react-dom";
import { css, Global } from "@emotion/react";
import { HashRouter } from "react-router-dom";

// Components
import App from "./components/App";

// Global styles
// Assets
import "@fontsource/spartan/500.css";
import "@fontsource/spartan/700.css";

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
    background-color: #f8f8fb;
    padding: 0;
    margin: 0;
    font-weight: 500;
    min-width: 375px;
  }
`;

render(
  <StrictMode>
    <HashRouter>
      <Global styles={styles} />

      <App />
    </HashRouter>
  </StrictMode>,
  document.getElementById("root")
);
