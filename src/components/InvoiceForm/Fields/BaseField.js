// Dependencies
import { Field, useField, ErrorMessage } from "formik";
import { cloneElement } from "react";

// Components
import StyledField from "./Styled/StyledField";
import StyledLabel from "./Styled/StyledLabel";
import getStyledErrorMessage from "./Styled/getStyledErrorMessage";

const BaseField = ({
  label,
  name,
  classes,
  type,
  min,
  max,
  placeholder,
  children,
}) => {
  const { setTouched } = useField(name)[2];
  const StyledErrorMessage = getStyledErrorMessage(ErrorMessage);

  return (
    <Field name={name}>
      {({ field: { value, onChange }, meta: { error, touched } }) => {
        const errorClass = error && touched ? "error" : "";

        return (
          <StyledField className={`${classes} ${errorClass}`}>
            <StyledLabel className={`${errorClass}`} htmlFor={name}>
              {label}
            </StyledLabel>

            {cloneElement(children, {
              label,
              name,
              classes,
              type,
              min,
              max,
              placeholder,
              className: `${errorClass}`,
              value,
              onChange: (e) => {
                setTouched(name, true);
                onChange(e);
              },
            })}

            <StyledErrorMessage name={name}>
              {(msg) => <div className="validation-message">{msg}</div>}
            </StyledErrorMessage>
          </StyledField>
        );
      }}
    </Field>
  );
};

export default BaseField;
