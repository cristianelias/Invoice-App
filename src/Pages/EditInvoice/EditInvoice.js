// Dependencies
// eslint-disable-next-line
import { useNavigate } from "react-router-dom";
// Layout
import MainLayout from "../../layouts/MainLayout";

// Styles
import "./EditInvoice.css";

const EditInvoice = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="edit-invoice">
        <h1>EditInvoice</h1>

        <ul>
          <li>
            <button onClick={() => navigate(-1, { replace: true })}>
              Go back
            </button>
          </li>
        </ul>
      </div>
    </MainLayout>
  );
};

export default EditInvoice;
