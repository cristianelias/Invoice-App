// Dependencies
import styled from "@emotion/styled";

// Components
import Button from "./Button";

const StyledButton = styled(Button)`
  background: ${({ theme }) => theme.colors.buttons.secondary.backgroundColor};
  color: ${({ theme }) => theme.colors.buttons.secondary.color};

  &:hover {
    background: ${({ theme }) =>
      theme.colors.buttons.secondary.backgroundHover};
  }
`;

const SecondaryButton = (props) => (
  <StyledButton className="secondary-button" {...props} />
);

export default SecondaryButton;
