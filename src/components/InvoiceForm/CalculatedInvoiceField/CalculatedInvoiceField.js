// Dependencies
import { Field, useField, ErrorMessage } from "formik";

// Styles
import "./CalculatedInvoiceField.css";

const CalculatedInvoiceField = (props) => {
  const { text, name, classes, placeholder, multiplicand, multiplier } = props;

  const calculateValue = () => {
    if (Number.isInteger(multiplier) || Number.isInteger(multiplicand)) {
      return 0;
    }

    return parseInt(multiplicand) * parseInt(multiplier);
  };

  return (
    <Field name={name} className={`field ${classes ? classes : ""}`}>
      {() => (
        <>
          <label className="field__label" htmlFor={name}>
            {text}
          </label>
          <input
            className="field__input"
            name={name}
            placeholder={placeholder}
            value={calculateValue()}
          />
        </>
      )}
    </Field>
  );
};

export default CalculatedInvoiceField;
