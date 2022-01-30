import { Link } from "react-router-dom";
import iconPlus from "../../../assets/icon-plus.svg";

import "./NewInvoiceButton.css";

const NewInvoiceButton = (props) => {
  const { showFullInfo } = props;

  return (
    <button className="new-invoice-button">
      <Link className="new-invoice-button__container" to="/new-invoice">
        <div className="new-invoice-button__icon-wrapper">
          <img
            className="new-invoice-button__icon"
            src={iconPlus}
            alt="New invoice button. Click to create a new invoice for you to fill."
          />
        </div>
        <p className="new-invoice-button__text">
          {showFullInfo ? "New Invoice" : "New"}
        </p>
      </Link>
    </button>
  );
};

export default NewInvoiceButton;
