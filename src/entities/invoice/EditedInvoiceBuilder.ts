import InvoiceBuilder from "./InvoiceBuilder";

class EditedInvoiceBuilder extends InvoiceBuilder {
  constructor(id: string, status: string) {
    super(status);
    this.invoice.setId(id);
  }
}

export default EditedInvoiceBuilder;
