// Dependencies
import { StrictMode } from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";

// Components
import App from "./components/App";

// Context Providers
import InvoiceContextProvider from "./components/Providers/InvoiceContextProvider";
import UIContextProvider from "./components/Providers/UIContextProvider";

render(
  <StrictMode>
    <HashRouter>
      <InvoiceContextProvider>
        <UIContextProvider>
          <App />
        </UIContextProvider>
      </InvoiceContextProvider>
    </HashRouter>
  </StrictMode>,
  document.getElementById("root")
);
