import iconPlus from "../../assets/icon-plus.svg";

const NewInvoiceButton = (props) => {
  const { showFullInfo } = props;

  return (
    <button className="new-invoice">
      <div className="new-invoice-icon-wrapper">
        <img
          src={iconPlus}
          alt="New invoice button. Click to create a new invoice for you to fill."
        />
      </div>
      <p className="new-invoice-text">{showFullInfo ? "New Invoice" : "New"}</p>
    </button>
  );
};

export default NewInvoiceButton;
