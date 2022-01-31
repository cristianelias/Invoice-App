// Dependencies
import { Field, useField, ErrorMessage } from "formik";

// Styles
import "./InvoiceField.css";

const InvoiceField = (props) => {
  const { label, name, placeholder, classes } = props;
  const { setTouched } = useField(name)[2];

  return (
    <Field name={name}>
      {({ field: { value, onChange }, meta: { error } }) => (
        <div className={classes}>
          <label className="field__label" htmlFor={name}>
            {label}
            <ErrorMessage name={name} className="field__validation">
              {(msg) => <div className="error">{msg}</div>}
            </ErrorMessage>
          </label>
          <input
            className="field__input"
            name={name}
            {...placeholder}
            value={value}
            onChange={(e) => {
              setTouched(name, true);
              onChange(e);
            }}
          />
        </div>
      )}
    </Field>
  );
};

export default InvoiceField;
