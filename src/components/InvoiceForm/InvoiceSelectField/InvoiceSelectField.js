// Dependencies
import { Field, useField, ErrorMessage } from "formik";

// Styles
import "./InvoiceSelectField.css";

const InvoiceSelectField = (props) => {
  const { label, name, classes, type, values } = props;
  const { setTouched } = useField(name)[2];

  return (
    <Field name={name}>
      {({ field: { value, onChange }, meta: { error, touched } }) => (
        <div className={`${classes} ${error && touched ? "field--error" : ""}`}>
          <ErrorMessage name={name} className="field__validation">
            {(msg) => <div className="error">{msg}</div>}
          </ErrorMessage>
          <label className="field__label" htmlFor={name}>
            {label}
          </label>
          <select
            className="field__input field__select"
            name={name}
            value={value}
            onChange={(e) => {
              setTouched(name, true);
              onChange(e);
            }}
          >
            {values.map((currentVal, index) => {
              return (
                <option
                  key={index}
                  value={currentVal.value}
                  selected={value.selected}
                >
                  {currentVal.text}
                </option>
              );
            })}
          </select>
        </div>
      )}
    </Field>
  );
};

export default InvoiceSelectField;
