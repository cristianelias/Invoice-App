// Dependencies
import dayjs from "dayjs";

const _createId = () => {
  const twoRandomUpperChars = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .slice(0, 2)
    .toUpperCase();
  const fourRandomNumbers = Math.floor(1000 + Math.random() * 9000);

  return `${twoRandomUpperChars}${fourRandomNumbers}`;
};

class InvoiceBuilder {
  constructor() {
    this.data = {
      senderAddress: {},
      clientAddress: {},
      items: [],
    };
  }

  description(value) {
    this.data.description = value;
    return this;
  }

  paymentTerms(value) {
    this.data.paymentTerms = value;
    return this;
  }

  clientName(value) {
    this.data.clientName = value;
    return this;
  }

  clientEmail(value) {
    this.data.clientEmail = value;
    return this;
  }

  senderAddressStreet(value) {
    this.data.senderAddress.street = value;
    return this;
  }

  senderAddressCity(value) {
    this.data.senderAddress.city = value;
    return this;
  }

  senderAddressPostCode(value) {
    this.data.senderAddress.postCode = value;
    return this;
  }

  senderAddressCountry(value) {
    this.data.senderAddress.country = value;
    return this;
  }

  clientAddressStreet(value) {
    this.data.clientAddress.street = value;
    return this;
  }

  clientAddressCity(value) {
    this.data.clientAddress.city = value;
    return this;
  }

  clientAddressPostCode(value) {
    this.data.clientAddress.postCode = value;
    return this;
  }

  clientAddressCountry(value) {
    this.data.clientAddress.country = value;
    return this;
  }

  items(values) {
    this.data.items = values.map(({ itemName, qty, price }) => {
      const parsedPrice = parseInt(price);
      const parsedQuantity = parseInt(qty);

      const calculatedTotal = parsedPrice * parsedQuantity;

      return {
        name: itemName,
        quantity: qty,
        price: price,
        total: calculatedTotal,
      };
    });

    return this;
  }

  generateId() {
    this.data.id = _createId();
  }

  setCreationAndPaymentDue() {
    this.data.createdAt = dayjs().format();
    this.data.paymentDue = new dayjs()
      .add(this.data.paymentTerms, "day")
      .format();
  }

  setIntialStatus() {
    this.data.status = "pending";
  }

  setTotal() {
    this.data.total = this.data.items.reduce(
      (acum, { total }) => (acum = acum + total),
      0
    );
  }

  asInvoice() {
    this.setCreationAndPaymentDue();
    this.setTotal();
    this.setIntialStatus();
    this.generateId();

    return this.data;
  }

  asEdited(id) {
    this.setCreationAndPaymentDue();
    this.setTotal();
    this.data.id = id;
    return this.data;
  }

  asDraft() {
    this.generateId();

    return this.data;
  }
}

export default InvoiceBuilder;
