import PaymentStatusButton from "./PaymentStatusButton";
const Invoice = (props) => {
  const { id, paymentDue, clientName, total, status } = props;
  return (
    <article className="invoice-container">
      <span>{id}</span>
      <span>{paymentDue}</span>
      <span>{clientName}</span>
      <span>$ {total}</span>
      <PaymentStatusButton status={status} />
      <span>➡️</span>
    </article>
  );
};

export default Invoice;
