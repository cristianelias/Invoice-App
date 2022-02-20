// Assets
import emptyImage from "../../../assets/illustration-empty.svg";

// Styles
import "./EmptyInvoiceList.css";

const EmptyInvoiceList = () => {
  return (
    <section className="empty-invoice">
      <img
        className="empty-invoice__image"
        src={emptyImage}
        alt="There are no invoices that match the current filters criteria."
      />
      <h1 className="empty-invoice__main-heading">There is nothing here</h1>
      <h5 className="empty-invoice__secondary-heading">
        Create an invoice by clicking the{" "}
        <strong className="empty-invoice__strong-text">New Invoice</strong>{" "}
        button and get started
      </h5>
    </section>
  );
};

export default EmptyInvoiceList;
