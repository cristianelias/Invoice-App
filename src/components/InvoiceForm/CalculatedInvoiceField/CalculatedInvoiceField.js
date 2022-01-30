// Dependencies
import { Field } from "formik";

// Styles
import "./CalculatedInvoiceField.css";

const CalculatedInvoiceField = (props) => {
  const {
    text,
    name,
    fieldsetId,
    placeholder,
    multiplicand,
    multiplier,
  } = props;

  const calculateValue = () => {
    if (!Number.isInteger(multiplier) || !Number.isInteger(multiplicand)) {
      return 0;
    }

    return parseInt(multiplicand) * parseInt(multiplier);
  };

  return (
    <Field name={name}>
      {() => (
        <div className={`field field-${fieldsetId}-${name}`}>
          <label className="field__label" htmlFor={name}>
            {text}
          </label>
          <input
            className="field__input"
            name={name}
            placeholder={placeholder}
            value={calculateValue()}
            readOnly="readOnly"
          />
        </div>
      )}
    </Field>
  );
};

export default CalculatedInvoiceField;
