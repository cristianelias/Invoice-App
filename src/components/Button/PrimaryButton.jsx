// Dependencies
import styled from "@emotion/styled";

// Components
import Button from "./Button";

const StyledButton = styled(Button)`
  background: #7c5dfa;
  color: #ffffff;

  &:hover {
    background-color: #9277ff;
  }
`;

const PrimaryButton = (props) => <StyledButton {...props} />;

export default PrimaryButton;
