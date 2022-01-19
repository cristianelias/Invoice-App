// Dependencies
// eslint-disable-next-line
import { Link } from "react-router-dom";

// Styles
import "./InvoiceActions.css";

const InvoiceActions = (props) => {
  const { id } = props;

  return (
    <div className="invoice-actions">
      <Link className="invoice-actions__edit" to={`/view-invoice/${id}/edit`}>
        Edit
      </Link>
      <Link className="invoice-actions__delete" to="/">
        Delete
      </Link>
      <button className="invoice-actions__paid">Mark as Paid</button>
    </div>
  );
};

export default InvoiceActions;
