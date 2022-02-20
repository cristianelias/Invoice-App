// Dependencies
import { useNavigate } from "react-router-dom";

// Components
import InvoiceForm from "../InvoiceForm";
import PrimaryButton from "../../Button/PrimaryButton/PrimaryButton";
import TertiaryButton from "../../Button/TertiaryButton/TertiaryButton";

// Data
import getInitialValues from "../getInitialValues";

const EditInvoiceForm = (props) => {
  const { invoice } = props;
  const navigate = useNavigate();

  const mapInitialValuesFromInvoice = () => {
    const editInitialValues = Object.assign({}, getInitialValues());

    editInitialValues.from.streetAddress = invoice.senderAddress.street;
    editInitialValues.from.city = invoice.senderAddress.city;
    editInitialValues.from.postCode = invoice.senderAddress.postCode;
    editInitialValues.from.country = invoice.senderAddress.country;

    editInitialValues.to.streetAddress = invoice.senderAddress.street;
    editInitialValues.to.city = invoice.senderAddress.city;
    editInitialValues.to.postCode = invoice.senderAddress.postCode;
    editInitialValues.to.country = invoice.senderAddress.country;
    editInitialValues.to.clientName = invoice.clientName;
    editInitialValues.to.clientEmail = invoice.clientEmail;

    editInitialValues.charges = invoice.items.map((item) => {
      return {
        itemName: item.name,
        qty: item.quantity,
        price: item.price,
        total: item.total,
      };
    });

    editInitialValues.details.invoiceDate = invoice.paymentDue;
    editInitialValues.details.paymentTerms = invoice.paymentTerms;
    editInitialValues.details.projectDescription = invoice.description;
    editInitialValues.status = invoice.status;

    return editInitialValues;
  };

  const assembleTitle = () => (
    <legend className="invoice-form-title">
      {invoice.id.length > 0 ? (
        <span>
          Edit
          <span>#</span>
          {invoice.id}
        </span>
      ) : (
        <span>Edit Invoice</span>
      )}
    </legend>
  );

  const assembleActions = () => (
    <>
      <TertiaryButton
        onClick={() => navigate(-1, { replace: true })}
        text="Cancel"
      />

      <PrimaryButton
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          alert("-Cris: 🧶 🐈   I am working on this, stay tuned!   🧶 🐈 ");
        }}
        text="Save Changes"
      />
    </>
  );

  return (
    <InvoiceForm
      initialValues={mapInitialValuesFromInvoice()}
      title={assembleTitle()}
      actions={assembleActions()}
    />
  );
};
export default EditInvoiceForm;
