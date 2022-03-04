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
`;

export default StyledField;
