// Dependencies
import styled from "@emotion/styled";

// Contexts Providers
import ThemeContextProvider from "../components/Providers/ThemeContextProvider";

// Assets
import "@fontsource/spartan/500.css";
import "@fontsource/spartan/700.css";
import GlobalStyles from "../components/GlobalStyles";

// Styles
const StyledLayout = styled.div`
  min-width: 375px;
  display: grid;
  grid-template-columns: 103px auto;

  @media (max-width: 850px) {
    grid-template-rows: 80px auto;
  }
`;

const MainLayout = (props) => (
  <ThemeContextProvider>
    <GlobalStyles />
    <StyledLayout>{props.children}</StyledLayout>
  </ThemeContextProvider>
);

export default MainLayout;
