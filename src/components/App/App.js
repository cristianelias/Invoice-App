import { StrictMode } from "react";
import { render } from "react-dom";
import Header from "../Header/Header";
import InvoiceList from "../InvoiceList/InvoiceList";
import NewInvoice from "../InvoiceList/NewInvoice";

import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <InvoiceList />
      <NewInvoice />
    </div>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
