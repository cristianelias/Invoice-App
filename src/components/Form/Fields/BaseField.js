// Dependencies
import styled from "@emotion/styled";
import { Field, useField, ErrorMessage } from "formik";
import { cloneElement } from "react";

// Components
import StyledField from "./Styled/StyledField";
import StyledLabel from "./Styled/StyledLabel";

// Styles
const StyledValidationContainer = styled(ErrorMessage)`
  display: none;
  color: #ec5757;
  font-weight: normal;
  font-size: 10px;
  line-height: 15px;
`;

const StyledError = styled.div`
  margin-top: 10px;
`;

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

            <StyledValidationContainer name={name}>
              {(msg) => <StyledError className="validation">{msg}</StyledError>}
            </StyledValidationContainer>
          </StyledField>
        );
      }}
    </Field>
  );
};

export default BaseField;
