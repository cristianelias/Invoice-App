// Dependencies
import { Outlet } from "react-router-dom";

// Components
import FilterableInvoiceList from "../../components/FilterableInvoiceList/FilterableInvoiceList";
import ScrollToTop from "../../components/ScrollToTop";

import "./ListInvoicesPage.css";

const ListInvoicesPage = ({ invoices }) => (
  <>
    {Array.isArray(invoices) && (
      <div className="list-invoices-page">
        <ScrollToTop />

        <FilterableInvoiceList invoices={invoices} />
        <Outlet />
      </div>
    )}
  </>
);

export default ListInvoicesPage;
