// Components
import CreateForm from "../../components/Form/CreateForm";
import Overlay from "../../components/Overlay";
import ScrollToTop from "../../components/ScrollToTop";

// Styles
import "./NewInvoicePage.css";

const NewInvoicePage = () => {
  return (
    <div className="new-invoice-page">
      <Overlay />
      <ScrollToTop />
      <CreateForm />
    </div>
  );
};

export default NewInvoicePage;
