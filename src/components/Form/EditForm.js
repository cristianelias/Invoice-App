// Dependencies
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";

// Components
import BaseForm from "./BaseForm";
import PrimaryButton from "../Button/PrimaryButton";
import TertiaryButton from "../Button/TertiaryButton";

// Clients
import { editInvoice } from "../../clients/localStorageClient";

// Data
import getInitialValues from "./utils/getInitialValues";

// Utils
import buildInvoice from "./utils/buildInvoice";

// Styled
import FormTitle from "./Fields/Styled/FormTitle";
import InvoiceContext from "../../state/InvoiceContext";

const mapInitialValuesFromInvoice = (invoice) => {
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

const EditForm = () => {
  const { invoices, setInvoices } = useContext(InvoiceContext);
  const currentInvoiceId = useParams().id;
  const currentInvoice = invoices.filter(
    (inv) => inv.id === currentInvoiceId
  )[0];
  const navigate = useNavigate();

  const createInvoice = (values) =>
    buildInvoice(values).asEdited(currentInvoiceId);

  const submitHandler = ({ values }) => {
    const invoiceMetadata = createInvoice(values);

    editInvoice({
      id: invoiceMetadata.id,
      payload: invoiceMetadata,
      onSuccess: (invoices) => {
        setInvoices(invoices);
        navigate(-1, { replace: true });
      },
    });
  };

  const assembleTitle = () => (
    <FormTitle>
      {currentInvoice.id.length > 0 ? (
        <span>
          Edit
          <span>#</span>
          {currentInvoice.id}
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

      <PrimaryButton
        type="submit"
        disabled={isSubmitting}
        text="Save Changes"
      />
    </>
  );

  return (
    <BaseForm
      initialValues={mapInitialValuesFromInvoice(currentInvoice)}
      title={assembleTitle()}
      assembleActions={assembleActions}
      submitHandler={submitHandler}
    />
  );
};
export default EditForm;
