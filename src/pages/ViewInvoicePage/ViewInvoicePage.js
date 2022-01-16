// Dependencies
import { useEffect, useState } from "react";
// eslint-disable-next-line
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

// Styles
import "./ViewInvoicePage.css";

const ViewInvoicePage = (props) => {
  const [invoice, setInvoice] = useState({});
  const { invoices } = props;
  const currentInvoiceId = useParams().id;
  const navigate = useNavigate();

  useEffect(() => {
    const currentInvoice = invoices.filter(
      (inv) => inv.id === currentInvoiceId
    );

    setInvoice(currentInvoice[0]);
  }, [invoices, currentInvoiceId]);

  return (
    <div className="view-invoice">
      {JSON.stringify(invoice)}
      <ul>
        <li>
          <button onClick={() => navigate(-1, { replace: true })}>
            Go back
          </button>
        </li>
        <li>
          <Link to={`/view-invoice/${currentInvoiceId}/edit`}>Edit</Link>
        </li>
        <li>
          <Link to="/">Delete</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default ViewInvoicePage;
