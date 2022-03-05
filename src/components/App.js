// Dependencies
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Routes, Route, useLocation } from "react-router-dom";
import { css, Global } from "@emotion/react";
import { AnimatePresence } from "framer-motion";

// Pages
import ListInvoicesPage from "../pages/ListInvoicesPage/ListInvoicesPage";
import NewInvoicePage from "../pages/NewInvoicePage/NewInvoicePage";
import ViewInvoicePage from "../pages/ViewInvoicePage/ViewInvoicePage";
import EditInvoicePage from "../pages/EditInvoicePage/EditInvoicePage";

// Components
import Header from "./Header/Header";
import Loading from "./Loading";

// Clients
import firebaseInvoiceClient from "../clients/firebase/firebaseInvoiceClient";

// Assets
import "@fontsource/spartan/500.css";
import "@fontsource/spartan/700.css";

const styles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box !important;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a,
  button {
    all: unset;
    cursor: pointer;
  }

  fieldset {
    border: 0;
    padding: 0;
    margin: 0;
    min-width: 0;
  }

  body {
    font-family: "Spartan", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f8f8fb;
    padding: 0;
    margin: 0;
    font-weight: 500;
    min-width: 360px;
  }

  .main-layout {
    min-width: 360px;
    display: grid;
    grid-template-columns: 103px auto;
  }

  @media (max-width: 850px) {
    .main-layout {
      grid-template-rows: 80px auto;
    }
  }
`;

const App = () => {
  const firebaseInstance = firebaseInvoiceClient.getFirestore();
  const [invoices, loading, error] = useCollectionData(
    collection(firebaseInstance, "invoices")
  );
  const location = useLocation();

  return (
    <>
      <Global styles={styles} />

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
