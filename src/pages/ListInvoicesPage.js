// Dependencies
import { Outlet } from "react-router-dom";

// Components
import FilterableInvoiceList from "../components/FilterableInvoiceList/FilterableInvoiceList";
import ScrollToTop from "../components/ScrollToTop";

// Styles
import PageContainer from "./Styled/PageContainer";

// Context
import InvoiceContext from "../state/InvoiceContext";
import { useContext } from "react";

const ListInvoicesPage = () => {
  const { invoices } = useContext(InvoiceContext);

  return (
    <>
      {Array.isArray(invoices) && (
        <PageContainer>
          <ScrollToTop />

          <FilterableInvoiceList />
          <Outlet />
        </PageContainer>
      )}
    </>
  );
};

export default ListInvoicesPage;
