import { StrictMode } from "react";
import { render } from "react-dom";
import Header from "./Header";
import InvoiceList from "./InvoiceList";
import NewInvoice from "./NewInvoice";

const App = () => {
  return (
    <div>
      <Header />
      <InvoiceList />
      <NewInvoice />
    </div>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
