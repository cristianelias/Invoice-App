// Components
import InvoiceForm from "../InvoiceForm";
import InvoiceFormTitle from "../InvoiceFormTitle/InvoiceFormTitle";

// Data
import getInitialValues from "../getInitialValues";

const EditInvoiceForm = (props) => {
  const { invoice } = props;

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

  return (
    <InvoiceForm
      editMode={true}
      initialValues={mapInitialValuesFromInvoice()}
      title={<InvoiceFormTitle editMode={true} id={invoice.id} />}
    />
  );
};
export default EditInvoiceForm;
