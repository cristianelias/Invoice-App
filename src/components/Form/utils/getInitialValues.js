// Data
import chargesValues from "./chargesValues";

const getInitialValues = () => ({
  from: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  to: {
    clientName: "",
    clientEmail: "",
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  details: {
    invoiceDate: new Date(),
    paymentTerms: "1",
    projectDescription: "",
  },
  charges: [chargesValues],
});

export default getInitialValues;
