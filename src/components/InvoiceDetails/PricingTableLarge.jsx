/* eslint-disable import/default */
// Dependencies
import styled from "@emotion/styled";

// Utils
import formatPrice from "../Form/utils/formatPrice";

// Styles
const TableWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.viewInvoiceTable};
  border-spacing: 0;
  border-collapse: collapse;

  @media (max-width: 670px) {
    display: none;
  }
`;

const TableHeading = styled.th`
  font-weight: 500;
  font-size: 11px;
  line-height: 18px;
  letter-spacing: -0.229167px;
  color: ${({ theme }) => theme.colors.text.viewInvoiceSecondary};
  padding-top: 32px;
  padding-bottom: 32px;
  width: 29px;
`;

const HeadingTotal = styled(TableHeading)`
  padding: 0 32px 0 117px;
  text-align: right;
`;

const HeadingItemName = styled(TableHeading)`
  width: 210px;
  padding-left: 32px;
  text-align: left;
`;

const HeadingHighlighted = styled(TableHeading)`
  color: ${({ theme }) => theme.colors.text.viewInvoiceSecondary};
`;

const HeadingPrice = styled(HeadingHighlighted)`
  padding-left: 89px;
  text-align: right;
`;

const Row = styled.tr`
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  height: 15px;

  & td {
    padding-bottom: 32px;
  }
`;

const CellItemName = styled.td`
  color: ${({ theme }) => theme.colors.text.primary};
  padding: 0 0 32px 32px;
  height: 15px;
`;

const CellItemQty = styled.td`
  text-align: center;
  color: ${({ theme }) => theme.colors.text.viewInvoiceSecondary};
`;

const CellItemPrice = styled.td`
  text-align: right;
  color: ${({ theme }) => theme.colors.text.viewInvoiceSecondary};
`;

const CellItemTotal = styled.td`
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: right;
  padding-right: 32px;
`;

const Footer = styled.tr`
  height: 80px;
  color: #ffffff;
  background-color: ${({ theme }) =>
    theme.colors.background.viewInvoiceTableFooter};
`;

const FooterHeadingTotal = styled.th`
  font-weight: 500;
  font-size: 11px;
  line-height: 18px;
  letter-spacing: -0.2px;
  padding-left: 32px;
  text-align: left;
`;

const FooterCellTotal = styled.td`
  width: 120px;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.5px;
  padding-right: 32px;
  text-align: right;
`;

const TableFooter = styled.tfoot``;

const PricingTableLarge = ({ invoice }) => (
  <TableWrapper>
    <Table>
      <thead>
        <tr>
          <HeadingItemName>Item Name</HeadingItemName>
          <HeadingHighlighted>QTY.</HeadingHighlighted>
          <HeadingPrice>Price</HeadingPrice>
          <HeadingTotal>Total</HeadingTotal>
        </tr>
      </thead>
      <tbody>
        {invoice.items.map((item, index) => (
          <Row key={index}>
            <CellItemName>{item.name}</CellItemName>
            <CellItemQty>{item.quantity}</CellItemQty>
            <CellItemPrice>£ {formatPrice(item.price)}</CellItemPrice>
            <CellItemTotal>£ {formatPrice(item.total)}</CellItemTotal>
          </Row>
        ))}
      </tbody>

      <TableFooter>
        <Footer>
          <FooterHeadingTotal colSpan="3">Amount Due</FooterHeadingTotal>
          <FooterCellTotal>
            <strong>£ {formatPrice(invoice.total)}</strong>
          </FooterCellTotal>
        </Footer>
      </TableFooter>
    </Table>
  </TableWrapper>
);

export default PricingTableLarge;
