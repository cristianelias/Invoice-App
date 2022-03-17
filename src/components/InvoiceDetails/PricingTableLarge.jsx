/* eslint-disable import/default */
// Dependencies
import styled from "@emotion/styled";

// Utils
import priceFormatter from "../Form/utils/priceFormatter";

// Styles
const Table = styled.table`
  width: 100%;
  background: #f9fafe;
  border-radius: 8px 8px 0px 0px;
  border-spacing: 0;
  border-collapse: collapse;

  tr:last-child th:first-of-type {
    border-bottom-left-radius: 8px;
  }

  tr:last-child td:last-child {
    border-bottom-right-radius: 8px;
  }

  @media (max-width: 670px) {
    display: none;
  }
`;

const TableHeading = styled.th`
  font-weight: 500;
  font-size: 11px;
  line-height: 18px;
  letter-spacing: -0.229167px;
  color: #7e88c3;
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
  color: #7e88c3;
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
  color: #0c0e16;
  height: 15px;

  & td {
    padding-bottom: 32px;
  }
`;

const CellItemName = styled.td`
  padding: 0 0 32px 32px;
  height: 15px;
`;

const CellItemQty = styled.td`
  text-align: center;
  color: #7e88c3;
`;

const CellItemPrice = styled.td`
  text-align: right;
  color: #7e88c3;
`;

const CellItemTotal = styled.td`
  text-align: right;
  padding-right: 32px;
`;

const Footer = styled.tr`
  height: 80px;
  background: #373b53;
  color: #ffffff;
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

const PricingTableLarge = ({ invoice }) => (
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
          <CellItemPrice>£ {priceFormatter.format(item.price)}</CellItemPrice>
          <CellItemTotal>£ {priceFormatter.format(item.total)}</CellItemTotal>
        </Row>
      ))}
    </tbody>

    <tfoot>
      <Footer>
        <FooterHeadingTotal colSpan="3">Amount Due</FooterHeadingTotal>
        <FooterCellTotal>
          <strong>£ {priceFormatter.format(invoice.total)}</strong>
        </FooterCellTotal>
      </Footer>
    </tfoot>
  </Table>
);

export default PricingTableLarge;
