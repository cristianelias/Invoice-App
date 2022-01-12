import { StrictMode } from "react";
import { render } from "react-dom";
/* eslint-disable-next-line */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import FilterableInvoiceList from "../FilterableInvoiceList/FilterableInvoiceList";
import NewInvoiceForm from "../NewInvoiceForm/NewInvoiceForm";
import Overlay from "../Overlay/Overlay";

import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Overlay />
            <Header />
            <FilterableInvoiceList />
            <NewInvoiceForm />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
