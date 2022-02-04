// Dependencies
import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

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

// Clients
import firebaseInvoiceClient from "../../clients/firebase/firebaseInvoiceClient";

const App = () => {
  const firebaseInstance = firebaseInvoiceClient.getFirestore();
  const [invoices, loading, error] = useCollectionData(
    collection(firebaseInstance, "invoices")
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
