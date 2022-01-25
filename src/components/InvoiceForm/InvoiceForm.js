// Dependencies
// eslint-disable-next-line
import { Formik, Form } from "formik";
// eslint-disable-next-line
import { createRoutesFromChildren, useNavigate } from "react-router-dom";

// Components
import Field from "./Field/Field";
import Gradient from "../Gradient/Gradient";
import PrimaryButton from "../Button/PrimaryButton/PrimaryButton";
import SecondaryButton from "../Button/SecondaryButton/SecondaryButton";
import TertiaryButton from "../Button/TertiaryButton/TertiaryButton";
import FormRowList from "./FormRowList/FormRowList";

// Styles
import "./InvoiceForm.css";

const InvoiceForm = (props) => {
  const { title, footer } = props;
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ fromStreetAddress: "" }}
      // validate={(values) => {
      //   const errors = {};
      //   if (!values.email) {
      //     errors.email = "Required";
      //   } else if (
      //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      //   ) {
      //     errors.email = "Invalid email address";
      //   }
      //   return errors;
      // }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        console.log(setSubmitting);
      }}
    >
      {({ submitForm, values, handleChange }) => (
        <>
          <div className="invoice-form">
            <Form className="invoice-form__form">
              {title}

              <section className="three-input-container">
                <h2 className="h2">Bill From</h2>

                <Field
                  fieldName="fromStreetAddress"
                  labelText="Street Address"
                  validationText="This field is required, troesma."
                  inputType="text"
                  value={values.fromStreetAddress}
                  onChange={handleChange}
                />

                <Field
                  fieldName="fromCity"
                  labelText="City"
                  validationText="This field is required, troesma."
                  inputType="text"
                  value={values.fromCity}
                  onChange={handleChange}
                />

                <Field
                  fieldName="fromPostCode"
                  labelText="Post Code"
                  validationText="This field is required, troesma."
                  inputType="text"
                  value={values.fromPostCode}
                  onChange={handleChange}
                />

                <Field
                  fieldName="fromCountry"
                  labelText="Country"
                  validationText="This field is required, troesma."
                  inputType="text"
                  value={values.fromCountry}
                  onChange={handleChange}
                />
              </section>

              <section>
                <h2 className="h2">Bill To</h2>

                <Field
                  fieldName="clientName"
                  labelText="Client's Name"
                  validationText="This field is required, troesma."
                  inputType="text"
                  value={values.clientName}
                  onChange={handleChange}
                />

                <Field
                  fieldName="clientEmail"
                  labelText="Client's Email"
                  validationText="This field is required, troesma."
                  inputType="email"
                  value={values.clientEmail}
                  onChange={handleChange}
                />

                <Field
                  fieldName="toStreetAddress"
                  labelText="Street Address"
                  validationText="This field is required, troesma."
                  inputType="text"
                  value={values.toStreetAddress}
                  onChange={handleChange}
                />

                <section className="three-input-container">
                  <Field
                    fieldName="toCity"
                    labelText="City"
                    validationText="This field is required, troesma."
                    inputType="text"
                    value={values.toCity}
                    onChange={handleChange}
                  />

                  <Field
                    fieldName="toPostCode"
                    labelText="Post Code"
                    validationText="This field is required, troesma."
                    inputType="text"
                    value={values.toPostCode}
                    onChange={handleChange}
                  />

                  <Field
                    fieldName="toCountry"
                    labelText="Country"
                    validationText="This field is required, troesma."
                    inputType="text"
                    value={values.toCountry}
                    onChange={handleChange}
                  />
                </section>
              </section>

              <section className="two-input-container">
                <Field
                  fieldName="invoiceDate"
                  labelText="Invoice Date"
                  validationText="This field is required, troesma."
                  inputType="date"
                  placeholder="21 Aug 2021"
                  value={values.invoiceDate}
                  onChange={handleChange}
                />

                <Field
                  fieldName="paymentTerms"
                  labelText="Payment Terms"
                  validationText="This field is required, troesma."
                  inputType="text"
                  value={values.paymentTerms}
                  onChange={handleChange}
                />

                <Field
                  fieldName="projectDescription"
                  labelText="Project Description"
                  validationText="This field is required, troesma."
                  inputType="text"
                  placeholder="e.g. Graphic Design Service"
                  value={values.projectDescription}
                  onChange={handleChange}
                />
              </section>

              <FormRowList />

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

            <PrimaryButton onClick={submitForm} text="Save & Send" />
          </footer>
        </>
      )}
    </Formik>
  );
};

export default InvoiceForm;
