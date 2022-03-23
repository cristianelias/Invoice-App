// Dependencies
import { css, useTheme } from "@emotion/react";
import styled from "@emotion/styled";

// Styles
const Container = styled.span`
  height: 40px;
  width: 104px;
  border-radius: 6px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StatusIcon = styled.p`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
`;

const Text = styled.span`
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  padding-left: 8px;
  text-transform: capitalize;
  line-height: 1px;
`;

const fixedStyles = css`
  padding: 13px 17px 12px 18px;
`;

const assembleModifiers = ({ theme, status, fixedSize }) => {
  const modifiers = {
    paid: css`
      background-color: #33d6a017;
      color: #33d69f;

      p {
        background-color: #33d69f;
      }
    `,
    pending: css`
      background-color: #ff910017;
      color: #ff8f00;

      p {
        background-color: #ff8f00;
      }
    `,
    draft: css`
      background-color: #373b5317;
      color: ${theme.colors.text.draftLabel};

      p {
        background-color: ${theme.colors.text.draftLabel};
      }
    `,
  };

  const styles = [modifiers[status]];

  if (fixedSize) {
    styles.push(fixedStyles);
  }

  return styles;
};

const PaymentStatusLabel = ({ status, fixedSize }) => {
  const theme = useTheme();

  return (
    <>
      <Container
        css={assembleModifiers({ theme, status, fixedSize })}
        className="payment-status-label"
      >
        <StatusIcon />
        <Text>{status}</Text>
      </Container>
    </>
  );
};

export default PaymentStatusLabel;
