// Dependencies
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

// Styled
import ErrorButton from "../Button/ErrorButton";

// Clients
import { deleteInvoice } from "../../clients/localStorageClient";

// Context
import InvoiceContext from "../../state/InvoiceContext";

const DeleteAction = ({ id }) => {
  const navigate = useNavigate();
  const { setInvoices } = useContext(InvoiceContext);

  const handler = () =>
    deleteInvoice({
      id,
      onSuccess: (invoices) => {
        setInvoices(invoices);
        navigate("/", { replace: true });
      },
    });

  return <ErrorButton onClick={handler} text="Delete" />;
};
export default DeleteAction;
