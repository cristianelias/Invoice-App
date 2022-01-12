// eslint-disable-next-line
import { Link } from "react-router-dom";

import "./NewInvoiceForm.css";

const NewInvoiceForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <article>
      <form className="form">
        <legend className="title">New invoice</legend>
        <h2 className="h2">Bill From</h2>
        <section className="section-bill-from">
          <label className="street input-lavel">
            Street Address{" "}
            <input
              className="input-street form-input"
              type="text"
              name="Street Address"
              placeholder=""
            />
          </label>
          <label className="city input-lavel">
            City{" "}
            <input
              className="city form-input input-small"
              type="text"
              name="City"
              placeholder=""
            />
          </label>
          <label className="post-code input-lavel">
            Post Code{" "}
            <input
              className="post-code form-input input-small"
              type="text"
              name="Post Code"
              placeholder=""
            />
          </label>
          <label className="country input-lavel">
            Country{" "}
            <input
              className="country form-input input-small"
              type="text"
              name="Country"
              placeholder=""
            />
          </label>
        </section>
        <section className="section-bill-to">
          <h2 className="h2">Bill To</h2>
          <label className="item-client input-lavel">
            Client's Name{" "}
            <input
              className="input-client form-input"
              type="text"
              name="Name"
              placeholder="e.g. email@example.com"
            />
          </label>
          <label className="item-client input-lavel">
            Client's Email{" "}
            <input
              className="input-client form-input"
              type="email"
              name="Email"
              placeholder=""
            />
          </label>
          <label className="item-client input-lavel">
            Street Address{" "}
            <input
              className="input-client form-input"
              type="text"
              name="Street Address"
              placeholder=""
            />
          </label>
          <div className="flex-container-client">
            <label className="client-city input-lavel">
              City{" "}
              <input
                className="form-input input-small"
                type="text"
                name="City"
                placeholder=""
              />
            </label>
            <label className="client-post-code input-lavel">
              Post Code{" "}
              <input
                className="form-input input-small"
                type="text"
                name="Post Code"
                placeholder=""
              />
            </label>
            <label className="client-country input-lavel">
              Country{" "}
              <input
                className="form-input input-small"
                type="text"
                name="Country"
                placeholder=""
              />
            </label>
          </div>
        </section>
        <section className="section-invoice-date">
          <label className="input-lavel">
            Invoice Date{" "}
            <input
              className="item-invoice-date form-input input-invoice-date"
              type="date"
              name="month"
              placeholder="21 Aug 2021"
            />
          </label>
          <label className="input-lavel">
            Payment Terms{" "}
            <input
              className="item-invoice-date form-input"
              type="text"
              name="Payment Terms"
              placeholder="Net 30 Days"
            />
          </label>
          <label className="project-description input-lavel">
            Project Description{" "}
            <input
              className="item-invoice-date form-input"
              type="text"
              name="Project Description"
              placeholder="e.g. Graphic Design Service"
            />
          </label>
        </section>
        <section>
          <h1 className="item-list">Item List</h1>
          <div>
            <ul>
              <li className="header-list">
                <h2 className="item-header item-name input-lavel">Item Name</h2>
                <h2 className="item-header qty input-lavel">Qty.</h2>
                <h2 className="item-header price input-lavel">Price</h2>
                <h2 className="item-header total input-lavel">Total</h2>
              </li>
              <li className="header-list invoice-concept-list">
                <input
                  className="invoice-concept-item form-input"
                  type="text"
                  name="concept"
                  placeholder=""
                />
                <input
                  className="invoice-concept-item form-input input-number input-qty"
                  type="number"
                  name="qty"
                  placeholder=""
                />
                <input
                  className="invoice-concept-item form-input input-number"
                  type="number"
                  name="price"
                  placeholder=""
                />
                <p className="total">0.00</p>
                <button
                  className="button-delete-header-list button-delete"
                  name="delete"
                  type="button"
                >
                  <img
                    className="invoice-concept-item"
                    src="assets/delete.svg"
                    alt="delete"
                  ></img>
                </button>
              </li>
              <li className="header-list invoice-concept-list">
                <input
                  className="invoice-concept-item form-input"
                  type="text"
                  name="concept"
                  placeholder=""
                />
                <input
                  className="invoice-concept-item form-input input-number input-qty"
                  type="number"
                  name="qty"
                  placeholder=""
                />
                <input
                  className="invoice-concept-item form-input input-number"
                  type="number"
                  name="price"
                  placeholder=""
                />
                <p className="total">0.00</p>
                <button
                  className="button-delete-header-list button-delete"
                  name="delete"
                  type="button"
                >
                  <img
                    className="invoice-concept-item"
                    src="assets/delete.svg"
                    alt="delete"
                  ></img>
                </button>
              </li>
            </ul>
            <button
              className="add-new-item button"
              name="New Item"
              type="button"
            >
              + Add New Item
            </button>
          </div>
        </section>
        <div className="linear-gradient"></div>
        <footer className="footer">
          <button
            className="button-discard button"
            name="discard"
            type="button"
          >
            <Link to="/">Discard</Link>
          </button>
          <button className="button-draft button" name="draft" type="button">
            Save as Draft
          </button>
          <button
            className="button-save-send button"
            name="save y send"
            type="button"
          >
            Save & Send
          </button>
        </footer>
      </form>
    </article>
  );
};

export default NewInvoiceForm;
