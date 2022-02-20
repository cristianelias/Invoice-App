// Dependencies
import { useNavigate } from "react-router-dom";
import InvoiceForm from "../InvoiceForm";

// Components
import PrimaryButton from "../../Button/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../Button/SecondaryButton/SecondaryButton";
import TertiaryButton from "../../Button/TertiaryButton/TertiaryButton";

// Entities
import InvoiceBuilder from "../../../entities/InvoiceBuilder";

// Clients
import firebaseInvoiceClient from "../../../clients/firebase/firebaseInvoiceClient";

// Data
import getInitialValues from "../getInitialValues";
import invoiceFormValidationSchema from "../invoiceFormValidationSchema";

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
    .create();

  return invoice;
};

const NewInvoiceForm = () => {
  const navigate = useNavigate();

  const submitHandler = async ({ values }) => {
    const invoice = createInvoice(values);
    await firebaseInvoiceClient.postInvoice({
      payload: invoice.asJSON(),
      onSuccess: () => navigate(-1, { replace: true }),
      onError: (err) => console.log(err),
    });
  };

  const assembleActions = () => {
    return (
      <>
        <TertiaryButton
          onClick={() => navigate(-1, { replace: true })}
          text="Discard"
        />

        <SecondaryButton
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            alert("-Cris: 🧶 🐈   I am working on this, stay tuned!   🧶 🐈 ");
            navigate(-1, { replace: true });
          }}
          text="Save as Draft"
        />

        <PrimaryButton text="Save & Send" />
      </>
    );
  };

  const assembleTitle = () => (
    <legend className="invoice-form-title">New invoice</legend>
  );

  return (
    <InvoiceForm
      title={assembleTitle()}
      initialValues={getInitialValues()}
      validationSchema={invoiceFormValidationSchema}
      submitHandler={submitHandler}
      actions={assembleActions()}
    />
  );
};
export default NewInvoiceForm;
