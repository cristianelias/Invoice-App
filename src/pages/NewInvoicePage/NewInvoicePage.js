// Components
import InvoiceForm from "../../components/InvoiceForm/InvoiceForm";
import InvoiceFormTitle from "../../components/InvoiceForm/InvoiceFormTitle/InvoiceFormTitle";
import InvoiceFormFooter from "../../components/InvoiceForm/InvoiceFormFooter/InvoiceFormFooter";
import Overlay from "../../components/Overlay/Overlay";

// Styles
import "./NewInvoicePage.css";

const NewInvoicePage = () => {
  return (
    <div className="new-invoice-page">
      <Overlay />
      <InvoiceForm
        title={<InvoiceFormTitle />}
        footer={<InvoiceFormFooter />}
      />
    </div>
  );
};

export default NewInvoicePage;
