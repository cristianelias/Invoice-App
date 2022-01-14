// Layout
import MainLayout from "../../layouts/MainLayout";

// Components
import Overlay from "../../components/Overlay/Overlay";
import NewInvoiceForm from "../../components/NewInvoiceForm/NewInvoiceForm";
import FilterableInvoiceList from "../../components/FilterableInvoiceList/FilterableInvoiceList";

import "./NewInvoice.css";

const NewInvoice = () => (
  <MainLayout>
    <Overlay />
    <FilterableInvoiceList />
    <NewInvoiceForm />
  </MainLayout>
);

export default NewInvoice;
