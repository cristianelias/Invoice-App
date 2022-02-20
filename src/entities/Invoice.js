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

class Invoice {
  constructor({ data, id }) {
    this.data = Object.assign({}, data);
    this.setCreationAndPaymentDue();
    this.setTotal();

    if (id === undefined) {
      this.generateId();
      this.setIntialStatus();
    } else {
      this.data.id = id;
    }
  }

  generateId() {
    this.data.id = _createId();
  }

  setCreationAndPaymentDue() {
    const DATE_FORMAT = "YYYY/MM/DD";
    const createdAtDateObj = dayjs();
    const paymentDueDateObj = createdAtDateObj.add(
      this.data.paymentTerms,
      "day"
    );

    this.data.createdAt = createdAtDateObj.format(DATE_FORMAT);
    this.data.paymentDue = paymentDueDateObj.format(DATE_FORMAT);
  }

  setIntialStatus() {
    // TODO: We'll need to add a condition to handle the save as draft use case
    this.data.status = "pending";
  }

  asJSON() {
    return this.data;
  }

  setTotal() {
    this.data.total = this.data.items.reduce((acum, { price, quantity }) => {
      const parsedPrice = parseInt(price);
      const parsedQuantity = parseInt(quantity);

      if (isNaN(parsedPrice) || isNaN(parsedQuantity)) {
        throw new Error("Invoice items: Price and Quantity must be numbers.");
      }

      return acum + parsedPrice * parsedQuantity;
    }, 0);
  }
}

export default Invoice;
