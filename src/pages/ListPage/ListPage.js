// Dependencies
// eslint-disable-next-line
import { Outlet } from "react-router-dom";

// Components
import FilterableInvoiceList from "../../components/FilterableInvoiceList/FilterableInvoiceList";

import "./ListPage.css";

const ListPage = (props) => {
  const { invoices } = props;

  return (
    <div className="list-page">
      <FilterableInvoiceList invoices={invoices} />
      <Outlet />
    </div>
  );
};

export default ListPage;
