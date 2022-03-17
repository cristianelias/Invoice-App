// Dependencies
import styled from "@emotion/styled";
import { css, Global, useTheme } from "@emotion/react";

// Components
import Header from "../components/Header/Header";

// Assets
import "@fontsource/spartan/500.css";
import "@fontsource/spartan/700.css";

// Styles
const StyledLayout = styled.div`
  min-width: 375px;
  display: grid;
  grid-template-columns: 103px auto;

  @media (max-width: 850px) {
    grid-template-rows: 80px auto;
  }
`;

const MainLayout = (props) => {
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
      transition: background-color 1s ease-out;
      padding: 0;
      margin: 0;
      font-weight: 500;
      min-width: 375px;
    }
  `;

  return (
    <>
      <Global styles={styles} />

      <StyledLayout>
        <Header />
        {props.children}
      </StyledLayout>
    </>
  );
};

export default MainLayout;
