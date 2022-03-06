// Dependencies
import { Outlet } from "react-router-dom";

// Components
import FilterableInvoiceList from "../components/FilterableInvoiceList/FilterableInvoiceList";
import ScrollToTop from "../components/ScrollToTop";

// Styles
import PageContainer from "./Styled/PageContainer";

const ListInvoicesPage = ({ invoices }) => (
  <>
    {Array.isArray(invoices) && (
      <PageContainer>
        <ScrollToTop />

        <FilterableInvoiceList invoices={invoices} />
        <Outlet />
      </PageContainer>
    )}
  </>
);

export default ListInvoicesPage;
