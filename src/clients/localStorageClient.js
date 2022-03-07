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

export { getInvoices, addInvoice };
