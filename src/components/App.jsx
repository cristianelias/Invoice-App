// Dependencies
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "@emotion/react";

// Pages
import ListInvoicesPage from "../pages/ListInvoicesPage";
import NewInvoicePage from "../pages/NewInvoicePage";
import ViewInvoicePage from "../pages/ViewInvoicePage";
import EditInvoicePage from "../pages/EditInvoicePage";

// Components
import Header from "./Header/Header";
import Loading from "./Loading";
import MainLayout from "../layout/MainLayout";

// Clients
import { getInvoices } from "../clients/localStorageClient";

// Context
import InvoiceContext from "../state/InvoiceContext";
import ThemeContext from "../state/ThemeContext";

// Themes
import dark from "../configs/darkTheme";
import light from "../configs/lightTheme";

const App = () => {
  const [invoices, setInvoices] = useState(null);
  const [isLight, setIsLight] = useState(true);

  const location = useLocation();

  useEffect(() => {
    getInvoices({
      onSuccess: (invoices) => setInvoices(invoices),
    });
  }, []);

  return (
    <InvoiceContext.Provider value={{ invoices, setInvoices }}>
      <ThemeContext.Provider value={{ isLight, setIsLight }}>
        <ThemeProvider theme={isLight ? light : dark}>
          <MainLayout>
            <Header />

            {invoices === null && <Loading />}
            {invoices && (
              <AnimatePresence exitBeforeEnter>
                <Routes location={location}>
                  <Route
                    path="/"
                    element={<ListInvoicesPage />}
                    key={location.key}
                  >
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
        </ThemeProvider>
      </ThemeContext.Provider>
    </InvoiceContext.Provider>
  );
};

export default App;
