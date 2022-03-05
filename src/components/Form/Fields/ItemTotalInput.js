// Styles
import StyledInput from "./Styled/StyledInput";

const ItemTotalField = ({ name, fields }) => {
  const value = [fields.price, fields.qty]
    .map((value) => (isNaN(parseInt(value)) ? 0 : parseInt(value)))
    .reduce((current, next) => {
      return current * next;
    }, 1);

  return <StyledInput name={name} value={value} readOnly="readOnly" />;
};

export default ItemTotalField;
