// Styles
import "./InvoiceDetails.css";

const InvoiceDetails = (props) => {
  const { invoice } = props;

  return (
    <section className="invoice-details">
      <div>
        <article className="billing">
          <div className="billing-two-columns">
            <div>
              <span className="billing-two-columns__invoice-id">
                <span className="billing-two-columns__invoice-hashtag">#</span>
                {invoice.id}
              </span>
              <p className="billing-two-columns__project-description">
                {invoice.description}
              </p>
            </div>

            {/* TODO: COMPONENT */}
            <div className="four-texts">
              <p>{invoice.senderAddress.street}</p>
              <p>{invoice.senderAddress.city}</p>
              <p>{invoice.senderAddress.postCode}</p>
              <p>{invoice.senderAddress.country}</p>
            </div>
          </div>

          <div className="billing-three-columns">
            <div className="billing-three-columns__first">
              <div className="title-and-subtitle title-and-subtitle--top">
                <h3 className="title-and-subtitle__title">Invoice Date</h3>
                <time className="title-and-subtitle__subtitle">
                  {invoice.createdAt}
                </time>
              </div>

              <div className="title-and-subtitle">
                <h3 className="title-and-subtitle__title">Payment Due</h3>
                <time className="title-and-subtitle__subtitle">
                  {invoice.paymentDue}
                </time>
              </div>
            </div>

            <div className="billing-three-columns__second">
              <h3 className="title-and-subtitle__title">Bill To</h3>
              <p className="title-and-subtitle__subtitle">
                {invoice.clientName}
              </p>

              {/* TODO: COMPONENT */}
              <div className="four-texts four-texts__left">
                <p>{invoice.clientAddress.street}</p>
                <p>{invoice.clientAddress.city}</p>
                <p>{invoice.clientAddress.postCode}</p>
                <p>{invoice.clientAddress.country}</p>
              </div>
            </div>

            <div className="billing-three-columns__third">
              <h3 className="title-and-subtitle__title">Sent To</h3>
              <p className="title-and-subtitle__subtitle">
                {invoice.clientEmail}
              </p>
            </div>
          </div>
        </article>

        <table className="pricing-table">
          <thead>
            <tr className="pricing-table__titles">
              <th className="pricing-table-titles__item-name">Item Name</th>
              <th className="pricing-table-titles__qty">QTY.</th>
              <th className="pricing-table-titles__price">Price</th>
              <th className="pricing-table-titles__total">Total</th>
            </tr>
          </thead>

          {/* TODO: COMPONENT, table and row */}
          <tbody>
            <tr className="pricing-table__row">
              <td className="pricing-table__row-item-name">
                {invoice.items[0].name}
              </td>
              <td className="pricing-table__row-qty">
                {invoice.items[0].quantity}
              </td>
              <td className="pricing-table__row-price">
                £ {invoice.items[0].price}
              </td>
              <td className="pricing-table__row-total">
                £ {invoice.items[0].total}
              </td>
            </tr>
          </tbody>

          <tfoot>
            <tr className="pricing-table__footer">
              <th className="pricing-table__footer-amount" colSpan="3">
                Amount Due
              </th>
              <td className="pricing-table__footer-final-price">
                <strong>£ {invoice.total}</strong>
              </td>
            </tr>
          </tfoot>
        </table>

        <div className="pricing-table-mobile">
          <ul className="pricing-table-mobile__container">
            <li>
              <div className="pricing-table-mobile__row">
                <div className="pricing-table-mobile__container-title-qty-price">
                  <p className="pricing-table-mobile__title">Banner Design</p>
                  <div className="pricing-table-mobile__qty-price">
                    1 x £ 156.00
                  </div>
                </div>
                <div className="pricing-table-mobile__total">£ 156.00</div>
              </div>
            </li>
            <li>
              <div className="pricing-table-mobile__row">
                <div className="pricing-table-mobile__container-title-qty-price">
                  <p className="pricing-table-mobile__title">Email Design</p>
                  <div className="pricing-table-mobile__qty-price">
                    2 x £ 200.00
                  </div>
                </div>
                <div className="pricing-table-mobile__total">£ 400.00</div>
              </div>
            </li>
          </ul>
          <div className="pricing-table-mobile__footer">
            <p className="pricing-table-mobile__footer-amount">Grand Total</p>
            <div className="pricing-table-mobile__footer-final-price">
              £ 556.00
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvoiceDetails;
