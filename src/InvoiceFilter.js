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
    <div>
      <label htmlFor={`filter-${status}`}>
        <input
          id={`filter-${status}`}
          type="checkbox"
          checked={active}
          onChange={onChangeHandler}
        />
        {text}
      </label>
    </div>
  );
};

export default InvoiceFilter;
