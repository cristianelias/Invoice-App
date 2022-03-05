// Dependencies
import { useNavigate } from "react-router-dom";

// Components
import BaseForm from "./BaseForm";
import PrimaryButton from "../Button/PrimaryButton";
import TertiaryButton from "../Button/TertiaryButton";

// Clients
import firebaseInvoiceClient from "../../clients/firebase/firebaseInvoiceClient";

// Data
import getInitialValues from "./utils/getInitialValues";

// Utils
import buildInvoice from "./utils/buildInvoice";

// Styles
import FormTitle from "./Fields/Styled/FormTitle";

const EditForm = ({ invoice }) => {
  const { id } = invoice;
  const navigate = useNavigate();

  const mapInitialValuesFromInvoice = () => {
    const editInitialValues = getInitialValues();

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
    <FormTitle>
      {invoice.id.length > 0 ? (
        <span>
          Edit
          <span>#</span>
          {invoice.id}
        </span>
      ) : (
        <span>Edit Invoice</span>
      )}
    </FormTitle>
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
    <BaseForm
      initialValues={mapInitialValuesFromInvoice()}
      title={assembleTitle()}
      assembleActions={assembleActions}
      submitHandler={submitHandler}
    />
  );
};
export default EditForm;
