// Dependencies
import styled from "@emotion/styled";

// Components
import EditForm from "../components/Form/EditForm";
import ScrollToTop from "../components/ScrollToTop";
import Overlay from "../components/Overlay";

// Styles
const Container = styled.div`
  grid-column: 3/4;
  margin-top: 32px;
`;

const EditInvoicePage = () => (
  <Container>
    <Overlay />
    <ScrollToTop />
    <EditForm />
  </Container>
);

export default EditInvoicePage;
