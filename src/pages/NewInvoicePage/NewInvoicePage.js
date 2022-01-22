// Components
import InvoiceForm from "../../components/InvoiceForm/InvoiceForm";
import InvoiceFormTitle from "../../components/InvoiceForm/InvoiceFormTitle/InvoiceFormTitle";
import NewInvoiceFormFooter from "../../components/InvoiceForm/InvoiceFormFooter/InvoiceFormFooter";
import Overlay from "../../components/Overlay/Overlay";

// Styles
import "./NewInvoicePage.css";

const NewInvoicePage = () => {
  return (
    <div>
      <Overlay />
      <div className="new-invoice-page">
        <InvoiceForm
          title={<InvoiceFormTitle />}
          footer={<NewInvoiceFormFooter />}
        />
      </div>
    </div>
  );
};

export default NewInvoicePage;
