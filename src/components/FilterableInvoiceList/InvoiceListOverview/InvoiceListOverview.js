const InvoiceListOverview = (props) => {
  const { totalInvoices, showFullInfo } = props;

  return (
    <div className="invoice-list-overview">
      <h1 className="invoice-list-overview__title">Invoices</h1>
      <h2 className="invoice-list-overview__total">
        {showFullInfo
          ? `There are ${totalInvoices} total invoices`
          : `${totalInvoices} invoices`}
      </h2>
    </div>
  );
};

export default InvoiceListOverview;
