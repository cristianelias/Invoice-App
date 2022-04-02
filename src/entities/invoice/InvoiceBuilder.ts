import Invoice from "./Invoice";
import Address from "./types/Address";

class InvoiceBuilder {
  protected invoice: Invoice;

  public constructor(status = "pending") {
    this.reset();
    this.setStatus(status);
  }

  build(): Invoice {
    const builtInvoice = this.invoice;

    this.reset();

    return builtInvoice;
  }

  protected setStatus(status): void {
    this.invoice.setStatus(status);
  }

  reset(): void {
    this.invoice = new Invoice();
  }

  withItems(values: []): InvoiceBuilder {
    this.invoice.setItems(values);
    return this;
  }

  withDescription(desc: string): InvoiceBuilder {
    this.invoice.setDescription(desc);
    return this;
  }

  withClientName(name: string): InvoiceBuilder {
    this.invoice.setClientName(name);
    return this;
  }

  withClientEmail(email: string): InvoiceBuilder {
    this.invoice.setClientEmail(email);
    return this;
  }

  withSenderAddress(address: Address): InvoiceBuilder {
    this.invoice.setSenderAddress(address);
    return this;
  }

  withClientAddress(address: Address): InvoiceBuilder {
    this.invoice.setClientAddress(address);
    return this;
  }

  withInitialStatus(status: string): InvoiceBuilder {
    this.invoice.setStatus(status);
    return this;
  }

  withPaymentDue(createdAt, paymentTerms): InvoiceBuilder {
    this.invoice.calculatePaymentDue(createdAt, paymentTerms);
    return this;
  }
}

export default InvoiceBuilder;
