// Dependencies
import styled from "@emotion/styled";
import { motion } from "framer-motion";

// Components
import Invoice from "./Invoice";

// Styles
const InvoiceItem = styled.li`
  width: 100%;
  list-style: none;
`;

const StyledInvoiceList = styled(motion.ol)``;

// Framer motion variants
const invoiceListVariant = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
  hidden: {},
};

const InvoiceList = ({ invoices }) => (
  <section>
    <StyledInvoiceList
      variants={invoiceListVariant}
      initial="hidden"
      animate="visible"
    >
      {invoices.map((invoice) => (
        <InvoiceItem key={invoice.id}>
          <Invoice
            id={invoice.id}
            paymentDue={invoice.paymentDue}
            clientName={invoice.clientName}
            total={invoice.total}
            status={invoice.status}
          />
        </InvoiceItem>
      ))}
    </StyledInvoiceList>
  </section>
);

export default InvoiceList;
