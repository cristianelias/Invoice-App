// Dependencies
import styled from "@emotion/styled";
import { motion } from "framer-motion";

// Components
import Invoice from "./Invoice";

// Styles
const InvoiceItem = styled(motion.li)`
  width: 100%;
  list-style: none;
`;

const InvoiceList = ({ invoices }) => (
  <section>
    <ul>
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
    </ul>
  </section>
);

export default InvoiceList;
