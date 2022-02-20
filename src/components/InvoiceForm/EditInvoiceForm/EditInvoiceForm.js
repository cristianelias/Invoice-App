// Dependencies
import { useNavigate } from "react-router-dom";

// Components
import InvoiceForm from "../InvoiceForm";
import PrimaryButton from "../../Button/PrimaryButton/PrimaryButton";
import TertiaryButton from "../../Button/TertiaryButton/TertiaryButton";

// Entities
import InvoiceBuilder from "../../../entities/InvoiceBuilder";

// Clients
import firebaseInvoiceClient from "../../../clients/firebase/firebaseInvoiceClient";

// Data
import getInitialValues from "../getInitialValues";

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

    editInitialValues.details.invoiceDate = invoice.paymentDue;
    editInitialValues.details.paymentTerms = invoice.paymentTerms;
    editInitialValues.details.projectDescription = invoice.description;
    editInitialValues.status = invoice.status;

    return editInitialValues;
  };

  const createInvoice = (values) => {
    const { from, to, details, charges } = values;
    const iBuilder = new InvoiceBuilder();

    let invoice = iBuilder
      .description(details.projectDescription)
      .paymentTerms(details.paymentTerms)
      .clientName(to.clientName)
      .clientEmail(to.clientEmail)
      .senderAddressStreet(from.streetAddress)
      .senderAddressCity(from.city)
      .senderAddressPostCode(from.postCode)
      .senderAddressCountry(from.country)
      .clientAddressStreet(to.streetAddress)
      .clientAddressCity(to.city)
      .clientAddressPostCode(to.postCode)
      .clientAddressCountry(to.country)
      .items(charges)
      .edit(id);

    return invoice;
  };

  const submitHandler = async ({ values }) => {
    const invoice = createInvoice(values);

    await firebaseInvoiceClient.editInvoice({
      payload: invoice.asJSON(),
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

  const assembleActions = () => (
    <>
      <TertiaryButton
        onClick={() => navigate(-1, { replace: true })}
        text="Cancel"
      />

      <PrimaryButton text="Save Changes" />
    </>
  );

  return (
    <InvoiceForm
      initialValues={mapInitialValuesFromInvoice()}
      title={assembleTitle()}
      actions={assembleActions()}
      submitHandler={submitHandler}
    />
  );
};
export default EditInvoiceForm;
