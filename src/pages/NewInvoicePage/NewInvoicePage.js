// Components
import InvoiceForm from "../../components/InvoiceForm/InvoiceForm";
import Overlay from "../../components/Overlay/Overlay";
import InvoiceFormFooter from "../../components/InvoiceForm/InvoiceFormFooter/InvoiceFormFooter";
import InvoiceFormTitle from "../../components/InvoiceForm/InvoiceFormTitle/InvoiceFormTitle";

// Styles
import "./NewInvoicePage.css";

// Data
import initialValues from "../../components/InvoiceForm/initialValues";

const NewInvoicePage = () => {
  return (
    <div className="new-invoice-page">
      <Overlay />
      <InvoiceForm
        initialValues={initialValues}
        title={<InvoiceFormTitle />}
        footer={<InvoiceFormFooter />}
      />
    </div>
  );
};

export default NewInvoicePage;
