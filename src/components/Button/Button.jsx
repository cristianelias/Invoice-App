// Dependencies
import styled from "@emotion/styled";

// Styles
const StyledButton = styled.button`
  border: none;
  height: 48px;
  padding: 0px 24px;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  border-radius: 24px;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: -0.25px;
  background: none;
  color: inherit;
  flex-shrink: 0;
`;

const Button = ({ className, text, onClick, type, disabled }) => (
  <StyledButton
    onClick={onClick}
    type={type ? type : "button"}
    disabled={disabled}
    className={className}
  >
    {text}
  </StyledButton>
);

export default Button;
