import chargesValues from "./chargesValues";

const initialValues = {
  from: {
    streetAddress: "",
    city: "",
    postCode: "",
    country: "",
  },
  to: {
    clientName: "",
    clientEmail: "",
    streetAddress: "",
    city: "",
    postCode: "",
    country: "",
  },
  details: {
    invoiceDate: "",
    paymentTerms: "",
    projectDescription: "",
  },
  charges: [chargesValues],
};

export default initialValues;
