import { useState, useEffect } from "react";

import InvoiceFilterList from "./InvoiceFilterList";
import Invoice from "./Invoice";

import initialData from "./data";

const InvoiceList = () => {
  const [invoices, setInvoices] = useState([]);
  const [filteredInvoices, setFilteredInvoices] = useState([]);

  useEffect(() => {
    setInvoices(initialData);
    setFilteredInvoices(initialData);
  }, []);

  return (
    <article>
      <header>
        <span>
          <h2>Invoices</h2>
          <h5>There are {invoices.length} total invoices</h5>
        </span>
        <InvoiceFilterList
          setFilteredInvoices={(filteredInvoices) => {
            setFilteredInvoices(filteredInvoices);
          }}
          invoices={invoices}
        />
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
