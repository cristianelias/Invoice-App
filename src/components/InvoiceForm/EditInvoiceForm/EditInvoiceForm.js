// Dependencies
import { useNavigate } from "react-router-dom";

// Components
import InvoiceForm from "../InvoiceForm";
import PrimaryButton from "../../Button/PrimaryButton";
import TertiaryButton from "../../Button/TertiaryButton";

// Clients
import firebaseInvoiceClient from "../../../clients/firebase/firebaseInvoiceClient";

// Data
import getInitialValues from "../getInitialValues";

// Utils
import buildInvoice from "../buildInvoice";

const EditInvoiceForm = ({ invoice }) => {
  const { id } = invoice;
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

    editInitialValues.details.invoiceDate = new Date(invoice.createdAt);

    editInitialValues.details.paymentTerms = invoice.paymentTerms;
    editInitialValues.details.projectDescription = invoice.description;
    editInitialValues.status = invoice.status;

    return editInitialValues;
  };

  const createInvoice = (values) => buildInvoice(values).asEdited(id);

  const submitHandler = async ({ values }) => {
    await firebaseInvoiceClient.editInvoice({
      payload: createInvoice(values),
      onSuccess: () => navigate(-1, { replace: true }),
      onError: (err) => console.log(err),
    });
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

  const assembleActions = ({ isSubmitting }) => (
    <>
      <TertiaryButton
        onClick={() => navigate(-1, { replace: true })}
        text="Cancel"
        disabled={isSubmitting}
      />

      <PrimaryButton disabled={isSubmitting} text="Save Changes" />
    </>
  );

  return (
    <InvoiceForm
      initialValues={mapInitialValuesFromInvoice()}
      title={assembleTitle()}
      assembleActions={assembleActions}
      submitHandler={submitHandler}
    />
  );
};
export default EditInvoiceForm;
