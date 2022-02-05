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
  },
  invoiceDate: {
    label: "Invoice Date",
    type: "date",
    min: "1986-11-13",
    max: "2199-12-31",
  },
  paymentTerms: {
    label: "Payment Terms",
    type: "select",
    values: [
      {
        value: 1,
        text: 1,
        selected: true,
      },
      {
        value: 3,
        text: 3,
      },
      {
        value: 6,
        text: 6,
      },
      {
        value: 9,
        text: 9,
      },
      {
        value: 12,
        text: 12,
      },
      {
        value: 18,
        text: 18,
      },
      {
        value: 36,
        text: 36,
      },
      {
        value: 72,
        text: 72,
      },
      {
        value: 90,
        text: 90,
      },
    ],
  },
  projectDescription: {
    label: "Project Description",
  },
  itemName: {
    label: "Item Name",
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
