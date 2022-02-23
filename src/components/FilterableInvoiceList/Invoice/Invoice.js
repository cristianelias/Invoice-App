// Dependencies
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Components
import PaymentStatusLabel from "../PaymentStatusLabel/PaymentStatusLabel";
import Date from "../../Date/Date";

// Assets
import iconArrowRight from "../../../assets/icon-arrow-right.svg";

// Styles
import "./Invoice.css";

const Invoice = (props) => {
  const { id, paymentDue, clientName, total, status } = props;

  return (
    <motion.article
      whileHover={{
        scale: 1.04,
      }}
      transition={{ type: "spring", stiffness: 900 }}
      className="invoice"
    >
      <Link to={`/view-invoice/${id}`} className="invoice__container">
        <span className="invoice__id">
          <span className="invoice__hashtag">#</span>
          {id}
        </span>
        <time className="invoice__date">
          Due <Date unformattedDate={paymentDue} />
        </time>
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
    </motion.article>
  );
};

export default Invoice;
