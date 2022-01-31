// Dependencies
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// Components
import InvoiceForm from "../../components/InvoiceForm/InvoiceForm";
import InvoiceFormTitle from "../../components/InvoiceForm/InvoiceFormTitle/InvoiceFormTitle";
import InvoiceFormFooter from "../../components/InvoiceForm/InvoiceFormFooter/InvoiceFormFooter";

// Styles
import "./EditInvoicePage.css";

// Data
import initialValues from "../../components/InvoiceForm/initialValues";

const EditInvoicePage = (props) => {
  const { invoices } = props;
  const [, setInvoice] = useState({});
  const currentInvoiceId = useParams().id;

  useEffect(() => {
    const currentInvoice = invoices.filter(
      (inv) => inv.id === currentInvoiceId
    );

    setInvoice(currentInvoice[0]);
  }, [currentInvoiceId, invoices]);

  return (
    <div className="edit-invoice-page">
      <InvoiceForm
        initialValues={initialValues}
        title={<InvoiceFormTitle id={currentInvoiceId} edit={true} />}
        footer={<InvoiceFormFooter isEdit={true} />}
      />
    </div>
  );
};

export default EditInvoicePage;
