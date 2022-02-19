// Components
import InvoiceForm from "../../components/InvoiceForm/InvoiceForm";
import Overlay from "../../components/Overlay/Overlay";
import InvoiceFormTitle from "../../components/InvoiceForm/InvoiceFormTitle/InvoiceFormTitle";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

// Styles
import "./NewInvoicePage.css";

// Data
import getInitialValues from "../../components/InvoiceForm/getInitialValues";

const NewInvoicePage = () => {
  return (
    <div className="new-invoice-page">
      <Overlay />
      <ScrollToTop />
      <InvoiceForm
        initialValues={getInitialValues()}
        title={<InvoiceFormTitle />}
      />
    </div>
  );
};

export default NewInvoicePage;
