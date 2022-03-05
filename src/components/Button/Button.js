// Dependencies
import styled from "@emotion/styled";

// Dependencies
import { Link } from "react-router-dom";

// Styles
const StyledButton = styled.button`
  border: none;
  padding: 17px 24px;
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

const Button = ({ className, linkTo, text, onClick, type, disabled }) => (
  <StyledButton
    onClick={onClick}
    type={type ? type : "button"}
    disabled={disabled}
    className={className}
  >
    {linkTo !== undefined ? <Link to={linkTo}>{text}</Link> : text}
  </StyledButton>
);

export default Button;
