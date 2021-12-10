const Invoice = (props) => {
  const { id, paymentDue, clientName, total, status } = props;
  return (
    <article>
      <span>{id} - </span>
      <span>{paymentDue} - </span>
      <span>{clientName} - </span>
      <span>$ {total} - </span>
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
      <span> ➡️ </span>
    </article>
  );
};

export default Invoice;
