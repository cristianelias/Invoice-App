import invoicesFromServer from "../mocks/data.json";

const storage = window.localStorage;
const INVOICES = "invoicesFromServer";

class LocalStorageClient {
  constructor() {
    this._setItem(INVOICES, invoicesFromServer);
  }

  _getInvoices() {
    return JSON.parse(storage.getItem(INVOICES));
  }

  _setItem(key, data) {
    storage.setItem(key, JSON.stringify(data));
  }

  fetchInvoices() {
    return this._getInvoices();
  }

  postInvoice(invoice) {
    const oldInvoices = this._getInvoices();
    const invoices = [...oldInvoices];
    invoices.push(invoice);
    this._setItem(INVOICES, invoices);
    return this._getInvoices();
  }
}

export default new LocalStorageClient();
