// Dependencies
import styled from "@emotion/styled";

const StyledLabel = styled.label`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: ${({ theme }) => theme.colors.text.secondary};

  &.error {
    color: #ec5757;
  }
`;

export default StyledLabel;
