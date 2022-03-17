/* eslint-disable react/display-name */
// Dependencies
import styled from "@emotion/styled";
import { Global } from "@emotion/react";
import { css } from "@emotion/react";
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

  return (
    <>
      <Global
        styles={css`
          .react-datepicker {
            font-family: "Spartan";
            padding: 10px 15px;
            background: #ffffff;
            box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
            border-radius: 8px;
            border: none;
          }

          .react-datepicker__header {
            background-color: white;
            border-bottom: none;
            color: black;
            padding: 25px 0 25px 0;
          }

          .react-datepicker__triangle {
            display: none;
          }

          .react-datepicker__month {
            font-weight: 800;
          }

          .react-datepicker__day[aria-selected="true"] {
            background-color: white;
            color: #7c5dfa;
          }

          .react-datepicker__day:hover {
            background-color: white;
            color: #7c5dfa;
          }

          .react-datepicker__day--keyboard-selected {
            background-color: white;
            color: inherit;
          }

          .react-datepicker__navigation {
            top: 28px;
          }

          .react-datepicker__day-names {
            display: none;
          }

          .react-datepicker__navigation--previous {
            left: 20px;
          }

          .react-datepicker__day,
          .react-datepicker__time-name {
            margin: 0.06rem;
          }

          .react-datepicker__navigation--next {
            right: 20px;
          }

          .react-datepicker__navigation-icon--previous::before,
          .react-datepicker__navigation-icon--next::before {
            border-color: #7c5dfa;
          }

          .react-datepicker__navigation-icon--previous::before:hover,
          .react-datepicker__navigation-icon--next::before:hover {
            border-color: #9277ff;
          }
        `}
      />
      <DatePicker {...overriddenProps} customInput={<CustomInput />} />
    </>
  );
};

export default DateField;
