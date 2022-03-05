// Entities
import InvoiceBuilder from "../../../entities/InvoiceBuilder";

const buildInvoice = ({ from, to, details, charges }) =>
  new InvoiceBuilder()
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

export default buildInvoice;
