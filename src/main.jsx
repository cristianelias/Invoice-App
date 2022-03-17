// Dependencies
import { StrictMode } from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";

// Components
import App from "./components/App";

// Contexts
import InvoiceContextProvider from "./components/Providers/InvoiceContextProvider";
import ThemeContextProvider from "./components/Providers/ThemeContextProvider";

render(
  <StrictMode>
    <HashRouter>
      <InvoiceContextProvider>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </InvoiceContextProvider>
    </HashRouter>
  </StrictMode>,
  document.getElementById("root")
);
