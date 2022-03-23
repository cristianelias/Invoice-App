// Dependencies
import PrimaryButton from "../Button/PrimaryButton";
import { useContext } from "react";

// Clients
import { markInvoiceAsPaid } from "../../clients/localStorageClient";

// Context
import InvoiceContext from "../../state/InvoiceContext";

const MarkAsPaidAction = ({ id, status }) => {
  const { setInvoices } = useContext(InvoiceContext);

  if (status === "paid" || status === "draft") {
    return null;
  }

  const markAsPaid = async () => {
    markInvoiceAsPaid({
      id,
      onSuccess: (invoices) => {
        setInvoices(invoices);
      },
      onError: (err) => console.log("Agregar toast", err),
    });
  };
  return <PrimaryButton text="Mark as Paid" onClick={markAsPaid} />;
};
export default MarkAsPaidAction;
