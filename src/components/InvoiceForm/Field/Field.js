const Field = (props) => {
  const {
    fieldName,
    labelText,
    validationText,
    placeholder,
    inputType,
    classes,
  } = props;

  return (
    <div className={`field ${classes ? classes : ""}`}>
      <label className="field__label" htmlFor={fieldName}>
        {labelText}
        <span className="field__validation">{validationText}</span>
      </label>
      <input
        className="field__input"
        type={inputType}
        name={fieldName}
        placeholder={placeholder ? placeholder : ""}
      />
    </div>
  );
};

export default Field;
