// Dependencies
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

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
  const location = useLocation();

  return (
    <>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}

      <div className="main-layout">
        <Header />

        {loading && <Loading />}
        {invoices && (
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.key}>
              <Route
                path="/"
                element={<ListInvoicesPage invoices={invoices} />}
              >
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
          </AnimatePresence>
        )}
      </div>
    </>
  );
};

export default App;
