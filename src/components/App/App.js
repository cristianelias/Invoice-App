import { StrictMode } from "react";
import { render } from "react-dom";
/* eslint-disable-next-line */
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "../../pages/Home/Home";
import NewInvoice from "../../pages/NewInvoice/NewInvoice";
import ViewInvoice from "../../pages/ViewInvoice/ViewInvoice";
import EditInvoice from "../../pages/EditInvoice/EditInvoice";

// Styles
import "./App.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="new-invoice" element={<NewInvoice />} />
        <Route path="view-invoice" element={<ViewInvoice />} />
        <Route path="edit-invoice" element={<EditInvoice />} />
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
