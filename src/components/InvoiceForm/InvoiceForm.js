// Components
import Field from "./Field/Field";
import Gradient from "../Gradient/Gradient";

// Styles
import "./InvoiceForm.css";

// Assets
import iconTrashCan from "../../assets/icon-delete.svg";

const InvoiceForm = (props) => {
  const { title } = props;

  return (
    <div className="invoice-form">
      <form className="invoice-form__form" action="">
        {title}
        <h2 className="h2">Bill From</h2>

        <section className="three-input-container">
          <Field
            fieldName="fromStreetAddress"
            labelText="Street Address"
            validationText="This field is required, troesma."
            inputType="text"
          />

          <Field
            fieldName="fromCity"
            labelText="City"
            validationText="This field is required, troesma."
            inputType="text"
          />

          <Field
            fieldName="fromPostCode"
            labelText="Post Code"
            validationText="This field is required, troesma."
            inputType="text"
          />

          <Field
            fieldName="fromCountry"
            labelText="Country"
            validationText="This field is required, troesma."
            inputType=""
          />
        </section>

        <section>
          <h2 className="h2">Bill To</h2>

          <Field
            fieldName="clientName"
            labelText="Client's Name"
            validationText="This field is required, troesma."
            inputType="text"
          />

          <Field
            fieldName="clientEmail"
            labelText="Client's Email"
            validationText="This field is required, troesma."
            inputType="email"
          />

          <Field
            fieldName="toStreetAddress"
            labelText="Street Address"
            validationText="This field is required, troesma."
            inputType="text"
          />

          <section className="three-input-container">
            <Field
              fieldName="toCity"
              labelText="City"
              validationText="This field is required, troesma."
              inputType="text"
            />

            <Field
              fieldName="toPostCode"
              labelText="Post Code"
              validationText="This field is required, troesma."
              inputType="text"
            />

            <Field
              fieldName="toCountry"
              labelText="Country"
              validationText="This field is required, troesma."
              inputType="text"
            />
          </section>
        </section>

        <section className="two-input-container">
          <Field
            fieldName="invoiceDate"
            labelText="Invoice Date"
            validationText="This field is required, troesma."
            inputType="date"
            placeholder="21 Aug 2021"
          />

          <Field
            fieldName="paymentTerms"
            labelText="Payment Terms"
            validationText="This field is required, troesma."
            inputType="text"
          />

          <Field
            fieldName="projectDescription"
            labelText="Project Description"
            validationText="This field is required, troesma."
            inputType="text"
            placeholder="e.g. Graphic Design Service"
          />
        </section>

        <section>
          <h1 className="item-list">Item List</h1>

          <section className="five-fields-container">
            <Field
              fieldName="itemName"
              labelText="Item Name"
              validationText="This field is required, troesma."
              inputType="text"
              classes="five-fields-container__column-item-name"
            />

            <Field
              fieldName="Qty"
              labelText="Qty."
              validationText="This field is required, troesma."
              inputType="number"
              classes="five-fields-container__column-qty"
            />

            <Field
              fieldName="price"
              labelText="Price"
              validationText="This field is required, troesma."
              inputType="number"
              classes="five-fields-container__column-price"
            />

            <div className="field__total five-fields-container__column-total">
              <h3 className="field__label">Total</h3>
              <div>0.00</div>
            </div>

            <button className="field__button-delete field__button-delete--separation-top">
              <img src={iconTrashCan} alt="Trash icon. Click to delete."></img>
            </button>
          </section>

          <section className="five-fields-container five-fields-container--hidden-labels">
            <Field
              fieldName="itemName"
              labelText="Item Name"
              validationText="This field is required, troesma."
              inputType="text"
              classes="five-fields-container__column-item-name"
            />

            <Field
              fieldName="qty"
              labelText="Qty."
              validationText="This field is required, troesma."
              inputType="number"
              classes="five-fields-container__column-qty"
            />

            <Field
              fieldName="price"
              labelText="Price"
              validationText="This field is required, troesma."
              inputType="number"
              classes="five-fields-container__column-price"
            />

            <div className="field__total five-fields-container__column-total">
              <h3 className="field__title--hidden">Total</h3>
              <div>0.00</div>
            </div>

            <button className="field__button-delete">
              <img src={iconTrashCan} alt="Trash icon. Click to delete."></img>
            </button>
          </section>

          <button
            className="five-fields-container__add-new-item"
            name="NewItem"
            type="button"
          >
            + Add New Item
          </button>
        </section>
        <p className="field__validation five-fields-container__validation">
          - All fields must be added
        </p>
      </form>

      <div className="invoice-form__gradient">
        <Gradient />
      </div>
    </div>
  );
};

export default InvoiceForm;
