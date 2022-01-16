// Dependencies
import { useLayoutEffect, useState } from "react";
// eslint-disable-next-line
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

// Styles
import "./ViewInvoicePage.css";

const ViewInvoicePage = (props) => {
  const [invoice, setInvoice] = useState({});
  const { invoices } = props;
  const currentInvoiceId = useParams().id;
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const currentInvoice = invoices.filter(
      (inv) => inv.id === currentInvoiceId
    );

    setInvoice(currentInvoice[0]);
  }, []);

  return (
    <div className="view-invoice">
      <div>
        <nav className="page-navigation">
          <svg
            className="page-navigation__svg"
            width="7"
            height="10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.342.886L2.114 5.114l4.228 4.228"
              stroke="#9277FF"
              stroke-width="2"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
          <button
            className="page-navigation__button"
            onClick={() => navigate(-1, { replace: true })}
          >
            Go back
          </button>
        </nav>

        <article className="modify-invoice">
          <div className="modify-invoice__payment-status">
            <p className="modify-invoice__label">Status</p>
            <span>Pending</span>
          </div>

          <div className="invoice-actions">
            <Link
              className="invoice-actions__edit"
              to={`/view-invoice/${currentInvoiceId}/edit`}
            >
              Edit
            </Link>
            <Link className="invoice-actions__delete" to="/">
              Delete
            </Link>
            <button className="invoice-actions__paid">Mark as Paid</button>
          </div>
        </article>

        <section className="invoice-details">
          <article className="billing">
            <div className="billing-two-columns">
              <div>
                <span className="billing-two-columns__invoice-id">
                  <span className="billing-two-columns__invoice-hashtag">
                    #
                  </span>
                  XM941231
                </span>
                <p className="billing-two-columns__project-description">
                  Graphic Design
                </p>
              </div>

              <div className="four-texts">
                <p>19 Union</p>
                <p>London</p>
                <p>E1 3EZ</p>
                <p>United Kingdom</p>
              </div>
            </div>

            <div className="billing-three-columns">
              <div className="billing-three-columns__first">
                <div className="title-and-subtitle title-and-subtitle--top">
                  <h3 className="title-and-subtitle__title">Invoice Date</h3>
                  <time className="title-and-subtitle__subtitle">
                    21 Aug 2021
                  </time>
                </div>

                <div className="title-and-subtitle">
                  <h3 className="title-and-subtitle__title">Payment Due</h3>
                  <time className="title-and-subtitle__subtitle">
                    21 Aug 2021
                  </time>
                </div>
              </div>

              <div className="billing-three-columns__second">
                <h3 className="title-and-subtitle__title">Bill To</h3>
                <p className="title-and-subtitle__subtitle">Alex Grim</p>
                <div className="four-texts four-texts__left">
                  <p>84 Church Way</p>
                  <p>Bradford</p>
                  <p>BD1 9PB</p>
                  <p>United Kingdom</p>
                </div>
              </div>

              <div className="billing-three-columns__third">
                <h3 className="title-and-subtitle__title">Sent To</h3>
                <p className="title-and-subtitle__subtitle">
                  alexgrim@mail.com
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

            <tbody>
              <tr className="pricing-table__row">
                <td className="pricing-table__row-item-name">Banner Design</td>
                <td className="pricing-table__row-qty">1</td>
                <td className="pricing-table__row-price">£ 156.00</td>
                <td className="pricing-table__row-total">£ 156.00</td>
              </tr>
              <tr className="pricing-table__row">
                <td className="pricing-table__row-item-name pricing-table--row-botomm ">
                  Email Design
                </td>
                <td className="pricing-table__row-qty pricing-table--row-botomm">
                  2
                </td>
                <td className="pricing-table__row-price pricing-table--row-botomm ">
                  £ 200.00
                </td>
                <td className="pricing-table__row-total pricing-table--row-botomm ">
                  £ 400.00
                </td>
              </tr>
            </tbody>

            <tfoot>
              <tr className="pricing-table__footer">
                <th className="pricing-table__footer-amount" colspan="3">
                  Amount Due
                </th>
                <td className="pricing-table__footer-final-price">
                  <strong>£ 556.00</strong>
                </td>
              </tr>
            </tfoot>
          </table>
        </section>
      </div>

      <Outlet />
    </div>
  );
};

export default ViewInvoicePage;
