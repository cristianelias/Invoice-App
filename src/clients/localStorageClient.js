import initialState from "../mocks/data.json";

const storage = window.localStorage;
const INVOICES = "invoices";

const populateInvoices = () => {
  console.log(initialState);
  _setInvoices(initialState);
};

const _getInvoices = () => JSON.parse(storage.getItem(INVOICES));
const _setInvoices = (payload) =>
  storage.setItem(INVOICES, JSON.stringify(payload));

const getInvoices = ({ onSuccess }) => {
  try {
    if (storage.getItem(INVOICES) === null) {
      populateInvoices();
    }

    onSuccess(_getInvoices());
  } catch (error) {
    console.log("localStorageClient: Unable to get invoices.");
  }
};

const addInvoice = ({ payload, onSuccess }) => {
  try {
    const currentInvoices = _getInvoices();
    _setInvoices([...currentInvoices, payload]);

    onSuccess(_getInvoices());
  } catch (error) {
    console.log("localStorageClient: Unable to add invoice.");
  }
};

const editInvoice = ({ id, payload, onSuccess }) => {
  try {
    const currentInvoices = _getInvoices();
    const newInvoiceArray = currentInvoices.filter(
      (current) => current.id !== id
    );
    const invoiceToEdit = currentInvoices.filter(
      (current) => current.id === id
    )[0];

    newInvoiceArray.push(Object.assign({}, invoiceToEdit, payload));
    _setInvoices(newInvoiceArray);

    onSuccess(_getInvoices());
  } catch (error) {
    console.log("localStorageClient: Unable to edit invoice.");
  }
};

const deleteInvoice = ({ id, onSuccess }) => {
  try {
    const currentInvoices = _getInvoices();
    _setInvoices(currentInvoices.filter((current) => current.id !== id));

    onSuccess(_getInvoices());
  } catch (error) {
    console.log("localStorageClient: Unable to delete invoice.");
  }
};

const markInvoiceAsPaid = ({ id, onSuccess }) => {
  try {
    const currentInvoices = _getInvoices();
    const invoiceToModify = currentInvoices.find((inv) => inv.id === id);

    invoiceToModify.status = "paid";

    _setInvoices([...currentInvoices, invoiceToModify]);

    onSuccess(_getInvoices());
  } catch (error) {
    console.log("localStorageClient: Unable to mark invoice as paid.");
  }
};

export {
  getInvoices,
  addInvoice,
  editInvoice,
  deleteInvoice,
  markInvoiceAsPaid,
};
