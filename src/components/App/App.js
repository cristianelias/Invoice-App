import { StrictMode } from "react";
import { render } from "react-dom";
import Header from "../Header/Header";
import FilterableInvoiceList from "../FilterableInvoiceList/FilterableInvoiceList";
import NewInvoiceForm from "../NewInvoiceForm/NewInvoiceForm";

import "./App.css";

const App = () => {
  return (
    <div>
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
