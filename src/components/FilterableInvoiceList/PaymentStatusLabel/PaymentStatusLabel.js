// Styles
import "./PaymentStatusLabel.css";

const PaymentStatusLabel = (props) => {
  const { status, fixedSize } = props;
  const baseClassName = "payment-status-label";

  const getModifiers = () => {
    const spacer = " ";
    const fixedSizeModifier = `${baseClassName}--fixed-size`;

    const modifierPerStatus = {
      paid: `${baseClassName}--paid`,
      pending: `${baseClassName}--pending`,
      draft: `${baseClassName}--draft`,
    };

    let modifiers = modifierPerStatus[status];

    if (fixedSize) {
      modifiers += `${spacer}${fixedSizeModifier}`;
    }

    return modifiers;
  };

  return (
    <span className={`${baseClassName} ${getModifiers()}`}>
      <div className="payment-status-label__circle"></div>
      <span className="payment-status-label__text">{status}</span>
    </span>
  );
};

export default PaymentStatusLabel;
