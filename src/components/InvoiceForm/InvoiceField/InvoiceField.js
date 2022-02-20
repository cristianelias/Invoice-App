// Dependencies
import { Field, useField, ErrorMessage } from "formik";

// Styles
import "./InvoiceField.css";

const InvoiceField = (props) => {
  const { label, name, classes, type, min, max } = props;
  const { setTouched } = useField(name)[2];

  return (
    <Field name={name}>
      {({ field: { value, onChange }, meta: { error, touched } }) => (
        <div className={`${classes} ${error && touched ? "field--error" : ""}`}>
          <label className="field__label" htmlFor={name}>
            {label}
          </label>
          <input
            className="field__input"
            name={name}
            value={value}
            onChange={(e) => {
              setTouched(name, true);
              onChange(e);
            }}
            type={type}
            min={min}
            max={max}
          />
          <ErrorMessage name={name} className="field__validation">
            {(msg) => <div className="error">{msg}</div>}
          </ErrorMessage>
        </div>
      )}
    </Field>
  );
};

export default InvoiceField;
