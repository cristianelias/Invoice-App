// Dependencies
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import styled from "@emotion/styled";

// Components
import BaseForm from "./BaseForm";
import PrimaryButton from "../Button/PrimaryButton";
import TertiaryButton from "../Button/TertiaryButton";

// Clients
import { editInvoice } from "../../clients/localStorageClient";

// Data
import getInitialValues from "./utils/getInitialValues";
import invoiceFormValidationSchema from "./utils/invoiceFormValidationSchema";

// Styled
import FormTitle from "./Fields/Styled/FormTitle";
import InvoiceContext from "../../state/InvoiceContext";
import InvoiceDirector from "../../entities/invoice/InvoiceDirector";

// Styles
const StyledHashtag = styled.span`
  margin-left: 5px;
  color: #888eb0;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.5px;
`;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 500px) {
    padding: 0 14px;
    width: 100%;
    justify-content: flex-end;
  }
`;

const mapInitialValuesFromInvoice = (invoice) => {
  const editInitialValues = getInitialValues();

  editInitialValues.from.street = invoice.senderAddress.street;
  editInitialValues.from.city = invoice.senderAddress.city;
  editInitialValues.from.postCode = invoice.senderAddress.postCode;
  editInitialValues.from.country = invoice.senderAddress.country;

  editInitialValues.to.street = invoice.senderAddress.street;
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

  const goBack = () =>
    navigate(`/view-invoice/${currentInvoiceId}`, { replace: true });

  const submitHandler = ({ values }) => {
    editInvoice({
      id: currentInvoiceId,
      payload: new InvoiceDirector().buildEditedInvoice(
        currentInvoiceId,
        currentInvoice.status,
        values
      ),
      onSuccess: (invoices) => {
        setInvoices(invoices);
        goBack();
      },
    });
  };

  const assembleTitle = () => (
    <FormTitle>
      {currentInvoice.id.length > 0 ? (
        <>
          <span>
            Edit
            <StyledHashtag>#</StyledHashtag>
            {currentInvoice.id}
          </span>
        </>
      ) : (
        <span>Edit Invoice</span>
      )}
    </FormTitle>
  );

  const assembleActions = ({ isSubmitting }) => (
    <FooterContainer>
      <TertiaryButton
        onClick={() => goBack()}
        text="Cancel"
        disabled={isSubmitting}
      />

      <PrimaryButton
        type="submit"
        disabled={isSubmitting}
        text="Save Changes"
      />
    </FooterContainer>
  );

  return (
    <BaseForm
      initialValues={mapInitialValuesFromInvoice(currentInvoice)}
      validationSchema={invoiceFormValidationSchema}
      title={assembleTitle()}
      assembleActions={assembleActions}
      submitHandler={submitHandler}
      onBlurAction={goBack}
    />
  );
};
export default EditForm;
