// Dependencies
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import { AnimatePresence } from "framer-motion";

// Pages
import ListInvoicesPage from "../pages/ListInvoicesPage";
import NewInvoicePage from "../pages/NewInvoicePage";
import ViewInvoicePage from "../pages/ViewInvoicePage";
import EditInvoicePage from "../pages/EditInvoicePage";

// Components
import Header from "./Header/Header";
import Loading from "./Loading";

// Clients
import { getInvoices } from "../clients/localStorageClient";

// Context
import InvoiceContext from "../state/InvoiceContext";

// Styled
const MainLayout = styled.div`
  min-width: 375px;
  display: grid;
  grid-template-columns: 103px auto;

  @media (max-width: 850px) {
    grid-template-rows: 80px auto;
  }
`;

const App = () => {
  const [invoices, setInvoices] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getInvoices({
      onSuccess: (invoices) => setInvoices(invoices),
    });
  }, []);

  return (
    <InvoiceContext.Provider value={{ invoices, setInvoices }}>
      <MainLayout>
        <Header />

        {invoices === null && <Loading />}
        {invoices && (
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.key}>
              <Route path="/" element={<ListInvoicesPage />}>
                <Route path="new-invoice" element={<NewInvoicePage />} />
              </Route>

              <Route path="/view-invoice/:id" element={<ViewInvoicePage />}>
                <Route
                  path="/view-invoice/:id/edit"
                  element={<EditInvoicePage />}
                />
              </Route>
            </Routes>
          </AnimatePresence>
        )}
      </MainLayout>
    </InvoiceContext.Provider>
  );
};

export default App;
