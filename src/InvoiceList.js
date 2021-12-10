import { useState, useEffect } from "react";

import Invoice from "./Invoice";
import InvoiceFilter from "./InvoiceFilter";

import initialData from "./data";

const InvoiceList = () => {
  const [invoices, setInvoices] = useState([]);
  const [filteredInvoices, setFilteredInvoices] = useState([]);
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

  useEffect(() => {
    setInvoices(initialData);
    setFilteredInvoices(initialData);
  }, []);

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
    <article>
      <header>
        <span>
          <h2>Invoices</h2>
          <h5>There are {invoices.length} total invoices</h5>
        </span>
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
        <span>
          <span>🆕</span>
          <span>New Invoice</span>
        </span>
      </header>

      <section>
        <ul>
          {filteredInvoices.map((invoice) => (
            <li key={invoice.id}>
              <Invoice
                id={invoice.id}
                paymentDue={invoice.paymentDue}
                clientName={invoice.clientName}
                total={invoice.total}
                status={invoice.status}
              />
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default InvoiceList;
