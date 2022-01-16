// Dependencies
// eslint-disable-next-line
import { Link } from "react-router-dom";

// Components
import PaymentStatusLabel from "../PaymentStatusLabel/PaymentStatusLabel";

// Assets
import iconArrowRight from "../../../assets/icon-arrow-right.svg";

// Styles
import "./Invoice.css";

// TODO: Currency should be read from backend

const Invoice = (props) => {
  const { id, paymentDue, clientName, total, status } = props;

  return (
    <article className="invoice">
      <Link to={`/view-invoice/${id}`} className="invoice__container">
        <span className="invoice__id">
          <span className="invoice__hashtag">#</span>
          {id}
        </span>
        <time className="invoice__date">{paymentDue}</time>
        <p className="invoice__client-name">{clientName}</p>
        <p className="invoice__amount">£ {total}</p>
        <PaymentStatusLabel status={status} />
        <span className="invoice__arrow-container">
          <img
            className="invoice__arrow"
            src={iconArrowRight}
            alt="Arrow icon. Click to edit invoice."
          ></img>
        </span>
      </Link>
    </article>
  );
};

export default Invoice;
