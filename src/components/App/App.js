import { StrictMode, useState, useEffect } from "react";
import { render } from "react-dom";
/* eslint-disable-next-line */
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import ListPage from "../../pages/ListPage/ListPage";
import NewInvoicePage from "../../pages/NewInvoicePage/NewInvoicePage";
import ViewInvoicePage from "../../pages/ViewInvoicePage/ViewInvoicePage";
import EditInvoicePage from "../../pages/EditInvoicePage/EditInvoicePage";

// Components
import Header from "../Header/Header";

// Clients
import invoiceClient from "../../clients/invoiceClient";

// Styles
import "./App.css";

const App = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const invoices = invoiceClient.fetchInvoices();
    setInvoices(invoices);
  }, []);

  useEffect(() => {
    const invoices = invoiceClient.fetchInvoices();
    setInvoices(invoices);
  }, []);

  return (
    <div className="main-layout">
      <Header />
      <Routes>
        <Route path="/" element={<ListPage invoices={invoices} />}>
          <Route
            path="new-invoice"
            element={<NewInvoicePage setInvoices={setInvoices} />}
          />
        </Route>

        <Route
          path="/view-invoice/:id"
          element={<ViewInvoicePage invoices={invoices} />}
        >
          <Route
            path="/view-invoice/:id/edit"
            element={
              <EditInvoicePage invoices={invoices} setInvoices={setInvoices} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
