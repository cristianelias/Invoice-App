// Dependencies
import styled from "@emotion/styled";

// Components
import Button from "./Button";

const StyledButton = styled(Button)`
  color: #ffffff;
  background: #ec5757;

  &:hover {
    background: #ff9797;
  }
`;

const ErrorButton = (props) => <StyledButton {...props} />;

export default ErrorButton;
