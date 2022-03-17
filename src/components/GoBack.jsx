// Dependencies
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

// Styles
const Container = styled.nav`
  margin-bottom: 22px;
`;

const Button = styled.button`
  padding: 10px 5px 10px 24px;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: #0c0e16;

  &:hover {
    color: #7e88c3;
  }
`;
// Assets
import iconArrowLeft from "../assets/icon-arrow-left.svg";

const GoBack = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <img src={iconArrowLeft} alt="Arrow icon. Click to go back." />

      <Button onClick={() => navigate(-1, { replace: true })}>Go back</Button>
    </Container>
  );
};

export default GoBack;
