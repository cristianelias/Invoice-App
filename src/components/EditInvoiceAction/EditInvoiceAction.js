// Components
import TertiaryButton from "../Button/TertiaryButton/TertiaryButton";

const EditInvoiceAction = ({ id }) => {
  return <TertiaryButton linkTo={`/view-invoice/${id}/edit`} text="Edit" />;
};
export default EditInvoiceAction;
