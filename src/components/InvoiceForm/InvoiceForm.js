// Components
import Gradient from "../Gradient/Gradient";

// Styles
import "./InvoiceForm.css";

// Assets
import iconTrashCan from "../../assets/icon-delete.svg";

const InvoiceForm = (props) => {
  const { title, footer } = props;

  return (
    <div className="invoice-form">
      <form className="invoice-form__form" action="">
        {title}
        <h2 className="h2">Bill From</h2>
        {/* TODO: COMPONENT  */}
        <div className="field field--error">
          <label className="field__label" htmlFor="fromStreetAddress">
            Street Address
            <span className="field__validation">
              This field is required, troesma.
            </span>
          </label>
          <input
            className="field__input"
            type="text"
            name="fromStreetAddress"
          />
        </div>

        <section className="three-input-container">
          <div className="field ">
            <label className="field__label" htmlFor="fromCity">
              City
              <span className="field__validation">
                This field is required, troesma.
              </span>
            </label>
            <input className="field__input" type="text" name="fromCity" />
          </div>

          <div className="field ">
            <label className="field__label" htmlFor="fromPostCode">
              Post Code
              <span className="field__validation">
                This field is required, troesma.
              </span>
            </label>
            <input className="field__input" type="text" name="fromPostCode" />
          </div>

          <div className="field ">
            <label className="field__label" htmlFor="fromCountry">
              Country
              <span className="field__validation">
                This field is required, troesma.
              </span>
            </label>
            <input className="field__input" type="text" name="fromCountry" />
          </div>
        </section>

        <section>
          <h2 className="h2">Bill To</h2>

          <div className="field ">
            <label className="field__label " htmlFor="ClientName">
              Client&apos;s Name
              <span className="field__validation">
                This field is required, troesma.
              </span>
            </label>
            <input
              className="field__input field__input--focus"
              type="text"
              name="ClientName"
            />
          </div>

          <div className="field ">
            <label className="field__label" htmlFor="ClientEmail">
              Client&apos;s Email
              <span className="field__validation">
                This field is required, troesma.
              </span>
            </label>
            <input
              className="field__input"
              type="Email"
              name="ClientEmail"
              placeholder="e.g. email@example.com"
            />
          </div>

          <div className="field ">
            <label className="field__label" htmlFor="StreetAddress">
              Street Address
              <span className="field__validation">
                This field is required, troesma.
              </span>
            </label>
            <input className="field__input" type="text" name="StreetAddres" />
          </div>

          <section className="three-input-container">
            <div className="field ">
              <label className="field__label" htmlFor="City">
                City
                <span className="field__validation">
                  This field is required, troesma.
                </span>
              </label>
              <input className="field__input" type="text" name="City" />
            </div>

            <div className="field ">
              <label className="field__label" htmlFor="PostCode">
                Post Code
                <span className="field__validation">
                  This field is required, troesma.
                </span>
              </label>
              <input className="field__input" type="text" name="PostCode" />
            </div>

            <div className="field ">
              <label className="field__label" htmlFor="Country">
                Country
                <span className="field__validation">
                  This field is required, troesma.
                </span>
              </label>
              <input className="field__input" type="text" name="Country" />
            </div>
          </section>
        </section>

        <section className="two-input-container">
          <div className="field ">
            <label className="field__label" htmlFor="InvoiceDate">
              Invoice Date
              <span className="field__validation">
                This field is required, troesma.
              </span>
            </label>
            <input
              className="field__input"
              type="date"
              name="InvoiceDate"
              placeholder="21 Aug 2021"
            />
          </div>

          <div className="field ">
            <label className="field__label" htmlFor="PaymentTerms">
              Payment Terms
              <span className="field__validation">
                This field is required, troesma.
              </span>
            </label>
            <input
              className="field__input"
              type="text"
              name="PaymentTerms"
              placeholder=""
            />
          </div>
        </section>

        <div className="field ">
          <label className="field__label" htmlFor="ProjectDescription">
            Project Description
            <span className="field__validation">
              This field is required, troesma.
            </span>
          </label>
          <input
            className="field__input field__input--no-margin-bottom"
            type="text"
            name="ProjectDescription"
            placeholder="e.g. Graphic Design Service"
          />
        </div>

        <section>
          <h1 className="item-list">Item List</h1>

          <section className="five-fields-container">
            <div className="field ">
              <label className="field__label" htmlFor="ItemName">
                Item Name
                <span className="field__validation">
                  This field is required, troesma.
                </span>
              </label>
              <input className="field__input" type="text" name="ItemName" />
            </div>

            <div className="field ">
              <label className="field__label" htmlFor="Qty">
                Qty.
                <span className="field__validation">
                  This field is required, troesma.
                </span>
              </label>
              <input
                className="field__input field__imput--type-number field__input--center"
                type="number"
                name="Qty"
              />
            </div>

            <div className="field ">
              <label className="field__label" htmlFor="Price">
                Price
                <span className="field__validation">
                  This field is required, troesma.
                </span>
              </label>
              <input
                className="field__input field__imput--type-number"
                type="number"
                name="Price"
              />
            </div>

            <div className="field__total">
              <h3 className="field__label">Total</h3>
              <div>0.00</div>
            </div>

            <button className="field__button-delete field__button-delete--margin-top">
              <img src={iconTrashCan} alt="Trash icon. Click to delete."></img>
            </button>
          </section>

          <section className="five-fields-container five-fields-container--hidden-labels">
            <div className="field ">
              <label className="field__label" htmlFor="ItemName">
                Item Name
                <span className="field__validation">
                  This field is required, troesma.
                </span>
              </label>
              <input className="field__input" type="text" name="ItemName" />
            </div>

            <div className="field ">
              <label className="field__label" htmlFor="Qty">
                Qty.
                <span className="field__validation">
                  This field is required, troesma.
                </span>
              </label>
              <input
                className="field__input field__imput--type-number field__input--center"
                type="number"
                name="Qty"
                max="4"
              />
            </div>

            <div className="field ">
              <label className="field__label" htmlFor="Price">
                Price
                <span className="field__validation">
                  This field is required, troesma.
                </span>
              </label>
              <input
                className="field__input field__imput--type-number"
                type="number"
                name="Price"
              />
            </div>

            <div className="field__total">
              <h3 className="field__title--hidden">Total</h3>
              <div>0.00</div>
            </div>

            <button className="field__button-delete">
              <img src={iconTrashCan} alt="Trash icon. Click to delete."></img>
            </button>
          </section>

          <button
            className="five-fields-container__add-new-item button-component tertiary-button "
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

      <Gradient />
      {footer}
    </div>
  );
};

export default InvoiceForm;
