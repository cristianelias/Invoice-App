// Dependencies
import styled from "@emotion/styled";
import { useState, useEffect, useContext } from "react";
import debounce from "lodash.debounce";
import { motion } from "framer-motion";

// Components
import InvoiceListOverview from "./InvoiceListOverview";
import NewInvoiceButton from "./NewInvoiceButton";
import FilterDropdown from "./FilterDropdown/FilterDropdown";
import InvoiceList from "./InvoiceList";
import EmptyInvoiceList from "./EmptyInvoiceList";

// Context
import InvoiceContext from "../../state/InvoiceContext";

// Styles
const Container = styled(motion.article)`
  grid-column: 2/3;
  min-width: 730px;
  max-width: 1100px;
  padding-bottom: 120px;

  @media (max-width: 1227px) {
    min-width: 672px;
  }

  @media (max-width: 850px) {
    min-width: 320px;
  }

  @media (max-width: 850px) {
    margin: 56px 0 0 0;
  }

  @media (max-width: 650px) {
    width: 80%;
    margin: 56px auto 0 auto;
  }
`;

const Header = styled.header`
  margin-bottom: 65px;
  display: flex;
`;

const TABLET_MINIMAL_WIDTH = 768;
const mustShowFullInfo = () => window.innerWidth >= TABLET_MINIMAL_WIDTH;

const FilterableInvoiceList = (props) => {
  const { invoices } = useContext(InvoiceContext);
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
    <Container>
      <Header>
        <InvoiceListOverview
          showFullInfo={showFullInfo}
          totalInvoices={filteredInvoices.length}
        />

        <FilterDropdown
          showFullInfo={showFullInfo}
          statusFilters={statusFilters}
        />

        <NewInvoiceButton showFullInfo={showFullInfo} />
      </Header>

      {filteredInvoices.length > 0 ? (
        <InvoiceList invoices={filteredInvoices} />
      ) : (
        <EmptyInvoiceList />
      )}
    </Container>
  );
};

export default FilterableInvoiceList;
