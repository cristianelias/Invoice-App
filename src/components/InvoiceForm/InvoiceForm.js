// Dependencies
import React, { Fragment } from "react";
import { Formik, Form, FieldArray } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

// Components
import InvoiceFieldFactory from "./InvoiceFieldFactory/InvoiceFieldFactory";
import Gradient from "../Gradient/Gradient";
import PrimaryButton from "../Button/PrimaryButton/PrimaryButton";
import SecondaryButton from "../Button/SecondaryButton/SecondaryButton";
import TertiaryButton from "../Button/TertiaryButton/TertiaryButton";

// Styles
import "./InvoiceForm.css";

// Assets
import iconTrashCan from "../../assets/icon-delete.svg";

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
  },
  paymentTerms: {
    label: "Payment Terms",
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
    type: "calculated",
    multiplicand: "Price",
    mutliplier: "Qty.",
  },
};

const chargesValues = {
  itemName: "",
  qty: "",
  price: "",
  total: "",
};

const formValues = {
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

const STRING_MIN_LENGTH = 4;
const STRING_MIN_MESASGE = `This field must be at least ${STRING_MIN_LENGTH} characters long.`;
const STRING_MAX_LENGTH = 30;
const STRING_MAX_MESASGE = `This field cannot be longer than ${STRING_MAX_LENGTH} characters.`;
const NUMBER_MIN_VALUE = 1;
const PRICE_MAX_VALUE = 1000000;
const QTY_MAX_VALUE = 1000;

const commonSchemas = {
  streetAddress: Yup.string()
    .min(STRING_MIN_LENGTH, STRING_MIN_MESASGE)
    .max(STRING_MAX_LENGTH, STRING_MAX_MESASGE)
    .required("You need to specify a Street Address"),
  city: Yup.string()
    .min(STRING_MIN_LENGTH, STRING_MIN_MESASGE)
    .max(STRING_MAX_LENGTH, STRING_MAX_MESASGE)
    .required("You need to specify a City"),
  postCode: Yup.string()
    .min(STRING_MIN_LENGTH, STRING_MIN_MESASGE)
    .max(STRING_MAX_LENGTH, STRING_MAX_MESASGE)
    .required("You need to specify a Post Code"),
  country: Yup.string()
    .min(STRING_MIN_LENGTH.STRING_MIN_MESASGE)
    .max(STRING_MAX_LENGTH, STRING_MAX_MESASGE)
    .required("You need to specify a Country"),
};

const validationSchema = Yup.object().shape({
  from: Yup.object().shape({
    streetAddress: commonSchemas.streetAddress,
    city: commonSchemas.city,
    postCode: commonSchemas.postCode,
    country: commonSchemas.country,
  }),
  to: Yup.object().shape({
    clientName: Yup.string()
      .min(STRING_MIN_LENGTH.STRING_MIN_MESASGE)
      .max(STRING_MAX_LENGTH, STRING_MAX_MESASGE)
      .required("You need to specify a Client Name"),
    clientEmail: Yup.string()
      .min(STRING_MIN_LENGTH.STRING_MIN_MESASGE)
      .max(STRING_MAX_LENGTH, STRING_MAX_MESASGE)
      .required("You need to specify an Client E-mail"),
    streetAddress: commonSchemas.streetAddress,
    city: commonSchemas.city,
    postCode: commonSchemas.postCode,
    country: commonSchemas.country,
  }),
  details: Yup.object().shape({
    invoiceDate: Yup.string()
      .min(STRING_MIN_LENGTH.STRING_MIN_MESASGE)
      .max(STRING_MAX_LENGTH, STRING_MAX_MESASGE)
      .required("You need to specify an Invoice Date"),
    paymentTerms: Yup.string()
      .min(STRING_MIN_LENGTH.STRING_MIN_MESASGE)
      .max(STRING_MAX_LENGTH)
      .required("You need to choose the desired Payment Terms"),
    projectDescription: Yup.string()
      .min(STRING_MIN_LENGTH.STRING_MIN_MESASGE)
      .max(STRING_MAX_LENGTH, STRING_MAX_MESASGE)
      .required("You need to specify a Project Description"),
    itemList: Yup.array().of(
      Yup.object().shape({
        itemName: Yup.string()
          .min(STRING_MIN_LENGTH.STRING_MIN_MESASGE)
          .max(STRING_MAX_LENGTH, STRING_MAX_MESASGE)
          .required("You need to specify an Item Name"),
        quantity: Yup.number()
          .min(NUMBER_MIN_VALUE)
          .max(QTY_MAX_VALUE)
          .required("You need to specify a Quantity")
          .typeError("Quantity must be a number"),
        price: Yup.number()
          .min(NUMBER_MIN_VALUE)
          .max(PRICE_MAX_VALUE)
          .required("You need to specify a Price")
          .typeError("Price must be a number"),
      })
    ),
  }),
});

const InvoiceForm = (props) => {
  const { title } = props;
  const navigate = useNavigate();

  const createField = ({ name, fieldsetId, index }) => {
    const fieldMeta = inputDataByName[name];

    return (
      <InvoiceFieldFactory
        key={index}
        name={`${fieldsetId}.${name}`}
        text={fieldMeta.label}
        type={fieldMeta.type}
      />
    );
  };

  return (
    <Formik
      initialValues={formValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
      validateOnChange={true}
      validateOnBlur={false}
    >
      {({ values, errors, handleSubmit }) => (
        <>
          <pre>
            <code>{JSON.stringify(values, null, 2)}</code>
          </pre>
          <pre>
            <code>{JSON.stringify(errors, null, 2)}</code>
          </pre>
          <div className="invoice-form">
            <Form className="invoice-form__form">
              {title}

              <fieldset>
                <h2 className="h2">Bill From</h2>
                {Object.keys(values.from).map((fieldName, index) =>
                  createField({ fieldsetId: "from", name: fieldName, index })
                )}
              </fieldset>

              <fieldset>
                <h2 className="h2">Bill To</h2>

                {Object.keys(values.to).map((fieldName, index) =>
                  createField({ fieldsetId: "to", name: fieldName, index })
                )}
              </fieldset>

              <fieldset>
                {Object.keys(values.details).map((fieldName, index) =>
                  createField({ fieldsetId: "details", name: fieldName, index })
                )}
              </fieldset>

              <fieldset className="item-details-fields">
                <h2 className="item-list">Item List</h2>
                <FieldArray name="charges">
                  {({ push, remove }) => (
                    <div>
                      {values.charges.map((item, index) => (
                        <div key={index}>
                          {Object.keys(item).map((fieldName) =>
                            createField({
                              fieldsetId: `charges[${index}]`,
                              name: fieldName,
                              index: `${index}x${fieldName}`,
                            })
                          )}

                          <button
                            onClick={() => {
                              remove(index);
                            }}
                          >
                            <img
                              src={iconTrashCan}
                              alt="Trash icon. Click to delete."
                            ></img>
                          </button>
                        </div>
                      ))}
                      <button
                        className="five-fields-container__add-new-item button-component tertiary-button"
                        onClick={() => push(chargesValues)}
                      >
                        + Add New Item
                      </button>
                    </div>
                  )}
                </FieldArray>
              </fieldset>

              <p className="field__validation five-fields-container__validation">
                - All fields must be added
              </p>
            </Form>
          </div>
          <Gradient />
          <footer className="footer-form">
            <TertiaryButton
              onClick={() => navigate(-1, { replace: true })}
              text="Discard"
            />

            <SecondaryButton
              onClick={() => navigate(-1, { replace: true })}
              text="Save as Draft"
            />

            <PrimaryButton onClick={() => handleSubmit()} text="Save & Send" />
          </footer>
        </>
      )}
    </Formik>
  );
};

export default InvoiceForm;
