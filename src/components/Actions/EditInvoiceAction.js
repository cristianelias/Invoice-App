// Components
import TertiaryButton from "../Button/TertiaryButton";

const EditInvoiceAction = ({ id }) => {
  return <TertiaryButton linkTo={`/view-invoice/${id}/edit`} text="Edit" />;
};
export default EditInvoiceAction;
