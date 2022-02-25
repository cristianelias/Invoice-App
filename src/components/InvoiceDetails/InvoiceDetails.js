// Styles
import "./InvoiceDetails.css";

// Components
import Date from "../Date";

const InvoiceDetails = ({ invoice }) => {
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
                  {<Date unformattedDate={invoice.createdAt} />}
                </time>
              </div>

              <div className="title-and-subtitle">
                <h3 className="title-and-subtitle__title">Payment Due</h3>
                <time className="title-and-subtitle__subtitle">
                  {<Date unformattedDate={invoice.paymentDue} />}
                </time>
              </div>
            </div>

            <div className="billing-three-columns__second">
              <h3 className="title-and-subtitle__title">Bill To</h3>
              <p className="title-and-subtitle__subtitle">
                {invoice.clientName}
              </p>

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

          {invoice.items.map((item, index) => (
            <tbody key={index}>
              <tr className="pricing-table__row">
                <td className="pricing-table__row-item-name">{item.name}</td>
                <td className="pricing-table__row-qty">{item.quantity}</td>
                <td className="pricing-table__row-price">£ {item.price}</td>
                <td className="pricing-table__row-total">£ {item.total}</td>
              </tr>
            </tbody>
          ))}

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
            {invoice.items.map((item, index) => (
              <li key={index}>
                <div className="pricing-table-mobile__row">
                  <div className="pricing-table-mobile__container-title-qty-price">
                    <p className="pricing-table-mobile__title">{item.name}</p>
                    <div className="pricing-table-mobile__qty-price">
                      {item.quantity} x £ {item.price}
                    </div>
                  </div>
                  <div className="pricing-table-mobile__total">
                    £ {item.total}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="pricing-table-mobile__footer">
            <p className="pricing-table-mobile__footer-amount">Grand Total</p>
            <div className="pricing-table-mobile__footer-final-price">
              £ {invoice.total}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvoiceDetails;
