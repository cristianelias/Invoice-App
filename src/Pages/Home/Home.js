// Layout
import MainLayout from "../../layouts/MainLayout";

// Components
import FilterableInvoiceList from "../../components/FilterableInvoiceList/FilterableInvoiceList";

import "./Home.css";

const Home = () => (
  <MainLayout>
    <FilterableInvoiceList />
  </MainLayout>
);

export default Home;
