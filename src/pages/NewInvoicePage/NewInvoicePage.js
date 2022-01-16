// Components
import NewInvoiceForm from "../../components/NewInvoiceForm/NewInvoiceForm";
import Overlay from "../../components/Overlay/Overlay";

// Styles
import "./NewInvoicePage.css";

const NewInvoicePage = () => {
  return (
    <div>
      <Overlay />
      <NewInvoiceForm />
    </div>
  );
};

export default NewInvoicePage;
