const inputDataByName = {
  streetAddress: {
    label: "Street Address",
  },
  city: {
    label: "City",
  },
  postCode: {
    label: "Post Code",
  },
  country: {
    label: "Country",
  },
  clientName: {
    label: "Client's Name",
  },
  clientEmail: {
    label: "Client's Email",
    placeholder: "e.g. email@example.com",
  },
  invoiceDate: {
    label: "Invoice Date",
    type: "date",
  },
  paymentTerms: {
    label: "Payment Terms",
    type: "select",
    values: [
      {
        value: 1,
        text: "Net 1 Day",
        selected: true,
      },
      {
        value: 7,
        text: "Net 7 Days",
      },
      {
        value: 14,
        text: "Net 14 Days",
      },
      {
        value: 30,
        text: "Net 30 Days",
      },
    ],
  },
  projectDescription: {
    label: "Project Description",
    placeholder: "e.g. Graphic Design Service",
  },
  itemName: {
    label: "Item Name",
    placeholder: "e.g. Banner Design",
  },
  qty: {
    label: "Qty.",
  },
  price: {
    label: "Price",
  },
  total: {
    label: "Total",
    type: "total",
  },
};

export default inputDataByName;
