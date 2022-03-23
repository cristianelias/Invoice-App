// Dependencies
import styled from "@emotion/styled";

// Styles
import StyledInput from "./Styled/StyledInput";

const TotalInput = styled(StyledInput)`
  background-color: inherit !important;
`;

const ItemTotalField = ({ name, fields }) => {
  const value = [fields.price, fields.qty]
    .map((value) => (isNaN(parseInt(value)) ? 0 : parseInt(value)))
    .reduce((current, next) => {
      return current * next;
    }, 1);

  return <TotalInput name={name} value={value} readOnly="readOnly" />;
};

export default ItemTotalField;
