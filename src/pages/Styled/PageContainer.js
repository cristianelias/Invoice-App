// Dependencies
import styled from "@emotion/styled";

const PageContainer = styled.div`
  grid-column: 1/3;
  display: grid;
  grid-template-columns: 24% 52% 24%;
  margin-top: 72px;

  @media (max-width: 1404px) {
    grid-template-columns: auto 730px auto;
  }

  @media (max-width: 1330px) {
    grid-template-columns: 300px 730px auto;
  }

  @media (max-width: 1227px) {
    grid-template-columns: 24.5% 59.5% 16%;
  }

  @media (max-width: 1130px) {
    grid-template-columns: auto 672px auto;
    grid-column: 2/5;
  }

  @media (max-width: 850px) {
    grid-column: 1/3;
    grid-template-columns: 48px auto 48px;
  }

  @media (max-width: 500px) {
    grid-template-columns: 24px auto 24px;
  }
`;

export default PageContainer;
