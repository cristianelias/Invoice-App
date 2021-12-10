const InvoiceFilter = (props) => {
  const { status, active, updaterFn, filterInvoices } = props;

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
        Filter {status}
        <input
          id={`filter-${status}`}
          type="checkbox"
          checked={active}
          onChange={onChangeHandler}
        />
      </label>
    </div>
  );
};

export default InvoiceFilter;
