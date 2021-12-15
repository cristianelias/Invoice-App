const InvoiceFilter = (props) => {
  const { status, active, updaterFn, filterInvoices, text } = props;

  function onChangeHandler() {
    const toggledChecked = !active;

    updaterFn(toggledChecked);

    filterInvoices({
      status,
      active: toggledChecked,
    });
  }

  return (
    <div className="invoice-filter-container">
      <label className="invoice-filter-label" htmlFor={`filter-${status}`}>
        <input
          className="invoice-filter-checkbox"
          id={`filter-${status}`}
          type="checkbox"
          checked={active}
          onChange={onChangeHandler}
        />
        <span className="invoice-filter-text">{text}</span>
      </label>
    </div>
  );
};

export default InvoiceFilter;
