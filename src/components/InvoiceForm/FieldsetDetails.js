// Dependencies
import styled from "@emotion/styled";

// Styles
const Container = styled.fieldset`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 500px) {
    grid-template-columns: 100%;
    gap: 24px;
  }
`;

const FieldsetDetails = ({ createField, values }) => (
  <Container>
    {Object.keys(values.details).map((fieldName, index) =>
      createField({
        fieldsetId: "details",
        name: fieldName,
        index,
      })
    )}
  </Container>
);

export default FieldsetDetails;
