// Dependencies
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// Components
import EditForm from "../components/Form/EditForm";
import ScrollToTop from "../components/ScrollToTop";
import Overlay from "../components/Overlay";

// Styles
const Container = styled.div`
  grid-column: 3/4;
  margin-top: 32px;
`;
const EditInvoicePage = (props) => {
  const { invoices } = props;
  const [invoice, setInvoice] = useState({});
  const currentInvoiceId = useParams().id;

  useEffect(() => {
    const currentInvoice = invoices.filter(
      (inv) => inv.id === currentInvoiceId
    );
    setInvoice(currentInvoice[0]);
  }, [currentInvoiceId, invoices]);

  return (
    <Container>
      <Overlay />
      <ScrollToTop />
      {invoice && invoice.id !== undefined && <EditForm invoice={invoice} />}
    </Container>
  );
};

export default EditInvoicePage;
