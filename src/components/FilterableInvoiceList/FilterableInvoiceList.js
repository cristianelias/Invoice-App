import { useState, useEffect, useLayoutEffect } from "react";
import debounce from "lodash.debounce";

import InvoiceListOverview from "./InvoiceListOverview/InvoiceListOverview";
import NewInvoiceButton from "./NewInvoiceButton/NewInvoiceButton";
import InvoiceFilterDropdown from "./InvoiceFilterDropdown/InvoiceFilterDropdown";

import InvoiceList from "./InvoiceList/InvoiceList";

import invoiceClient from "../../clients/invoiceClient";

import "./FilterableInvoiceList.css";

const FilterableInvoiceList = () => {
  const [invoices, setInvoices] = useState([]);
  const [showFullInfo, setShowFullInfo] = useState(false);

  const [filterPaid, setFilterPaid] = useState(true);
  const [filterPending, setFilterPending] = useState(true);
  const [filterDraft, setFilterDraft] = useState(true);

  useEffect(() => {
    const invoices = invoiceClient.fetchInvoices();
    setInvoices(invoices);
  }, []);

  // TODO: Put this inside a custom hook or a context component
  useLayoutEffect(() => {
    const TABLET_MINIMAL_WIDTH = 768;

    const updateShowFullInfo = debounce(() => {
      window.innerWidth >= TABLET_MINIMAL_WIDTH
        ? setShowFullInfo(true)
        : setShowFullInfo(false);
    }, 400);

    window.addEventListener("resize", updateShowFullInfo);
    updateShowFullInfo();

    return () => {
      window.removeEventListener("resize", updateShowFullInfo);
    };
  }, []);

  const statusFilters = [
    {
      active: filterPaid,
      updaterFn: (value) => {
        setFilterPaid(value);
      },
      displayText: "Paid",
      status: "paid",
    },
    {
      active: filterPending,
      updaterFn: (value) => {
        setFilterPending(value);
      },
      displayText: "Pending",
      status: "pending",
    },
    {
      active: filterDraft,
      updaterFn: (value) => {
        setFilterDraft(value);
      },
      displayText: "Draft",
      status: "draft",
    },
  ];

  return (
    <article className="invoice-list">
      <header className="invoice-list__header">
        <InvoiceListOverview
          showFullInfo={showFullInfo}
          totalInvoices={invoices.length}
        />

        <InvoiceFilterDropdown
          showFullInfo={showFullInfo}
          statusFilters={statusFilters}
        />

        <NewInvoiceButton showFullInfo={showFullInfo} />
      </header>

      <InvoiceList
        invoices={statusFilters
          .filter((filter) => filter.active)
          .flatMap(({ status }) =>
            invoices.filter((invoice) => invoice.status === status)
          )}
      />
    </article>
  );
};

export default FilterableInvoiceList;
