// Dependencies
import { useContext } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import BaseForm from "./BaseForm";

// Components
import PrimaryButton from "../Button/PrimaryButton";
import SecondaryButton from "../Button/SecondaryButton";
import TertiaryButton from "../Button/TertiaryButton";

// Context
import InvoiceContext from "../../state/InvoiceContext";

// Data
import getInitialValues from "./utils/getInitialValues";
import invoiceFormValidationSchema from "./utils/invoiceFormValidationSchema";

// Clients
import { addInvoice } from "../../clients/localStorageClient";

// Utils
import { buildInvoice, buildDraft } from "./utils/invoiceUtils";

// Styles
import FormTitle from "./Fields/Styled/FormTitle";

// Styles
const ActionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
  width: 100%;

  & button {
    height: 48px;
  }

  & > .secondary-button {
    margin-left: auto;
  }

  @media (max-width: 500px) {
    & .primary-button,
    & .secondary-button,
    & .tertiray-button {
      padding: 11px 14px;
    }
  }
`;

const CreateForm = () => {
  const { setInvoices } = useContext(InvoiceContext);
  const navigate = useNavigate();

  const submitHandler = async ({ values }) => {
    addInvoice({
      payload: buildInvoice(values),
      onSuccess: (invoices) => {
        setInvoices(invoices);
        navigate(-1, { replace: true });
      },
    });
  };

  const saveAsDraftHandler = (values) => {
    addInvoice({
      payload: buildDraft(values),
      onSuccess: (invoices) => {
        setInvoices(invoices);
        navigate(-1, { replace: true });
      },
    });
  };

  const assembleActions = ({ isSubmitting, values }) => {
    return (
      <ActionsContainer>
        <TertiaryButton
          disabled={isSubmitting}
          onClick={() => navigate(-1, { replace: true })}
          text="Discard"
        />

        <SecondaryButton
          disabled={isSubmitting}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            saveAsDraftHandler(values);
          }}
          text="Save as Draft"
        />

        <PrimaryButton
          disabled={isSubmitting}
          type="submit"
          text="Save & Send"
        />
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
      onBlurAction={() => navigate(-1, { replace: true })}
    />
  );
};
export default CreateForm;
