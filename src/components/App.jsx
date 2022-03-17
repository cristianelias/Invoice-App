// Dependencies
import { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Pages
import ListInvoicesPage from "../pages/ListInvoicesPage";
import NewInvoicePage from "../pages/NewInvoicePage";
import ViewInvoicePage from "../pages/ViewInvoicePage";
import EditInvoicePage from "../pages/EditInvoicePage";

// Components
import Header from "./Header/Header";
import Loading from "./Loading";
import MainLayout from "../layout/MainLayout";

// Context
import InvoiceContext from "../state/InvoiceContext";

const App = () => {
  const location = useLocation();
  const { invoices } = useContext(InvoiceContext);

  return (
    <MainLayout>
      <Header />

      {invoices === null && <Loading />}
      {invoices && (
        <AnimatePresence exitBeforeEnter>
          <Routes location={location}>
            <Route path="/" element={<ListInvoicesPage />} key={location.key}>
              <Route
                path="new-invoice"
                element={<NewInvoicePage />}
                key={location.key}
              />
            </Route>

            <Route
              path="/view-invoice/:id"
              element={<ViewInvoicePage />}
              key={location.key}
            >
              <Route
                path="/view-invoice/:id/edit"
                element={<EditInvoicePage />}
                key={location.key}
              />
            </Route>
          </Routes>
        </AnimatePresence>
      )}
    </MainLayout>
  );
};

export default App;
