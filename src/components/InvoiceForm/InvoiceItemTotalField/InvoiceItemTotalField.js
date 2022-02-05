// Dependencies
import { Field } from "formik";

// Styles
import "./InvoiceItemTotalField.css";

const InvoiceItemTotalField = (props) => {
  const { label, name, classes, fields } = props;

  const calculateValue = () =>
    [fields.price, fields.qty]
      .map((value) => (isNaN(parseInt(value)) ? 0 : parseInt(value)))
      .reduce((current, next) => {
        return current * next;
      }, 1);

  return (
    <Field name={name}>
      {() => (
        <div className={classes}>
          <label className="field__label" htmlFor={name}>
            {label}
          </label>
          <input
            className="field__input"
            name={name}
            value={calculateValue()}
            readOnly="readOnly"
          />
        </div>
      )}
    </Field>
  );
};

export default InvoiceItemTotalField;
