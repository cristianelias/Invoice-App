// Dependencies
import { useState, useEffect, useMemo, use } from "react";
import debounce from "lodash.debounce";

// Components
import InvoiceListOverview from "./InvoiceListOverview/InvoiceListOverview";
import NewInvoiceButton from "./NewInvoiceButton/NewInvoiceButton";
import InvoiceFilterDropdown from "./InvoiceFilterDropdown/InvoiceFilterDropdown";
import InvoiceList from "./InvoiceList/InvoiceList";
import EmptyInvoiceList from "./EmptyInvoiceList/EmptyInvoiceList";

// Styles
import "./FilterableInvoiceList.css";

const TABLET_MINIMAL_WIDTH = 768;
const mustShowFullInfo = () => window.innerWidth >= TABLET_MINIMAL_WIDTH;

const FilterableInvoiceList = (props) => {
  const { invoices } = props;
  const [showFullInfo, setShowFullInfo] = useState(mustShowFullInfo());
  const [filterPaid, setFilterPaid] = useState(true);
  const [filterPending, setFilterPending] = useState(true);
  const [filterDraft, setFilterDraft] = useState(true);

  const updateShowFullInfo = debounce(() => {
    mustShowFullInfo() ? setShowFullInfo(true) : setShowFullInfo(false);
  }, 200);

  useEffect(() => {
    window.addEventListener("resize", updateShowFullInfo);

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

  const filteredInvoices = statusFilters
    .filter((filter) => filter.active)
    .flatMap(({ status }) =>
      invoices.filter((invoice) => invoice.status === status)
    );

  return (
    <article className="invoice-list">
      <header className="invoice-list__header">
        <InvoiceListOverview
          showFullInfo={showFullInfo}
          totalInvoices={filteredInvoices.length}
        />

        <InvoiceFilterDropdown
          showFullInfo={showFullInfo}
          statusFilters={statusFilters}
        />

        <NewInvoiceButton showFullInfo={showFullInfo} />
      </header>

      {filteredInvoices.length > 0 ? (
        <InvoiceList invoices={filteredInvoices} />
      ) : (
        <EmptyInvoiceList />
      )}
    </article>
  );
};

export default FilterableInvoiceList;
