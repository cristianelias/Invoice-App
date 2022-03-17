// Dependencies
import styled from "@emotion/styled";

// Assets
import emptyImage from "../../assets/illustration-empty.svg";

// Styles
const Section = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 24px;
`;

const Img = styled.img`
  margin-bottom: 40px;
`;

const MainHeading = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.625px;
  color: #0c0e16;
`;

const SecondaryHeading = styled.h5`
  color: #888eb0;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: -0.25px;
  text-align: center;
  max-width: 220px;
`;

const Strong = styled.strong`
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  text-align: center;
`;

const EmptyInvoiceList = () => {
  return (
    <Section className="empty-invoice">
      <Img
        className="empty-invoice__image"
        src={emptyImage}
        alt="There are no invoices that match the current filters criteria."
      />
      <MainHeading className="empty-invoice__main-heading">
        There is nothing here
      </MainHeading>
      <SecondaryHeading className="empty-invoice__secondary-heading">
        Create an invoice by clicking the{" "}
        <Strong className="empty-invoice__strong-text">New Invoice</Strong>{" "}
        button and get started
      </SecondaryHeading>
    </Section>
  );
};

export default EmptyInvoiceList;
