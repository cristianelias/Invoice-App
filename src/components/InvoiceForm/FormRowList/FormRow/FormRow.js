// Components
import Field from "../../Field/Field";

// Styles
import "./FormRow.css";

// Assets
import iconTrashCan from "../../../../assets/icon-delete.svg";

const FormRow = (props) => {
  const { fields, multiplicandFieldId, multiplierFieldId, rowIndex } = props;

  const calculateRowTotal = () => {
    const getField = (id) => fields.find((field) => field.id === id);

    return [getField(multiplicandFieldId), getField(multiplierFieldId)].reduce(
      (accum, field) => {
        if (field.value === undefined || field.value === 0) {
          return accum;
        }
        return accum + field.value;
      },
      0
    );
  };

  return (
    <section
      className={`five-fields-container ${
        rowIndex > 0 ? "five-fields-container--hidden-labels" : ""
      }`}
    >
      {fields.map((field, index) => {
        const {
          fieldName,
          labelText,
          inputType,
          classes,
          handleChange,
        } = field;
        return (
          <Field
            key={index}
            fieldName={fieldName}
            labelText={labelText}
            validationText="This field is required, troesma."
            inputType={inputType}
            classes={classes}
            onChange={handleChange}
          />
        );
      })}
      <div className="field__total five-fields-container__column-total">
        <h3 className="field__label">Total</h3>
        <div>{calculateRowTotal()}</div>
      </div>
      <button className="field__button-delete field__button-delete--separation-top">
        <img src={iconTrashCan} alt="Trash icon. Click to delete."></img>
      </button>
    </section>
  );
};

export default FormRow;
