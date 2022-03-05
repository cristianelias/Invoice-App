// Dependencies
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// Components
import EditForm from "../../components/Form/EditForm";
import ScrollToTop from "../../components/ScrollToTop";
import Overlay from "../../components/Overlay";

// Styles
import "./EditInvoicePage.css";

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
    <div className="edit-invoice-page">
      <Overlay />
      <ScrollToTop />
      {invoice && invoice.id !== undefined && <EditForm invoice={invoice} />}
    </div>
  );
};

export default EditInvoicePage;
