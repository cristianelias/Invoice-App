// Dependencies
import { Outlet, useParams } from "react-router-dom";

// Components
import InvoiceDetails from "../../components/InvoiceDetails/InvoiceDetails";
import PaymentStatusLabel from "../../components/FilterableInvoiceList/PaymentStatusLabel/PaymentStatusLabel";
import Gradient from "../../components/Gradient/Gradient";
import GoBack from "../../components/GoBack/GoBack";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import EditInvoiceAction from "../../components/EditInvoiceAction/EditInvoiceAction";
import DeleteAction from "../../components/DeleteAction/DeleteAction";
import MarkAsPaidAction from "../../components/MarkAsPaidAction/MarkAsPaidAction";

// Styles
import "./ViewInvoicePage.css";

const assembleActions = ({ id, status }) => (
  <>
    <EditInvoiceAction id={id} />
    <DeleteAction id={id} />
    <MarkAsPaidAction id={id} status={status} />
  </>
);

const ViewInvoicePage = (props) => {
  const { invoices } = props;
  const currentInvoiceId = useParams().id;
  const currentInvoice = invoices.find(
    (invoice) => invoice.id === currentInvoiceId
  );

  if (!invoices || invoices.length === 0 || currentInvoice === undefined) {
    return null;
  }

  const actions = assembleActions({
    id: currentInvoice.id,
    status: currentInvoice.status,
  });

  return (
    <div className="view-invoice-page">
      <div className="invoice-details-header">
        <GoBack />
        <ScrollToTop />

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

          {actions}
        </article>
      </div>

      <InvoiceDetails invoice={currentInvoice} />

      <div className="view-invoice-page__gradient">
        <Gradient />
      </div>

      <div className="invoice-action-mobile">{actions}</div>

      <Outlet />
    </div>
  );
};

export default ViewInvoicePage;
