// Dependencies
import { ClassType, useContext } from "react";
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

// Styles
import FormTitle from "./Fields/Styled/FormTitle";

// Entities
import InvoiceBuilder from "../../entities/invoice/InvoiceBuilder";
import DraftInvoiceBuilder from "../../entities/invoice/DraftInvoiceBuilder";
import InvoiceDirector from "../../entities/invoice/InvoiceDirector";
import Invoice from "../../entities/invoice/Invoice";

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

  const saveInvoiceHandler = (invoice: Invoice) => {
    addInvoice({
      payload: invoice,
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

            saveInvoiceHandler(new InvoiceDirector().buildDraftInvoice(values));
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

  return (
    <BaseForm
      title={<FormTitle>New invoice</FormTitle>}
      initialValues={getInitialValues()}
      validationSchema={invoiceFormValidationSchema}
      submitHandler={({ values }) => {
        saveInvoiceHandler(new InvoiceDirector().buildNewInvoice(values));
      }}
      assembleActions={assembleActions}
      onBlurAction={() => navigate(-1, { replace: true })}
    />
  );
};
export default CreateForm;
