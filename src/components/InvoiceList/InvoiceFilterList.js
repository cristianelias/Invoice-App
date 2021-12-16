/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import iconArrowDown from "../../assets/icon-arrow-down.svg";

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

  // TODO: Improve accesibility, follow linter guidelines.
  return (
    <div
      onClick={() => {
        setFilterVisibility(!filtersVisibility);
      }}
      className="invoice-filter-list-container"
    >
      <legend>
        <span className="invoice-filter-trigger">
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
        onClick={(event) => {
          // this prevents the event from bubbling up until
          // triggering it's parent onClick which would hide the menu.
          event.stopPropagation();
        }}
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
