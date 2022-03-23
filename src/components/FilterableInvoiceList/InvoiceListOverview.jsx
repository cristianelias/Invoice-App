// Dependencies
import styled from "@emotion/styled";

// Styles
const Container = styled.div`
  margin-right: auto;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 4px 0;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.625px;
  text-align: left;
`;

const InvoiceSummary = styled.h2`
  margin: 0;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: -0.25px;
  text-align: left;
  color: ${({ theme }) => theme.colors.text.invoiceCount};
`;

const InvoiceListOverview = (props) => {
  const { totalInvoices, showFullInfo } = props;

  return (
    <Container>
      <Title>Invoices</Title>
      <InvoiceSummary>
        {totalInvoices < 1
          ? `No invoices`
          : showFullInfo
          ? `There are ${totalInvoices} total invoices`
          : `${totalInvoices} invoices`}
      </InvoiceSummary>
    </Container>
  );
};

export default InvoiceListOverview;
