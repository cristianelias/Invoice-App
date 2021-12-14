import iconArrowDown from "./assets/icon-arrow-down.svg";

import InvoiceFilter from "./InvoiceFilter";
import { useState } from "react";

const InvoiceFilterList = (props) => {
  const {
    setFilteredInvoices,
    invoices,
    viewportWidth,
    resolutionBreakpoint,
  } = props;

  const [statusFilterPaid, setStatusFilterPaid] = useState(true);
  const [statusFilterPending, setStatusFilterPending] = useState(true);
  const [statusFilterDraft, setStatusFilterDraft] = useState(true);
  const [filtersVisibility, setFilterVisibility] = useState(false);

  const filtersByStatus = {
    paid: {
      active: statusFilterPaid,
      updaterFn: (value) => {
        setStatusFilterPaid(value);
      },
      text: "Paid",
    },
    pending: {
      active: statusFilterPending,
      updaterFn: (value) => {
        setStatusFilterPending(value);
      },
      text: "Pending",
    },
    draft: {
      active: statusFilterDraft,
      updaterFn: (value) => {
        setStatusFilterDraft(value);
      },
      text: "Draft",
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
    <div className="invoice-filter-list-container">
      <legend
        onClick={() => {
          setFilterVisibility(!filtersVisibility);
        }}
      >
        <span className="invoice-filter-label">
          {viewportWidth >= resolutionBreakpoint
            ? `Filter by status`
            : `Filter`}
        </span>
        <img
          className={
            !filtersVisibility
              ? "invoice-filter-arrow-down"
              : "invoice-filter-arrow-up"
          }
          src={iconArrowDown}
          alt="Arrow icon. Click to display filters."
        />
      </legend>
      <fieldset
        className={`invoice-filter-list-inner-container ${
          !filtersVisibility ? "ninja" : ""
        }`}
      >
        {Object.keys(filtersByStatus).map((status, index) => {
          const currentFilter = filtersByStatus[status];
          return (
            <InvoiceFilter
              key={index}
              status={status}
              text={currentFilter.text}
              active={currentFilter.active}
              updaterFn={currentFilter.updaterFn}
              filterInvoices={filterInvoices}
            />
          );
        })}
      </fieldset>
    </div>
  );
};

export default InvoiceFilterList;
