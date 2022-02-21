// Dependencies
import dayjs from "dayjs";

// Data
import chargesValues from "./chargesValues";

const getInitialValues = () => ({
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
    invoiceDate: dayjs().format("DD/MM/YYYY"),
    paymentTerms: "",
    projectDescription: "",
  },
  charges: [chargesValues],
});

export default getInitialValues;
