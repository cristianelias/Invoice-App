import { StrictMode, useState, useLayoutEffect, useEffect } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import ListInvoicesPage from "../../pages/ListInvoicesPage/ListInvoicesPage";
import NewInvoicePage from "../../pages/NewInvoicePage/NewInvoicePage";
import ViewInvoicePage from "../../pages/ViewInvoicePage/ViewInvoicePage";
import EditInvoicePage from "../../pages/EditInvoicePage/EditInvoicePage";

// Components
import Header from "../Header/Header";
import Loading from "../Loading/Loading";

// Styles
import "./App.css";

import { getFirestore, collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBJxmaEM79VlzO9I7Tqn5pF73EuG7IzY4s",
  authDomain: "invoice-4pp.firebaseapp.com",
  databaseURL: "https://invoice-4pp-default-rtdb.firebaseio.com",
  projectId: "invoice-4pp",
  storageBucket: "invoice-4pp.appspot.com",
  messagingSenderId: "109703836878",
  appId: "1:109703836878:web:e185b268e1dcd02e49cc9f",
  measurementId: "G-PRR4HTQ58H",
};

const firebaseApp = initializeApp(firebaseConfig);
const App = () => {
  const [invoices, loading, error] = useCollectionData(
    collection(getFirestore(firebaseApp), "invoices")
  );

  return (
    <>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}

      <div className="main-layout">
        <Header />

        {loading && <Loading />}
        {invoices && (
          <Routes>
            <Route path="/" element={<ListInvoicesPage invoices={invoices} />}>
              <Route path="new-invoice" element={<NewInvoicePage />} />
            </Route>

            <Route
              path="/view-invoice/:id"
              element={<ViewInvoicePage invoices={invoices} />}
            >
              <Route
                path="/view-invoice/:id/edit"
                element={<EditInvoicePage invoices={invoices} />}
              />
            </Route>
          </Routes>
        )}
      </div>
    </>
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
