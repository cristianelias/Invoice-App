/* eslint-disable jsx-a11y/no-onchange */
// Dependencies
import styled from "@emotion/styled";
import { useField } from "formik";

// Styles
import StyledInput from "./Styled/StyledInput";

const StyledSelect = styled(StyledInput)`
  -webkit-appearance: none;
`;

const InvoiceSelectField = (props) => {
  const { values, value, name, onChange } = props;
  const { setTouched } = useField(name)[2];

  return (
    <StyledSelect
      as={"select"}
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
    </StyledSelect>
  );
};

export default InvoiceSelectField;
