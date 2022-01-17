// Dependencies
// eslint-disable-next-line
import { Outlet } from "react-router-dom";

// Components
import FilterableInvoiceList from "../../components/FilterableInvoiceList/FilterableInvoiceList";

import "./ListInvoicesPage.css";

const ListInvoicesPage = (props) => {
  const { invoices } = props;

  return (
    <div className="list-invoices-page">
      <FilterableInvoiceList invoices={invoices} />
      <Outlet />
    </div>
  );
};

export default ListInvoicesPage;
