/* eslint-disable react/display-name */
// Dependencies
import styled from "@emotion/styled";
import { Field, ErrorMessage, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { forwardRef } from "react";

// Assets
import iconCalendar from "../../../assets/icon-calendar.svg";

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Img = styled.img`
  height: 20px;
`;

const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <Button type="button" className="field__input" onClick={onClick} ref={ref}>
    <span>{value}</span>
    <Img src={iconCalendar} alt="Calendar, click to select payment terms" />
  </Button>
));

const InvoiceDateField = ({ label, name, classes }) => {
  const { setFieldValue } = useFormikContext();

  return (
    <Field name={name}>
      {({ field: { value }, meta: { error, touched } }) => {
        return (
          <div
            className={`${classes} ${error && touched ? "field--error" : ""}`}
          >
            <label className="field__label" htmlFor={name}>
              {label}
            </label>

            <DatePicker
              selected={value}
              onChange={(value) => setFieldValue(name, value)}
              customInput={<CustomInput />}
              dateFormat="MMM d, yyyy"
            />

            <ErrorMessage name={name} className="field__validation">
              {(msg) => <div className="error">{msg}</div>}
            </ErrorMessage>
          </div>
        );
      }}
    </Field>
  );
};
export default InvoiceDateField;
