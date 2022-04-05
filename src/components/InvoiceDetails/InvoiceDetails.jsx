// Dependencies
import styled from "@emotion/styled";

// Components
import BillingInfo from "./BillingInfo";
import PricingTableLarge from "./PricingTableLarge";
import PricingTableSmall from "./PricingTableSmall";

// Styles
const Container = styled.div`
  grid-column: 2/3;
`;

const WhiteBackgroundContainer = styled.section`
  width: 100%;
  margin-top: 24px;
  padding: 48px;
  background-color: ${({ theme }) => theme.colors.background.viewInvoice};
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  border-radius: 8px;

  @media (max-width: 670px) {
    padding: 24px;
    margin-bottom: 147px;
  }
`;

const InvoiceDetails = ({ invoice }) => (
  <Container>
    <WhiteBackgroundContainer>
      <div>
        <BillingInfo invoice={invoice} />
        <PricingTableLarge invoice={invoice} />
        <PricingTableSmall invoice={invoice} />
      </div>
    </WhiteBackgroundContainer>
  </Container>
);

export default InvoiceDetails;
