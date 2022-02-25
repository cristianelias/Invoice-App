// Dependencies
import PrimaryButton from "../Button/PrimaryButton";

// Clients
import firebaseInvoiceClient from "../../clients/firebase/firebaseInvoiceClient";

const MarkAsPaidAction = ({ id, status }) => {
  if (status === "paid") {
    return null;
  }

  const markAsPaid = async () => {
    await firebaseInvoiceClient.markInvoiceAsPaid({
      id,
      onSuccess: () => {
        console.log("Agregar toast");
      },
      onError: (err) => console.log("Agregar toast", err),
    });
  };
  return <PrimaryButton text="Mark as Paid" onClick={markAsPaid} />;
};
export default MarkAsPaidAction;
