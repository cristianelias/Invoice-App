// Components
import NewInvoiceForm from "../../components/InvoiceForm/NewInvoiceForm/NewInvoiceForm";
import Overlay from "../../components/Overlay/Overlay";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

// Styles
import "./NewInvoicePage.css";

const NewInvoicePage = () => {
  return (
    <div className="new-invoice-page">
      <Overlay />
      <ScrollToTop />
      <NewInvoiceForm />
    </div>
  );
};

export default NewInvoicePage;
