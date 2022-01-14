// Dependencies
// eslint-disable-next-line
import { Link, useNavigate } from "react-router-dom";

// Layout
import MainLayout from "../../layouts/MainLayout";

// Styles
import "./ViewInvoice.css";

const ViewInvoice = () => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <div className="view-invoice">
        <ul>
          <li>
            <button onClick={() => navigate(-1, { replace: true })}>
              Go back
            </button>
          </li>
          <li>
            <Link to="/edit-invoice">Edit</Link>
          </li>
          <li>
            <Link to="/">Delete</Link>
          </li>
        </ul>
      </div>
    </MainLayout>
  );
};

export default ViewInvoice;
