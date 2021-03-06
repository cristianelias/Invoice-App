// Dependencies
import styled from "@emotion/styled";

const FormTitle = styled.legend`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 32px;
  letter-spacing: -0.5px;
  padding-bottom: 48px;
  user-select: none;

  @media (max-width: 500px) {
    padding-bottom: 24px;
  }
`;

export default FormTitle;
