// Entities
import Invoice from "./Invoice";

class InvoiceBuilder {
  constructor() {
    this.skeleton = {
      senderAddress: {},
      clientAddress: {},
      items: [],
    };
  }

  description(value) {
    this.skeleton.description = value;
    return this;
  }

  paymentTerms(value) {
    this.skeleton.paymentTerms = value;
    return this;
  }

  clientName(value) {
    this.skeleton.clientName = value;
    return this;
  }

  clientEmail(value) {
    this.skeleton.clientEmail = value;
    return this;
  }

  senderAddressStreet(value) {
    this.skeleton.senderAddress.street = value;
    return this;
  }

  senderAddressCity(value) {
    this.skeleton.senderAddress.city = value;
    return this;
  }

  senderAddressPostCode(value) {
    this.skeleton.senderAddress.postCode = value;
    return this;
  }

  senderAddressCountry(value) {
    this.skeleton.senderAddress.country = value;
    return this;
  }

  clientAddressStreet(value) {
    this.skeleton.clientAddress.street = value;
    return this;
  }

  clientAddressCity(value) {
    this.skeleton.clientAddress.city = value;
    return this;
  }

  clientAddressPostCode(value) {
    this.skeleton.clientAddress.postCode = value;
    return this;
  }

  clientAddressCountry(value) {
    this.skeleton.clientAddress.country = value;
    return this;
  }

  items(values) {
    this.skeleton.items = values.map((item) => {
      return {
        name: item.itemName,
        quantity: item.qty,
        price: item.price,
        total: item.total,
      };
    });

    return this;
  }

  create() {
    return new Invoice({ data: this.skeleton });
  }

  edit(id) {
    return new Invoice({ data: this.skeleton, id });
  }
}

export default InvoiceBuilder;
