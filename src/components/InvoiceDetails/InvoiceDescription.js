// Dependencies
import styled from "@emotion/styled";

// Styles
const InvoiceId = styled.span`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.8px;
  color: #0c0e16;
`;

const Hashtag = styled.span`
  color: #888eb0;
`;

const ProjectDescription = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: #7e88c3;
  margin-top: 8px;
`;

const InvoiceDescription = ({ id, description }) => (
  <div>
    <InvoiceId>
      <Hashtag>#</Hashtag>
      {id}
    </InvoiceId>
    <ProjectDescription>{description}</ProjectDescription>
  </div>
);

export default InvoiceDescription;
