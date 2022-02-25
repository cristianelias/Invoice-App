// Dependencies
import styled from "@emotion/styled";
import { css } from "@emotion/react";

// Components
import InvoiceDescription from "./InvoiceDescription";
import InvoiceAddress from "./InvoiceAddress";
import InvoiceDate from "./InvoiceDate";

// Styles
const Container = styled.article`
  margin-bottom: 45px;
`;

const TwoColumns = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 21px;

  @media (max-width: 490px) {
    flex-direction: column;

    & > div {
      text-align: left;
      padding-top: 30px;
    }
  }
`;

const ThreeColumns = styled.div`
  display: grid;
  grid-template-columns: 30% 35% auto;

  @media (max-width: 670px) {
    grid-template-columns: repeat(2, 50%);
    gap: 32px 0;
  }

  @media (max-width: 490px) {
    margin-top: 31px;
  }
`;

const ColOneOfThree = styled.div`
  grid-column: 1/2;
`;

const ColTwoOfThree = styled.div`
  grid-column: 2/3;
  text-align: left;
`;

const ColThreeOfThree = styled.div`
  grid-column: 3/4;

  @media (max-width: 670px) {
    grid-column: 1/2;
    grid-row: 2/3;
  }
`;

const Title = styled.h3`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: #7e88c3;
  margin-bottom: 12px;
`;

const Subtitle = styled.p`
  font-weight: bold;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.3125px;
  color: #0c0e16;
`;

const BillingInfo = ({ invoice }) => (
  <Container>
    <TwoColumns>
      <InvoiceDescription id={invoice.id} description={invoice.description} />
      <InvoiceAddress {...invoice.senderAddress} />
    </TwoColumns>

    <ThreeColumns>
      <ColOneOfThree>
        <InvoiceDate
          date={invoice.createdAt}
          text={"Invoice Date"}
          styles={css`
            margin-bottom: 32px;
          `}
        />

        <InvoiceDate date={invoice.paymentDue} text={"Payment Due"} />
      </ColOneOfThree>

      <ColTwoOfThree>
        <Title>Bill To</Title>
        <Subtitle>{invoice.clientName}</Subtitle>

        <InvoiceAddress
          {...invoice.clientAddress}
          styles={css`
            text-align: left;
            margin-top: 8px;
          `}
        />
      </ColTwoOfThree>

      <ColThreeOfThree>
        <Title>Sent To</Title>
        <Subtitle>{invoice.clientEmail}</Subtitle>
      </ColThreeOfThree>
    </ThreeColumns>
  </Container>
);

export default BillingInfo;
