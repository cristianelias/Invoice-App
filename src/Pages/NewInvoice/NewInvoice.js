import Overlay from "../../components/Overlay/Overlay";
import NewInvoiceForm from "../../components/NewInvoiceForm/NewInvoiceForm";
import FilterableInvoiceList from "../../components/FilterableInvoiceList/FilterableInvoiceList";

const NewInvoice = () => {
  return (
    <div className="app-container">
      <Overlay />
      <FilterableInvoiceList />
      <NewInvoiceForm />
    </div>
  );
};

export default NewInvoice;
