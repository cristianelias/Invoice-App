const InvoiceListHeader = (props) => {
  return (
    <header className="invoice-list-header">
      <nav>{props.children}</nav>
    </header>
  );
};

export default InvoiceListHeader;
