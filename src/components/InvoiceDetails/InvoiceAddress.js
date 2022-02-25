// Dependencies
import styled from "@emotion/styled";

const TextBlock = styled.div`
  font-size: 11px;
  line-height: 18px;
  text-align: right;
  letter-spacing: -0.229167px;
  color: #7e88c3;
`;

const InvoiceAddress = ({ styles, street, city, postCode, country }) => (
  <TextBlock css={styles}>
    <p>{street}</p>
    <p>{city}</p>
    <p>{postCode}</p>
    <p>{country}</p>
  </TextBlock>
);

export default InvoiceAddress;
