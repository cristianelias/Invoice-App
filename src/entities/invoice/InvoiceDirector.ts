/* eslint-disable @typescript-eslint/no-explicit-any */
import DraftInvoiceBuilder from "./DraftInvoiceBuilder";
import EditedInvoiceBuilder from "./EditedInvoiceBuilder";
import Invoice from "./Invoice";
import InvoiceBuilder from "./InvoiceBuilder";

class InvoiceDirector {
  buildNewInvoice(values: object): Invoice {
    return this.build(new InvoiceBuilder(), values);
  }

  buildDraftInvoice(values: object): Invoice {
    return this.build(new DraftInvoiceBuilder(), values);
  }

  buildEditedInvoice(id: string, status: string, values: object): Invoice {
    const invoiceStatus = status === "draft" ? "pending" : status;
    return this.build(new EditedInvoiceBuilder(id, invoiceStatus), values);
  }

  private build(builder: InvoiceBuilder, values: any): Invoice {
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
