// Components
import InvoiceForm from "../../components/InvoiceForm/InvoiceForm";
import Overlay from "../../components/Overlay/Overlay";
import InvoiceFormTitle from "../../components/InvoiceForm/InvoiceFormTitle/InvoiceFormTitle";

// Styles
import "./NewInvoicePage.css";

// Data
import initialValues from "../../components/InvoiceForm/initialValues";

const NewInvoicePage = (props) => {
  const { setInvoices, setLoading } = props;

  return (
    <div className="new-invoice-page">
      <Overlay />
      <InvoiceForm
        initialValues={initialValues}
        title={<InvoiceFormTitle />}
        setLoading={setLoading}
        setInvoices={setInvoices}
      />
    </div>
  );
};

export default NewInvoicePage;
