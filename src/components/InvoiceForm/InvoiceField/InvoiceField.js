// Dependencies
import { Field, useField, ErrorMessage } from "formik";

// Styles
import "./InvoiceField.css";

const InvoiceField = (props) => {
  const { text, name, classes, placeholder } = props;
  const { setTouched } = useField(name)[2];

  return (
    <Field name={name} className={`field ${classes ? classes : ""}`}>
      {({ field: { value, onChange } }) => (
        <>
          <label className="field__label" htmlFor={name}>
            {text}
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
        </>
      )}
    </Field>
  );
};

export default InvoiceField;
