// Styles
import "./InvoiceFormTitle.css";

const InvoiceFormTitle = (props) => {
  const { id, edit } = props;

  const getEditTitleContent = (id) => {
    return (
      <span>
        Edit
        <span>#</span>
        {id}
      </span>
    );
  };

  const getNewInvoiceTitleContent = () => {
    return "New invoice";
  };

  return (
    <legend className="invoice-form-title">
      {edit && id.length > 0
        ? getEditTitleContent(id)
        : getNewInvoiceTitleContent()}
    </legend>
  );
};

export default InvoiceFormTitle;
