// Dependencies
import { useNavigate } from "react-router-dom";
import InvoiceForm from "./InvoiceForm";

// Components
import PrimaryButton from "../Button/PrimaryButton";
import TertiaryButton from "../Button/TertiaryButton";

// Clients
import firebaseInvoiceClient from "../../clients/firebase/firebaseInvoiceClient";

// Data
import getInitialValues from "./getInitialValues";
import invoiceFormValidationSchema from "./invoiceFormValidationSchema";

// Utils
import buildInvoice from "./buildInvoice";

const createInvoice = (values) => buildInvoice(values).asInvoice();

// const createDraftInvoice = (values) => fillInvoiceBuilder(values).asDraft();

const NewInvoiceForm = () => {
  const navigate = useNavigate();

  const submitHandler = async ({ values }) =>
    await firebaseInvoiceClient.postInvoice({
      payload: createInvoice(values),
      onSuccess: () => navigate(-1, { replace: true }),
      onError: (err) => console.log(err),
    });

  // const saveAsDraftHandler = async ({ values }) =>
  //   await firebaseInvoiceClient.postInvoice({
  //     payload: createDraftInvoice(values),
  //     onSuccess: () => navigate(-1, { replace: true }),
  //     onError: (err) => console.log(err),
  //   });

  const assembleActions = ({ isSubmitting }) => {
    return (
      <>
        <TertiaryButton
          disabled={isSubmitting}
          onClick={() => navigate(-1, { replace: true })}
          text="Discard"
        />

        {/* <SecondaryButton
          disabled={isSubmitting}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            navigate(-1, { replace: true });
          }}
          text="Save as Draft"
        /> */}

        <PrimaryButton
          disabled={isSubmitting}
          type="submit"
          text="Save & Send"
        />
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
      assembleActions={assembleActions}
    />
  );
};
export default NewInvoiceForm;
