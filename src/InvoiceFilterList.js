import InvoiceFilter from "./InvoiceFilter";
import { useState } from "react";

const InvoiceFilterList = (props) => {
  const { setFilteredInvoices, invoices } = props;

  const [statusFilterPaid, setStatusFilterPaid] = useState(true);
  const [statusFilterPending, setStatusFilterPending] = useState(true);
  const [statusFilterDraft, setStatusFilterDraft] = useState(true);

  const filtersByStatus = {
    paid: {
      active: statusFilterPaid,
      updaterFn: (value) => {
        setStatusFilterPaid(value);
      },
    },
    pending: {
      active: statusFilterPending,
      updaterFn: (value) => {
        setStatusFilterPending(value);
      },
    },
    draft: {
      active: statusFilterDraft,
      updaterFn: (value) => {
        setStatusFilterDraft(value);
      },
    },
  };

  function filterInvoices({ status, active }) {
    filtersByStatus[status].active = active;
    const filteredInvoices = [];

    Object.keys(filtersByStatus).forEach((currentStatus) => {
      if (filtersByStatus[currentStatus].active === true) {
        filteredInvoices.push(
          ...invoices.filter((invoice) => invoice.status === currentStatus)
        );
      }
    });

    setFilteredInvoices(filteredInvoices);
  }

  return (
    <form>
      <h4>Filter by status</h4>
      <span>🔽</span>
      <br />
      {Object.keys(filtersByStatus).map((status, index) => (
        <InvoiceFilter
          key={index}
          status={status}
          active={filtersByStatus[status].active}
          updaterFn={filtersByStatus[status].updaterFn}
          filterInvoices={filterInvoices}
        />
      ))}
    </form>
  );
};

export default InvoiceFilterList;
