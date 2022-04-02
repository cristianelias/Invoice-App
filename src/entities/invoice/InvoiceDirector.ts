import DraftInvoiceBuilder from "./DraftInvoiceBuilder";
import EditedInvoiceBuilder from "./EditedInvoiceBuilder";
import Invoice from "./Invoice";
import InvoiceBuilder from "./InvoiceBuilder";

class InvoiceDirector {
  buildNewInvoice(values): Invoice {
    return this.build(new InvoiceBuilder(), values);
  }

  buildDraftInvoice(values): Invoice {
    return this.build(new DraftInvoiceBuilder(), values);
  }

  buildEditedInvoice(id, status, values): Invoice {
    return this.build(new EditedInvoiceBuilder(id, status), values);
  }

  private build(builder: InvoiceBuilder, values): Invoice {
    const { from, to, details, charges } = values;

    return builder
      .withDescription(details.projectDescription)
      .withClientName(to.clientName)
      .withClientEmail(to.clientEmail)
      .withItems(charges)
      .withSenderAddress(from)
      .withClientAddress(to)
      .withPaymentDue(
        details.invoiceDate?.toLocaleDateString(),
        details.paymentTerms
      )
      .build();
  }
}

export default InvoiceDirector;
