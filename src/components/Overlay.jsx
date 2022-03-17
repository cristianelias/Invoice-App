// Dependencies
import styled from "@emotion/styled";
import { motion } from "framer-motion";

// Styles
const StyledOverlay = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background: #000000;
  opacity: 0.5;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
`;

const Overlay = () => {
  return (
    <StyledOverlay
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      className="overlay"
    />
  );
};

export default Overlay;
