const PaymentStatusButton = (props) => {
  const { status } = props;
  return (
    <span>
      {(() => {
        if (status === "paid") {
          return "🟢";
        } else if (status === "draft") {
          return "⚪️";
        } else {
          return "🔴";
        }
      })()}
      {status}
    </span>
  );
};

export default PaymentStatusButton;
