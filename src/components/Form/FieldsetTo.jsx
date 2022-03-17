// Dependencies
import styled from "@emotion/styled";

// Styled
import SecondaryHeading from "./Styled/SecondaryHeading";

// Styles
const Container = styled.fieldset`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 48px;

  @media (max-width: 500px) {
    grid-template-columns: 47% 47%;
    margin-bottom: 40px;
  }
`;

const FieldsetTo = ({ createField, values }) => (
  <Container>
    <SecondaryHeading>Bill To</SecondaryHeading>

    {Object.keys(values.to).map((fieldName, index) =>
      createField({ fieldsetId: "to", name: fieldName, index })
    )}
  </Container>
);

export default FieldsetTo;
