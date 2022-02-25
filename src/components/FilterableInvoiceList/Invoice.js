// Dependencies
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Components
import PaymentStatusLabel from "./PaymentStatusLabel";
import Date from "../Date/Date";

// Assets
import iconArrowRight from "../../assets/icon-arrow-right.svg";

// Styles
const InnerContainer = styled(Link)`
  height: 72px;
  padding: 0 32px;
  background-color: #ffffff;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  display: grid;
  grid-template-columns: 15% 20% 18% 20% 15% 3%;
  align-items: center;
  text-align: left;
  gap: 2%;
  border: 1px solid transparent;

  &:hover,
  &:focus {
    border-color: #7c5dfa;
  }

  @media (max-width: 720px) {
    gap: 1%;
    grid-template-columns: 15% 17% 20% 22% 18% 3%;
  }

  @media (max-width: 650px) {
    height: 134px;
    padding: 24px 36px;
    margin: 0 auto 16px auto;
    grid-template-columns: 50% 50%;
    grid-template-rows: 30% 40% 30%;
    gap: 0px;
  }
`;

const Id = styled.span`
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  text-align: left;
`;

const Hashtag = styled.span`
  color: #7e88c3;

  @media (max-width: 650px) {
    grid-column: 1/2;
    grid-row: 1/2;
  }
`;

const DueDate = styled.time`
  font-size: 12px;
  font-weight: 500;
  color: #7e88c3;
  line-height: 15px;
  letter-spacing: -0.25px;
  text-align: left;

  @media (max-width: 650px) {
    grid-column: 1/2;
    grid-row: 2/3;
    margin-top: 10px;
  }
`;

const ClientName = styled.span`
  font-size: 12px;
  color: #858bb2;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: -0.25px;
  text-align: left;

  @media (max-width: 650px) {
    grid-column: 2/3;
    grid-row: 1/2;
    text-align: right;
  }
`;

const Amount = styled.span`
  color: #0c0e16;
  font-weight: 700;
  font-size: 16px;
  text-align: right;
  margin-right: 10%;
  line-height: 24px;
  letter-spacing: -0.8px;

  @media (max-width: 650px) {
    grid-column: 1/2;
    grid-row: 3/4;
    text-align: left;
  }
`;

const ImgContainer = styled.span`
  display: flex;
  justify-content: flex-end;
`;

const Img = styled.span`
  width: 7px;

  @media (max-width: 650px) {
    display: none;
  }
`;

const Invoice = ({ id, paymentDue, clientName, total, status }) => (
  <motion.article
    whileHover={{
      scale: 1.04,
    }}
    transition={{ type: "spring", stiffness: 900 }}
  >
    <InnerContainer to={`/view-invoice/${id}`}>
      <Id>
        <Hashtag>#</Hashtag>
        {id}
      </Id>
      <DueDate>
        Due <Date unformattedDate={paymentDue} />
      </DueDate>
      <ClientName>{clientName}</ClientName>
      <Amount>£ {total}</Amount>
      <PaymentStatusLabel status={status} />
      <ImgContainer>
        <Img src={iconArrowRight} alt="Arrow icon. Click to edit invoice." />
      </ImgContainer>
    </InnerContainer>
  </motion.article>
);

export default Invoice;
