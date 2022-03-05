// Dependencies
import { FieldArray } from "formik";
import styled from "@emotion/styled";

// Components
import TertiaryButton from "../Button/TertiaryButton";

// Data
import chargesValues from "./utils/chargesValues";

// Assets
import iconTrashCan from "../../assets/icon-delete.svg";

// Styles
const Container = styled.fieldset`
  .validation-message {
    display: none;
  }
`;

const ItemListHeading = styled.h2`
  font-weight: bold;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: -0.375px;
  color: #777f98;
  margin: 32px 0 16px 0;

  @media (max-width: 616px) {
    margin: 66px 0 24px 0;
  }
`;

const ChargesContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 12% 20% 12% 4%;
  gap: 16px 3%;

  &.fieldset-charges__group-0 label {
    visibility: visible;
  }

  & label {
    visibility: hidden;
  }

  & .validation {
    display: none;
  }

  @media (max-width: 500px) {
    height: 176px;
    margin-bottom: 48px;
    grid-template-columns: 20% 34% 21% 10%;
    gap: 24px 5%;

    &.fieldset-charges__group label {
      visibility: visible;
    }
  }
`;

const DeleteFieldButton = styled.button`
  margin-top: 32px;

  @media (max-width: 650px) {
    margin-top: 30px;
  }

  @media (max-width: 500px) {
    padding: 0 10px;
  }
`;

const TrashIcon = styled.img`
  @media (max-width: 650px) {
    width: 15px;
  }
`;

const AddChargesButton = styled(TertiaryButton)`
  width: 100%;
  margin: 18px 0 39px 0;

  @media (max-width: 500px) {
    width: 100%;
    margin: 0px 0 39px;
  }
`;

const ChargesValidation = styled.p`
  padding-bottom: 42px;
  color: rgb(236, 87, 87);
  font-size: 0.625rem;
  font-weight: bold;
  line-height: 1rem;
`;

const FieldsetCharges = ({ createField, values, errors, touched }) => (
  <Container>
    <ItemListHeading>Item List</ItemListHeading>
    <FieldArray name="charges">
      {({ push, remove }) => (
        <div>
          {values.charges.map((item, index) => (
            <ChargesContainer
              key={index}
              className={`fieldset-charges__group-${index}`}
            >
              {Object.keys(item).map((fieldName) =>
                createField({
                  fieldsetId: `charges[${index}]`,
                  name: fieldName,
                  index: `${index}x${fieldName}`,
                  fields: values.charges[index],
                })
              )}

              <DeleteFieldButton
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  remove(index);
                }}
              >
                <TrashIcon
                  src={iconTrashCan}
                  alt="Trash icon. Click to delete."
                />
              </DeleteFieldButton>
            </ChargesContainer>
          ))}
          <AddChargesButton
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              push(chargesValues);
            }}
            text="+ Add New Item"
          />
        </div>
      )}
    </FieldArray>
    {errors && errors.charges && touched && touched.charges && (
      <ChargesValidation>- All fields must be added</ChargesValidation>
    )}
    {values.charges &&
      Array.isArray(values.charges) &&
      values.charges.length === 0 && (
        <ChargesValidation>- An item must be added</ChargesValidation>
      )}
  </Container>
);

export default FieldsetCharges;
