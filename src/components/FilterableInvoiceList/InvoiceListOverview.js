const InvoiceListOverview = (props) => {
  const { totalInvoices, showFullInfo } = props;

  return (
    <div className="invoice-list-headings-container">
      <h1 className="invoice-list-primary-heading">Invoices</h1>
      <h2 className="invoice-list-secondary-heading">
        {showFullInfo
          ? `There are ${totalInvoices} total invoices`
          : `${totalInvoices} invoices`}
      </h2>
    </div>
  );
};

export default InvoiceListOverview;
