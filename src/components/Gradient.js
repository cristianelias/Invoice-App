// Dependencies
import styled from "@emotion/styled";

// Styles
const StyledGradient = styled.div`
  display: none;
  width: 616px;
  height: 141px;
  position: fixed;
  bottom: 51px;
  left: 103px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.0001) 0%,
    rgba(0, 0, 0, 0.1) 100%
  );
  z-index: 2;
`;

const Gradient = () => <StyledGradient />;

export default Gradient;
