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
        <GoBack />

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
