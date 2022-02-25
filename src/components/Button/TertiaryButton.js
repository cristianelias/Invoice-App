// Dependencies
import styled from "@emotion/styled";

// Components
import Button from "./Button";

const StyledButton = styled(Button)`
  color: #7e88c3;
  background: #f9fafe;

  &:hover {
    background-color: #dfe3fa;
  }
`;

const TertiaryButton = (props) => <StyledButton {...props} />;

export default TertiaryButton;
