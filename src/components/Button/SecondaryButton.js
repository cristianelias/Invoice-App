// Dependencies
import styled from "@emotion/styled";

// Components
import Button from "./Button";

const StyledButton = styled(Button)`
  background: #373b53;
  color: #888eb0;

  &:hover {
    opacity: 0.9;
  }
`;

const SecondaryButton = (props) => <StyledButton {...props} />;

export default SecondaryButton;
