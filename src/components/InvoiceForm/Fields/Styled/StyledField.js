// Dependencies
import styled from "@emotion/styled";

const StyledField = styled.div`
  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }

  &::placeholder {
    font-family: Spartan;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.25px;
    color: #0c0e16;
    opacity: 0.4;
  }

  &.error {
    color: #ec5757;
    font-weight: 600;
    margin-top: 10px;
    font-size: 10px;
    line-height: 15px;
    letter-spacing: -0.208333px;
  }

  &.error {
    color: #ec5757;
    font-weight: 600;
    margin-top: 10px;
    font-size: 10px;
    line-height: 15px;
    letter-spacing: -0.208333px;

    input {
      border: solid 1px #ec5757;
    }
  }

  &.field-from-streetAddress {
    grid-column: 1/4;
  }

  &.field-to-clientName,
  &.field-to-clientEmail,
  &.field-to-streetAddress {
    grid-column: 1/4;
  }

  &.field-details-projectDescription {
    grid-column: 1/3;
  }

  &[class*="-qty"] {
    grid-column: 2/3;
    min-width: 42px;
  }

  &[class*="-qty"] > input {
    padding: 5px;
    text-align: center;
  }

  &.field__input[name$=".total"] {
    text-align: left;
    border: none;
    color: #888eb0;
    padding: 5px;
  }

  @media (max-width: 650px) {
    &.field__delete > img {
      width: 15px;
    }
  }

  @media (max-width: 500px) {
    &[class*="-itemName"] {
      grid-column: 1/5;
    }

    &[class*="-qty"] {
      grid-column: 1/2;
    }

    &.field__delete {
      padding: 0 10px;
    }

    &.field-from-streetAddress {
      grid-column: 1/3;
    }

    &.field-from-city {
      grid-column: 1/2;
    }

    &.field-from-postCode {
      grid-column: 2/3;
    }

    &.field-from-country {
      grid-column: 1/3;
    }

    &.field-to-clientName,
    &.field-to-clientEmail,
    &.field-to-streetAddress {
      grid-column: 1/3;
    }

    &.field-to-city {
      grid-column: 1/2;
    }

    &.field-to-postCode {
      grid-column: 2/3;
    }

    &.field-to-country {
      grid-column: 1/3;
      width: 100%;
    }

    &.field-details-invoiceDate {
      grid-column: 1/2;
    }

    &.field-details-projectDescription {
      grid-column: 1/2;
    }

    &.field-details-paymentTerms {
      grid-column: 1/2;
    }
    &.footer-form > .button-component {
      padding: 10px 24px;
    }
  }
`;

export default StyledField;
