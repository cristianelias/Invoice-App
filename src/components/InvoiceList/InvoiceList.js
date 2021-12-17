import iconPlus from "../../assets/icon-plus.svg";

import { useState, useEffect, useLayoutEffect } from "react";
import debounce from "lodash.debounce";

import InvoiceFilterList from "./InvoiceFilterList";
import Invoice from "./Invoice";

import invoiceClient from "../../clients/invoiceClient";

import "./InvoiceList.css";

// TODO: Move this to a context, so all components can share it's status
const TABLET_RESOLUTION_BREAKPOINT = 768;

const InvoiceList = () => {
  const [invoices, setInvoices] = useState([]);
  const [filteredInvoices, setFilteredInvoices] = useState([]);
  const [viewportWidth, setViewportWidth] = useState([]);

  useEffect(() => {
    const invoices = invoiceClient.fetchInvoices();
    setInvoices(invoices);
    setFilteredInvoices(invoices);
  }, []);

  useLayoutEffect(() => {
    const updateViewportWidth = debounce(() => {
      setViewportWidth(window.innerWidth);
    }, 400);

    window.addEventListener("resize", updateViewportWidth);
    updateViewportWidth();

    return () => {
      window.removeEventListener("resize", updateViewportWidth);
    };
  }, []);

  function isTabletOrGreater(viewportWidth) {
    return viewportWidth >= TABLET_RESOLUTION_BREAKPOINT;
  }

  return (
    <article className="invoice-list">
      <header className="invoice-list-header">
        <nav>
          <ul>
            <li className="invoice-list-headings-container">
              <h1 className="invoice-list-primary-heading">Invoices</h1>
              <h2 className="invoice-list-secondary-heading">
                {isTabletOrGreater(viewportWidth)
                  ? `There are ${invoices.length} total invoices`
                  : `${invoices.length} invoices`}
              </h2>
            </li>
            <li>
              <InvoiceFilterList
                setFilteredInvoices={(filteredInvoices) => {
                  setFilteredInvoices(filteredInvoices);
                }}
                invoices={invoices}
                viewportWidth={viewportWidth}
                resolutionBreakpoint={TABLET_RESOLUTION_BREAKPOINT}
              />
            </li>
            <li>
              <button className="new-invoice">
                <div className="new-invoice-icon-wrapper">
                  <img
                    src={iconPlus}
                    alt="New invoice button. Click to create a new invoice for you to fill."
                  />
                </div>
                <p className="new-invoice-text">
                  {isTabletOrGreater(viewportWidth) ? "New Invoice" : "New"}
                </p>
              </button>
            </li>
          </ul>
        </nav>
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
