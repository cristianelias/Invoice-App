// Entities
import InvoiceBuilder from "../../../entities/InvoiceBuilder";

const _buildBaseInvoiceStructure = ({ from, to, details, charges }) => {
  return new InvoiceBuilder()
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
    .items(charges);
};

const buildInvoice = ({ from, to, details, charges }) => {
  return _buildBaseInvoiceStructure({ from, to, details, charges })
    .items(charges)
    .asInvoice();
};

const buildDraft = ({ from, to, details, charges }) => {
  return _buildBaseInvoiceStructure({ from, to, details, charges })
    .items([])
    .asDraft();
};

const buildEditedInvoice = ({ from, to, details, charges }, id) => {
  return _buildBaseInvoiceStructure({ from, to, details, charges })
    .items(charges)
    .asEdited(id);
};

export { buildInvoice, buildDraft, buildEditedInvoice };
