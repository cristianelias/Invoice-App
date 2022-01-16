// Dependencies
// eslint-disable-next-line
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// Styles
import "./EditInvoicePage.css";

const EditInvoicePage = (props) => {
  const { invoices, setInvoices } = props;
  const [invoice, setInvoice] = useState({});
  const currentInvoiceId = useParams().id;
  const navigate = useNavigate();

  useEffect(() => {
    const currentInvoice = invoices.filter(
      (inv) => inv.id === currentInvoiceId
    );

    setInvoice(currentInvoice[0]);
  }, []);

  return (
    <div className="edit-invoice">
      <h1>EditInvoicePage</h1>

      {JSON.stringify(invoice)}

      <ul>
        <li>
          <button onClick={() => navigate(-1, { replace: true })}>
            Go back
          </button>
        </li>
      </ul>
    </div>
  );
};

export default EditInvoicePage;
