/* eslint-disable react/display-name */
// Dependencies
import styled from "@emotion/styled";
import { Global, useTheme } from "@emotion/react";
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
  const theme = useTheme();
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
          .react-datepicker__current-month,
          .react-datepicker-time__header,
          .react-datepicker-year-header,
          .react-datepicker__day,
          .react-datepicker__time-name {
            color: ${theme.colors.text.primary};
          }

          .react-datepicker__navigation--previous,
          .react-datepicker__navigation--next {
            display: flex;
            align-content: center;
            justify-content: center;
          }

          .react-datepicker__navigation-icon--previous {
            right: unset;
          }

          .react-datepicker__navigation-icon--next {
            left: unset;
          }

          .react-datepicker__navigation--previous {
            left: 19px;
          }

          .react-datepicker__navigation--next {
            right: 19px;
          }

          .react-datepicker {
            font-family: "Spartan";
            padding: 10px 15px;
            background-color: ${theme.colors.background.datepicker} !important;
            box-shadow: ${theme.boxShadow.datepicker};
            border-radius: 8px;
            border: none;
          }

          .react-datepicker__header {
            background-color: ${theme.colors.background.datepicker} !important;
            border-bottom: none;
            padding: 25px 0 25px 0;
          }

          .react-datepicker__triangle {
            display: none;
          }

          .react-datepicker__month {
            font-weight: 800;
          }

          .react-datepicker__day[aria-selected="true"] {
            background-color: ${theme.colors.background.datepicker} !important;
            color: #7c5dfa;
          }

          .react-datepicker__day:hover {
            background-color: ${theme.colors.background.datepicker} !important;
            color: #7c5dfa;
          }

          .react-datepicker__day--keyboard-selected {
            background-color: ${theme.colors.background.datepicker} !important;
          }

          .react-datepicker__navigation {
            top: 28px;
          }

          .react-datepicker__day-names {
            display: none;
          }

          .react-datepicker__day,
          .react-datepicker__time-name {
            margin: 0.06rem;
          }

          .react-datepicker__navigation-icon--previous::before,
          .react-datepicker__navigation-icon--next::before {
            border-color: #7c5dfa;
          }

          .react-datepicker__navigation-icon--previous::before:hover,
          .react-datepicker__navigation-icon--next::before:hover {
            border-color: #9277ff;
          }

          .react-datepicker__day--outside-month {
            color: ${theme.colors.text.datepickerOutsideMonthText} !important;
          }
        `}
      />
      <DatePicker {...overriddenProps} customInput={<CustomInput />} />
    </>
  );
};

export default DateField;
