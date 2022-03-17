// Dependencies
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

// Assets
import iconPlus from "../../assets/icon-plus.svg";

// Styles
const StyledInvoiceButton = styled.button`
  cursor: pointer;
  background-color: #7c5dfa;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  padding: 6px 0 6px 6px;
  margin: 0;
  border: none;
  border-radius: 24px;
  user-select: none;

  &:hover {
    background-color: #9277ff;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  text-decoration: none;
  color: white;
`;

const ImageContainer = styled.div`
  background-color: white;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  height: 10px;
  width: 10px;
  color: #7c5dfa;
`;

const Text = styled.p`
  margin: 0 14px 0 8px;
  padding-top: 1px;
`;

const NewInvoiceButton = (props) => {
  const { showFullInfo } = props;

  return (
    <StyledInvoiceButton>
      <StyledLink to="/new-invoice">
        <ImageContainer>
          <Img
            src={iconPlus}
            alt="New invoice button. Click to create a new invoice for you to fill."
          />
        </ImageContainer>
        <Text>{showFullInfo ? "New Invoice" : "New"}</Text>
      </StyledLink>
    </StyledInvoiceButton>
  );
};

export default NewInvoiceButton;
