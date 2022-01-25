// Dependencies
import { useState, useLayoutEffect } from "react";

// Components
import FormRow from "./FormRow/FormRow";

// Styles
import "./FormRowList.css";

const getNewRow = (rowIndex, handleChange) => [
  {
    fieldName: `${rowIndex}-itemName`,
    labelText: "Item Name",
    inputType: "text",
    classes: "five-fields-container__column-item-name",
    onChange: handleChange,
  },
  {
    multiplicandField: true,
    fieldName: `${rowIndex}-qty`,
    labelText: "Qty.",
    inputType: "number",
    classes: "five-fields-container__column-qty",
    onChange: handleChange,
  },
  {
    multiplierField: true,
    fieldName: `${rowIndex}-price`,
    labelText: "Price",
    inputType: "number",
    classes: "five-fields-container__column-price",
    onChange: handleChange,
  },
];

const FormRowList = ({ handleChange }) => {
  const [currentRowIndex, setCurrentRowIndex] = useState(-1);
  const [rows, setRows] = useState([]);

  const addRow = () => {
    const newRowIndex = currentRowIndex + 1;
    setCurrentRowIndex(newRowIndex);
    setRows([...rows, getNewRow(newRowIndex, handleChange)]);
    window.rows = rows;
  };

  const removeRow = (rowId) => {};

  useLayoutEffect(() => {
    addRow();
  }, []);

  return (
    <section>
      <h1 className="item-list">Item List</h1>

      {rows.map((currentRow, index) => {
        return <FormRow key={index} rowIndex={index} fields={currentRow} />;
      })}
      <button
        className="five-fields-container__add-new-item button-component tertiary-button"
        name="NewItem"
        type="button"
        onClick={addRow}
      >
        + Add New Item
      </button>
    </section>
  );
};

export default FormRowList;
