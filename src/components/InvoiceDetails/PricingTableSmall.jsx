/* eslint-disable import/default */
// Dependencies
import styled from "@emotion/styled";

// Utils
import formatPrice from "../Form/utils/formatPrice";

const Container = styled.div`
  display: none;

  @media (max-width: 670px) {
    display: inline;
  }
`;

const ItemList = styled.ul`
  width: 100%;
  background: ${({ theme }) => theme.colors.background.viewInvoiceTable};
  border-radius: 8px 8px 0px 0px;
  list-style: none;
  padding: 24px 24px 0px 24px;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 24px;
`;

const ItemTotal = styled.div`
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: left;
`;

const ItemName = styled.p`
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const QtyAndPrice = styled.div`
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: ${({ theme }) => theme.colors.text.viewInvoiceSecondary};
  padding-top: 8px;
`;

const Footer = styled.footer`
  height: 80px;
  background: ${({ theme }) => theme.colors.background.viewInvoiceTableFooter};
  border-radius: 0px 0px 8px 8px;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
`;

const TotalHeading = styled.p`
  font-weight: 500;
  font-size: 11px;
  line-height: 18px;
  letter-spacing: -0.229167px;
`;

const TotalValue = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
  text-align: right;
  letter-spacing: -0.416667px;
`;

const PricingTableSmall = ({ invoice }) => (
  <Container>
    <ItemList>
      {invoice.items.map((item, index) => (
        <Item key={index}>
          <div>
            <ItemName>{item.name}</ItemName>
            <QtyAndPrice>
              {formatPrice(item.quantity)} x £ {formatPrice(item.price)}
            </QtyAndPrice>
          </div>
          <ItemTotal>£ {formatPrice(item.total)}</ItemTotal>
        </Item>
      ))}
    </ItemList>

    <Footer>
      <TotalHeading>Grand Total</TotalHeading>
      <TotalValue>£ {formatPrice(invoice.total)}</TotalValue>
    </Footer>
  </Container>
);

export default PricingTableSmall;
