import { StrictMode } from "react";
import { render } from "react-dom";
import Header from "../Header/Header";
import FilterableInvoiceList from "../FilterableInvoiceList/FilterableInvoiceList";
import NewInvoiceForm from "../NewInvoiceForm/NewInvoiceForm";
import Overlay from "../Overlay/Overlay";

import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Overlay />
      <Header />
      <FilterableInvoiceList />
      <NewInvoiceForm />
    </div>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
