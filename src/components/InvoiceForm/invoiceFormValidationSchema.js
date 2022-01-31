import * as Yup from "yup";

const assembleRequiredInputValidation = (inputName) =>
  `Please specify the ${inputName}.`;

const assembleTypeInputValidation = (inputName, inputType) =>
  `${inputName} must be a ${inputType}.`;
const STRING_MIN_LENGTH = 4;
const STRING_MIN_MESASGE = `This field must be at least ${STRING_MIN_LENGTH} characters long.`;
const STRING_MAX_LENGTH = 30;
const STRING_MAX_MESASGE = `This field can not be longer than ${STRING_MAX_LENGTH} characters.`;

const QTY_MIN_VALUE = 1;
const QTY_MIN_MESSAGE = `The minimum quantity is ${QTY_MIN_VALUE}.`;
const QTY_MAX_VALUE = 10000;
const QTY_MAX_MESSAGE = `The minimum quantity is ${QTY_MAX_VALUE}.`;

const PRICE_MIN_VALUE = 1;
const PRICE_MIN_MESSAGE = `The minimum price is ${PRICE_MIN_VALUE}.`;
const PRICE_MAX_VALUE = 1000000;
const PRICE_MAX_MESSAGE = `The minimum price is ${PRICE_MAX_VALUE}.`;

const commonSchemas = {
  streetAddress: Yup.string()
    .min(STRING_MIN_LENGTH, STRING_MIN_MESASGE)
    .max(STRING_MAX_LENGTH, STRING_MAX_MESASGE)
    .required(assembleRequiredInputValidation("Street Address")),
  city: Yup.string()
    .min(STRING_MIN_LENGTH, STRING_MIN_MESASGE)
    .max(STRING_MAX_LENGTH, STRING_MAX_MESASGE)
    .required(assembleRequiredInputValidation("City")),
  postCode: Yup.string()
    .min(STRING_MIN_LENGTH, STRING_MIN_MESASGE)
    .max(STRING_MAX_LENGTH, STRING_MAX_MESASGE)
    .required(assembleRequiredInputValidation("Post Code")),
  country: Yup.string()
    .min(STRING_MIN_LENGTH, STRING_MIN_MESASGE)
    .max(STRING_MAX_LENGTH, STRING_MAX_MESASGE)
    .required(assembleRequiredInputValidation("Country")),
};

const invoiceFormValidationSchema = Yup.object().shape({
  from: Yup.object().shape({
    streetAddress: commonSchemas.streetAddress,
    city: commonSchemas.city,
    postCode: commonSchemas.postCode,
    country: commonSchemas.country,
  }),
  to: Yup.object().shape({
    streetAddress: commonSchemas.streetAddress,
    city: commonSchemas.city,
    postCode: commonSchemas.postCode,
    country: commonSchemas.country,
    clientName: Yup.string()
      .min(STRING_MIN_LENGTH, STRING_MIN_MESASGE)
      .max(STRING_MAX_LENGTH, STRING_MAX_MESASGE)
      .required(assembleRequiredInputValidation("Client Name")),
    clientEmail: Yup.string()
      .min(STRING_MIN_LENGTH, STRING_MIN_MESASGE)
      .max(STRING_MAX_LENGTH, STRING_MAX_MESASGE)
      .required(assembleRequiredInputValidation("Client E-mail")),
  }),
  details: Yup.object().shape({
    invoiceDate: Yup.string()
      .min(STRING_MIN_LENGTH, STRING_MIN_MESASGE)
      .max(STRING_MAX_LENGTH, STRING_MAX_MESASGE)
      .required(assembleRequiredInputValidation("Invoice Date")),
    paymentTerms: Yup.string()
      .min(STRING_MIN_LENGTH, STRING_MIN_MESASGE)
      .max(STRING_MAX_LENGTH)
      .required("Please choose the desired Payment Terms"),
    projectDescription: Yup.string()
      .min(STRING_MIN_LENGTH, STRING_MIN_MESASGE)
      .max(STRING_MAX_LENGTH, STRING_MAX_MESASGE)
      .required(assembleRequiredInputValidation("Project Description")),
  }),
  charges: Yup.array().of(
    Yup.object().shape({
      itemName: Yup.string()
        .min(STRING_MIN_LENGTH, STRING_MIN_MESASGE)
        .max(STRING_MAX_LENGTH, STRING_MAX_MESASGE)
        .required(assembleRequiredInputValidation("Item Name")),
      qty: Yup.number()
        .min(QTY_MIN_VALUE, QTY_MIN_MESSAGE)
        .max(QTY_MAX_VALUE, QTY_MAX_MESSAGE)
        .required(assembleRequiredInputValidation("Quantity"))
        .typeError(assembleTypeInputValidation("Quantity", "number")),
      price: Yup.number()
        .min(PRICE_MIN_VALUE, PRICE_MIN_MESSAGE)
        .max(PRICE_MAX_VALUE, PRICE_MAX_MESSAGE)
        .required(assembleRequiredInputValidation("Price"))
        .typeError(assembleTypeInputValidation("Price", "number")),
    })
  ),
});

export default invoiceFormValidationSchema;
