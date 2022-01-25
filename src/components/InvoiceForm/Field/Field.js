// Styles
import "./Field.css";

const Field = (props) => {
  const {
    fieldName,
    labelText,
    validationText,
    placeholder,
    inputType,
    classes,
    value,
    onChange,
  } = props;

  return (
    <div className={`field ${classes ? classes : ""}`}>
      <label className="field__label" htmlFor={fieldName}>
        {labelText}
        <span className="field__validation">{validationText}</span>
      </label>
      <input
        id={fieldName}
        className="field__input"
        type={inputType}
        name={fieldName}
        placeholder={placeholder ? placeholder : ""}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Field;
