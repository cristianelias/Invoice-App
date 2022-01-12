import { StrictMode } from "react";
import { render } from "react-dom";
/* eslint-disable-next-line */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../../Pages/Home/Home";
import NewInvoice from "../../Pages/NewInvoice/NewInvoice";

import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="new-invoice" element={<NewInvoice />} />
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
