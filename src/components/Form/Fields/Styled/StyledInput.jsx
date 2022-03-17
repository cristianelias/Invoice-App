// Dependencies
import styled from "@emotion/styled";

const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  margin-top: 10px;
  padding: 0 12px;
  border: solid 1px #dfe3fa;
  border-radius: 4px;
  outline: none;
  font-family: Spartan;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  letter-spacing: -0.25px;
  color: #0c0e16;

  &[type="date"] {
    padding: 0 0 0 20px;
  }

  &:focus {
    border-color: #7c5dfa;
  }

  &.error:focus {
    border-color: #ec5757;
  }

  @media (max-width: 616px) {
    font-size: 16px;
  }
`;

export default StyledInput;
