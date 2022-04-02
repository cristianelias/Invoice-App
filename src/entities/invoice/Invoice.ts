// Dependencies
import dayjs from "dayjs";

// Types
import Address from "./types/Address";
import Charges from "./types/Charges";

class Invoice {
  public constructor() {
    this.generateId();
  }

  private generateId(): void {
    const twoRandomUpperChars = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .slice(0, 2)
      .toUpperCase();
    const fourRandomNumbers = Math.floor(1000 + Math.random() * 9000);

    this.id = `${twoRandomUpperChars}${fourRandomNumbers}`;
  }

  calculatePaymentDue(createdAt, paymentTerms): void {
    this.createdAt = createdAt;
    this.paymentTerms = paymentTerms;
    this.paymentDue = dayjs(createdAt).add(paymentTerms, "day").format();
  }

  private senderAddress: Address;

  private clientAddress: Address;

  private items: Charges[];

  private total: number;

  private status: string;

  private id: string;

  private createdAt: string;

  private paymentDue: string;

  private description: string;

  private paymentTerms: number;

  private clientName: string;

  private clientEmail: string;

  public setId(value: string) {
    this.id = value;
  }

  public setCreatedAt(value: string) {
    this.createdAt = value;
  }

  public setSenderAddress(senderAddress: Address): void {
    this.senderAddress = senderAddress;
  }

  public setClientAddress(clientAddress: Address): void {
    this.clientAddress = clientAddress;
  }

  public setItems(items: []): void {
    this.items = items.map(({ itemName, qty, price }) => {
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

    this.calculateTotal();
  }

  private calculateTotal() {
    this.total = this.items.reduce(
      (acum, { total }) => (acum = acum + total),
      0
    );
  }

  public setTotal(total: number): void {
    this.total = total;
  }

  public setStatus(status: string): void {
    this.status = status;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public setPaymentTerms(paymentTerms: number): void {
    this.paymentTerms = paymentTerms;
  }

  public setClientName(clientName: string): void {
    this.clientName = clientName;
  }

  public setClientEmail(clientEmail: string): void {
    this.clientEmail = clientEmail;
  }
}

export default Invoice;
