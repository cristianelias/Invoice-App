// Dependencies
import { useNavigate } from "react-router-dom";

// Components
import TertiaryButton from "../Button/TertiaryButton";

const EditInvoiceAction = ({ id }) => {
  const navigate = useNavigate();

  return (
    <TertiaryButton
      onClick={() => navigate(`/view-invoice/${id}/edit`, { replace: true })}
      text="Edit"
    />
  );
};
export default EditInvoiceAction;
