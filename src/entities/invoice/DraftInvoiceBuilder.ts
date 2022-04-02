import InvoiceBuilder from "./InvoiceBuilder";

class DraftInvoiceBuilder extends InvoiceBuilder {
  public constructor(status = "draft") {
    super(status);
  }
}

export default DraftInvoiceBuilder;
