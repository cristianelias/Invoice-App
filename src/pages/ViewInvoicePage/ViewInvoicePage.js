// Dependencies
// eslint-disable-next-line
import { Outlet, useParams } from "react-router-dom";

// Components
import InvoiceDetails from "../../components/InvoiceDetails/InvoiceDetails";
import PaymentStatusLabel from "../../components/FilterableInvoiceList/PaymentStatusLabel/PaymentStatusLabel";
import InvoiceActions from "../../components/InvoiceActions/InvoiceActions";
import Gradient from "../../components/Gradient/Gradient";
import GoBack from "../../components/GoBack/GoBack";

// Styles
import "./ViewInvoicePage.css";

const ViewInvoicePage = (props) => {
  const { invoices } = props;
  const currentInvoiceId = useParams().id;

  const currentInvoice = invoices.find(
    (invoice) => invoice.id === currentInvoiceId
  );

  if (!invoices || invoices.length === 0) {
    return null;
  }

  return (
    <div className="view-invoice-page">
      <div className="invoice-details-header">
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
          <GoBack />
        </nav>

        <article className="modify-invoice">
          <div className="modify-invoice__payment-status">
            <p className="modify-invoice__label">Status</p>
            {currentInvoice.status && (
              <PaymentStatusLabel
                status={currentInvoice && currentInvoice.status}
                fixedSize={true}
              />
            )}
          </div>

          <InvoiceActions id={currentInvoiceId} />
        </article>
      </div>

      <InvoiceDetails invoice={currentInvoice} />

      <div className="view-invoice-page__gradient">
        <Gradient />
      </div>

      <div className="invoice-action-mobile">
        <InvoiceActions id={currentInvoiceId} />
      </div>

      <Outlet />
    </div>
  );
};

export default ViewInvoicePage;
