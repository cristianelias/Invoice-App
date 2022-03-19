// Dependencies
import { useEffect, useState } from "react";

// Clients
import { getInvoices } from "../../clients/localStorageClient";

// Context
import InvoiceContext from "../../state/InvoiceContext";

const InvoiceContextProvider = ({ children }) => {
  const [invoices, setInvoices] = useState(null);

  useEffect(() => {
    getInvoices({
      onSuccess: (invoices) => setInvoices(invoices),
    });
  }, []);

  return (
    <InvoiceContext.Provider value={{ invoices, setInvoices }}>
      {children}
    </InvoiceContext.Provider>
  );
};
export default InvoiceContextProvider;
