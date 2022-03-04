// Dependencies
import styled from "@emotion/styled";

const getStyledErrorMessage = (Component) => styled(Component)`
  display: none;
  color: #ec5757;
  font-weight: normal;
  font-size: 10px;
  line-height: 15px;
`;

export default getStyledErrorMessage;
