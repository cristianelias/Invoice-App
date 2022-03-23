// Dependencies
import styled from "@emotion/styled";

// Components
import Button from "./Button";

const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.colors.buttons.tertiary.color};
  background: ${({ theme }) => theme.colors.buttons.tertiary.backgroundColor};

  &:hover {
    background: ${({ theme }) => theme.colors.buttons.tertiary.backgroundHover};
  }
`;

const TertiaryButton = (props) => <StyledButton {...props} />;

export default TertiaryButton;
