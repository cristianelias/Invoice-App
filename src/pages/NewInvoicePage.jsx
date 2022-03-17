// Components
import CreateForm from "../components/Form/CreateForm";
import Overlay from "../components/Overlay";
import ScrollToTop from "../components/ScrollToTop";

const NewInvoicePage = () => {
  return (
    <>
      <Overlay />
      <ScrollToTop />
      <CreateForm />
    </>
  );
};

export default NewInvoicePage;
