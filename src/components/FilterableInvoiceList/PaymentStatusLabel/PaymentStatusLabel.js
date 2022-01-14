// Styles
import "./PaymentStatusLabel.css";

const PaymentStatusLabel = (props) => {
  const { status } = props;

  const modifierPerStatus = {
    paid: "--paid",
    pending: "--pending",
    draft: "--draft",
  };

  const currentModifier = modifierPerStatus[status];

  return (
    <span
      className={`payment-status-label 
      payment-status-label${currentModifier}`}
    >
      <div className="payment-status-label__circle"></div>
      <span className="payment-status-label__text">{status}</span>
    </span>
  );
};

export default PaymentStatusLabel;
