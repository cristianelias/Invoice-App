import Invoice from "../Invoice/Invoice";

import "./InvoiceList.css";

const InvoiceList = (props) => {
  const { invoices } = props;
  return (
    <section>
      <ul>
        {invoices.map((invoice) => (
          <li className="invoice-list__item" key={invoice.id}>
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
