const InvoiceFilterCheckbox = (props) => {
  const { status, active, updaterFn, text } = props;

  const onChangeHandler = () => {
    const toggledChecked = !active;

    updaterFn(toggledChecked);
  };

  return (
    <div className="invoice-filter-checkbox">
      <label
        className="invoice-filter-checkbox__label"
        htmlFor={`filter-${status}`}
      >
        <input
          className="invoice-filter-checkbox__input"
          id={`filter-${status}`}
          type="checkbox"
          checked={active}
          onChange={onChangeHandler}
        />
        <span className="invoice-filter-checkbox__filter-name">{text}</span>
      </label>
    </div>
  );
};

export default InvoiceFilterCheckbox;
