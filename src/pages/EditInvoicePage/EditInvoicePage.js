// Dependencies
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// Components
import EditInvoiceForm from "../../components/InvoiceForm/EditInvoiceForm/EditInvoiceForm";
import InvoiceFormTitle from "../../components/InvoiceForm/InvoiceFormTitle/InvoiceFormTitle";
import InvoiceFormFooter from "../../components/InvoiceForm/InvoiceFormFooter/InvoiceFormFooter";

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
      {invoice && invoice.id !== undefined && (
        <EditInvoiceForm invoice={invoice} setInvoice={setInvoice} />
      )}
    </div>
  );
};

export default EditInvoicePage;
