// Dependencies
import styled from "@emotion/styled";

// Components
import Date from "../Date";

// Styles
const Container = styled.div`
  font-weight: bold;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.3125px;
  color: #0c0e16;
`;

const Title = styled.h3`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: ${({ theme }) => theme.colors.text.viewInvoiceSecondary};
  margin-bottom: 12px;
`;

const DateInfo = styled.time`
  font-weight: bold;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.3125px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const InvoiceDate = ({ styles, text, date }) => (
  <Container css={styles}>
    <Title>{text}</Title>
    <DateInfo>{<Date unformattedDate={date} />}</DateInfo>
  </Container>
);

export default InvoiceDate;
