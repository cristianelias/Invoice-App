const NewInvoice = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Bill From</legend>
        <label htmlFor="input-street-address">
          Street Address
          <input type="text" id="input-street-address" />
        </label>

        <label htmlFor="input-city">
          City
          <input type="text" id="input-city" />
        </label>

        <label htmlFor="input-post-code">
          Post Code
          <input type="text" id="input-post-code" />
        </label>

        <label htmlFor="input-country">
          Country
          <input type="text" id="input-country" />
        </label>
      </fieldset>

      <fieldset>
        <legend>Bill To</legend>
        <label htmlFor="input-client-name">
          Client&apos;s Name
          <input type="text" id="input-client-name" />
        </label>

        <label htmlFor="input-client-email">
          Client&apos;s Email
          <input type="email" id="input-client-email" />
        </label>

        <label htmlFor="input-client-street-address">
          Street Address
          <input type="text" id="input-client-street-address" />
        </label>

        <label htmlFor="input-country">
          Country
          <input type="text" id="input-country" />
        </label>

        <label htmlFor="input-client-city">
          City
          <input type="text" id="input-client-city" />
        </label>

        <label htmlFor="input-client-post-code">
          Post Code
          <input type="tel" id="input-client-post-code" />
        </label>

        <label htmlFor="input-invoice-date">
          Invoice Date
          <input
            type="date"
            id="input-invoice-date"
            value="2021-12-11"
            min="2019-12-11"
            max="2050-12-11"
          ></input>
        </label>

        <label htmlFor="input-payment-terms">
          Payment Terms
          <select id="input-payment-terms">
            <option value="Net 30 Days" selected>
              Net 30 Days
            </option>
            <option value="Net 60 Days">Net 60 Days</option>
            <option value="Net 90 Days">Net 90 Days</option>
          </select>
        </label>

        <label htmlFor="input-project-description">
          Project Description
          <input type="text" id="input-project-description" />
        </label>
      </fieldset>

      <fieldset>
        <div>
          <h4>Item Name</h4>
          <input type="text" id="input-item-1-name" />
          <input type="text" id="input-item-2-name" />
        </div>

        <div>
          <h4>Qty.</h4>
          <input type="tel" id="input-item-1-qty" />
          <input type="tel" id="input-item-2-qty" />
        </div>

        <div>
          <h4>Price</h4>
          <input type="tel" id="input-item-1-price" />
          <input type="tel" id="input-item-2-price" />
        </div>

        <div>
          <h4>Total</h4>
          <input type="tel" id="input-item-1-price" />
          <input type="tel" id="input-item-2-price" />
        </div>

        <div>
          <span>🗑</span>
          <span>🗑</span>
        </div>
      </fieldset>

      <button>+ Add New Item</button>

      <div>
        <button>Discard</button>
        <input type="submit" value="Save as Draft" />
        <input type="submit" value="Save and Send" />
      </div>
    </form>
  );
};

export default NewInvoice;
