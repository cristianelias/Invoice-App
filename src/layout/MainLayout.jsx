// Dependencies
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useContext } from "react";

// Contexts Providers
import ThemeContextProvider from "../components/Providers/ThemeContextProvider";

// Context
import UIContext from "../state/UIContext";

// Assets
import "@fontsource/spartan/500.css";
import "@fontsource/spartan/700.css";
import GlobalStyles from "../components/GlobalStyles";

// Styles
const StyledLayout = styled.div`
  min-height: 100vh;
  min-width: 375px;
  display: grid;
  grid-template-columns: 103px auto;

  @media (max-width: 850px) {
    grid-template-rows: 80px auto;
  }
`;

const MainLayout = (props) => {
  const { creditsModalOpen } = useContext(UIContext);

  return (
    <ThemeContextProvider>
      <GlobalStyles />
      <StyledLayout
        css={css`
          ${creditsModalOpen ? "overflow: hidden;" : ""}
        `}
      >
        {props.children}
      </StyledLayout>
    </ThemeContextProvider>
  );
};

export default MainLayout;
