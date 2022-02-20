// Dependencies
import { useNavigate } from "react-router-dom";
import ErrorButton from "../Button/ErrorButton/ErrorButton";

// Clients
import firebaseInvoiceClient from "../../clients/firebase/firebaseInvoiceClient";

const DeleteAction = ({ id }) => {
  const navigate = useNavigate();

  const deleteInvoice = async () => {
    await firebaseInvoiceClient.deleteInvoice({
      id,
      onSuccess: () => navigate("/", { replace: true }),
      onError: (err) => console.log(err),
    });
  };

  return <ErrorButton onClick={deleteInvoice} text="Delete" />;
};
export default DeleteAction;
