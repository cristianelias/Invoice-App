import { StrictMode } from "react";
import { render } from "react-dom";
import Sidebar from "./Sidebar";
import InvoiceList from "./InvoiceList";

const App = () => {
  return (
    <div>
      <Sidebar />
      <InvoiceList />
    </div>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
