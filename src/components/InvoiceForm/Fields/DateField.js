/* eslint-disable react/display-name */
// Dependencies
import styled from "@emotion/styled";
import { useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { forwardRef } from "react";

// Assets
import iconCalendar from "../../../assets/icon-calendar.svg";

// Styles
import StyledInput from "./Styled/StyledInput";

const Button = styled(StyledInput)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Img = styled.img`
  height: 20px;
`;

const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <Button as={"button"} type="button" onClick={onClick} ref={ref}>
    <span>{value}</span>
    <Img src={iconCalendar} alt="Calendar, click to select payment terms" />
  </Button>
));

const DateField = (props) => {
  const { setFieldValue } = useFormikContext();

  const overriddenProps = Object.assign({}, props, {
    selected: props.value,
    onChange: (value) => setFieldValue(props.name, value),
    dateFormat: "MMM d, yyyy",
  });

  return <DatePicker {...overriddenProps} customInput={<CustomInput />} />;
};

export default DateField;
