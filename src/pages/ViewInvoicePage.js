// Dependencies
import { useContext } from "react";
import { Outlet, useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { motion } from "framer-motion";

// Components
import InvoiceDetails from "../components/InvoiceDetails/InvoiceDetails";
import PaymentStatusLabel from "../components/FilterableInvoiceList/PaymentStatusLabel";
import GoBack from "../components/GoBack";
import ScrollToTop from "../components/ScrollToTop";
import EditInvoiceAction from "../components/Actions/EditInvoiceAction";
import DeleteAction from "../components/Actions/DeleteAction";
import MarkAsPaidAction from "../components/Actions/MarkAsPaidAction";

// Styled
import PageContainer from "./Styled/PageContainer";

// Context
import InvoiceContext from "../state/InvoiceContext";

// Styles
const HeaderContainer = styled.div`
  grid-column: 2/3;
`;

const HeaderInnerWrapper = styled.article`
  width: 100%;
  height: 88px;
  padding: 0 32px 0 32px;
  background-color: #ffffff;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PaymentStatusContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PaymentStatusText = styled.p`
  color: #858bb2;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  margin-right: 16px;
`;

const sharedInvoiceActionsStyles = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 8px;
`;

const InvoiceActionMobile = styled.div`
  ${sharedInvoiceActionsStyles}

  display: none;
  justify-content: space-around;
  grid-column: 2/3;
  width: 100%;
  min-width: 375px;
  height: 91px;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  padding: 21px 24px 22px 24px;

  @media (max-width: 670px) {
    display: flex;
  }
`;

const InvoiceActionDesktop = styled.div`
  ${sharedInvoiceActionsStyles}

  @media (max-width: 670px) {
    display: none;
  }
`;

const Container = styled(motion(PageContainer))``;

const assembleActions = ({ id, status }) => (
  <>
    <EditInvoiceAction id={id} />
    <DeleteAction id={id} />
    <MarkAsPaidAction id={id} status={status} />
  </>
);

// Framer motion variants
const animationVariants = {
  here: {
    x: "0",
    transition: {
      type: "spring",
      duration: 0.2,
      stiffness: 100,
    },
  },
  gone: {
    x: "-100vh",
    transition: {
      type: "spring",
      duration: 0.2,
      stiffness: 100,
    },
  },
};

const ViewInvoicePage = () => {
  const { invoices } = useContext(InvoiceContext);
  const currentInvoiceId = useParams().id;
  const currentInvoice = invoices.find(
    (invoice) => invoice.id === currentInvoiceId
  );

  if (!invoices || invoices.length === 0 || currentInvoice === undefined) {
    return null;
  }

  const actions = assembleActions({
    id: currentInvoiceId,
    status: currentInvoice.status,
  });

  return (
    <Container
      variants={animationVariants}
      initial="gone"
      animate="here"
      exit="gone"
    >
      <HeaderContainer>
        <GoBack />
        <ScrollToTop />

        <HeaderInnerWrapper>
          <PaymentStatusContainer>
            <PaymentStatusText>Status</PaymentStatusText>
            {currentInvoice.status && (
              <PaymentStatusLabel
                status={currentInvoice && currentInvoice.status}
                fixedSize={true}
              />
            )}
          </PaymentStatusContainer>

          <InvoiceActionDesktop>{actions}</InvoiceActionDesktop>
        </HeaderInnerWrapper>
      </HeaderContainer>

      <InvoiceDetails invoice={currentInvoice} />

      <InvoiceActionMobile>{actions}</InvoiceActionMobile>

      <Outlet />
    </Container>
  );
};

export default ViewInvoicePage;
