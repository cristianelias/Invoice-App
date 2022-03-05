// Dependencies
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import BaseForm from "./BaseForm";

// Components
import PrimaryButton from "../Button/PrimaryButton";
import TertiaryButton from "../Button/TertiaryButton";
import SecondaryButton from "../Button/SecondaryButton";

// Clients
import firebaseInvoiceClient from "../../clients/firebase/firebaseInvoiceClient";

// Data
import getInitialValues from "./utils/getInitialValues";
import invoiceFormValidationSchema from "./utils/invoiceFormValidationSchema";

// Utils
import buildInvoice from "./utils/buildInvoice";

// Styles
import FormTitle from "./Fields/Styled/FormTitle";

const createInvoice = (values) => buildInvoice(values).asInvoice();

// const createDraftInvoice = (values) => fillInvoiceBuilder(values).asDraft();

// Styles
const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const RightCol = styled.div`
  display: flex;
  gap: 8%;
`;

const CreateForm = () => {
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
      <ActionsContainer>
        <TertiaryButton
          disabled={isSubmitting}
          onClick={() => navigate(-1, { replace: true })}
          text="Discard"
        />

        <RightCol>
          <SecondaryButton
            disabled={isSubmitting}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();

              navigate(-1, { replace: true });
            }}
            text="Save as Draft"
          />

          <PrimaryButton
            disabled={isSubmitting}
            type="submit"
            text="Save & Send"
          />
        </RightCol>
      </ActionsContainer>
    );
  };

  const assembleTitle = () => <FormTitle>New invoice</FormTitle>;

  return (
    <BaseForm
      title={assembleTitle()}
      initialValues={getInitialValues()}
      validationSchema={invoiceFormValidationSchema}
      submitHandler={submitHandler}
      assembleActions={assembleActions}
    />
  );
};
export default CreateForm;
