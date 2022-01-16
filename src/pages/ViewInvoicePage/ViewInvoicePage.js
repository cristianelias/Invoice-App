// Dependencies
// eslint-disable-next-line
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

// Components
import InvoiceDetails from "../../components/InvoiceDetails/InvoiceDetails";

// Styles
import "./ViewInvoicePage.css";

const ViewInvoicePage = (props) => {
  const { invoices } = props;
  const currentInvoiceId = useParams().id;
  const navigate = useNavigate();

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
              strokeWidth="2"
              fill="none"
              fill-rule="evenodd"
              fillRule="evenodd"
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
      </div>

      <InvoiceDetails
        invoice={invoices.find((invoice) => invoice.id === currentInvoiceId)}
      />

      <Outlet />
    </div>
  );
};

export default ViewInvoicePage;
