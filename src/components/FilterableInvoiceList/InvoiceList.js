import Invoice from "./Invoice";

const InvoiceList = (props) => {
  const { invoices } = props;
  return (
    <section>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id}>
            <Invoice
              id={invoice.id}
              paymentDue={invoice.paymentDue}
              clientName={invoice.clientName}
              total={invoice.total}
              status={invoice.status}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default InvoiceList;
