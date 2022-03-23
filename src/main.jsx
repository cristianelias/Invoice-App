// Dependencies
import { StrictMode } from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";

// Components
import App from "./components/App";

// Context Providers
import InvoiceContextProvider from "./components/Providers/InvoiceContextProvider";

render(
  <StrictMode>
    <HashRouter>
      <InvoiceContextProvider>
        <App />
      </InvoiceContextProvider>
    </HashRouter>
  </StrictMode>,
  document.getElementById("root")
);
