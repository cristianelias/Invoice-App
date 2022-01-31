// Dependencies
import React, { Fragment } from "react";
import { Formik, Form, FieldArray } from "formik";
import { useNavigate } from "react-router-dom";

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

// Data
import invoiceFormValidationSchema from "./invoiceFormValidationSchema";
import inputDataByName from "./inputDataByName";
import chargesValues from "./chargesValues";

const InvoiceForm = (props) => {
  const { title, initialValues } = props;
  const navigate = useNavigate();

  const createField = ({ name, fieldsetId, index, fields }) => {
    const fieldMeta = inputDataByName[name];

    return (
      <InvoiceFieldFactory
        key={index}
        name={`${fieldsetId}.${name}`}
        meta={fieldMeta}
        fields={fields}
      />
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={invoiceFormValidationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
      validateOnChange={true}
      validateOnBlur={false}
    >
      {({ values, handleSubmit }) => (
        <>
          <div className="invoice-form">
            <Form className="invoice-form__form">
              {title}

              <fieldset className="fieldset-from">
                <h2 className="invoice-form-heading">Bill From</h2>
                {Object.keys(values.from).map((fieldName, index) =>
                  createField({ fieldsetId: "from", name: fieldName, index })
                )}
              </fieldset>

              <fieldset className="fieldset-to">
                <h2 className="invoice-form-heading">Bill To</h2>

                {Object.keys(values.to).map((fieldName, index) =>
                  createField({ fieldsetId: "to", name: fieldName, index })
                )}
              </fieldset>

              <fieldset className="fieldset-details">
                {Object.keys(values.details).map((fieldName, index) =>
                  createField({ fieldsetId: "details", name: fieldName, index })
                )}
              </fieldset>

              <fieldset className="fieldset-charges">
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
                              fields: values.charges[index],
                            })
                          )}

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();
                              if (values.charges.length > 1) {
                                remove(index);
                              }
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
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          push(chargesValues);
                        }}
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
