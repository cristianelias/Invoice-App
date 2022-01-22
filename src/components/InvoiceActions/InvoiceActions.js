// Components
import PrimaryButton from "../Button/PrimaryButton/PrimaryButton";
import TertiaryButton from "../Button/TertiaryButton/TertiaryButton";
import ErrorButton from "../Button/ErrorButton/ErrorButton";

// Styles
import "./InvoiceActions.css";

const InvoiceActions = (props) => {
  const { id } = props;

  return (
    <div className="invoice-actions">
      <TertiaryButton linkTo={`/view-invoice/${id}/edit`} text="Edit" />

      <ErrorButton linkTo="/" text="Delete" />

      <PrimaryButton text="Mark as Paid" />
    </div>
  );
};

export default InvoiceActions;
