// Dependencies
import { motion } from "framer-motion";

// Styles
import "./Overlay.css";

const Overlay = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      className="overlay"
    ></motion.div>
  );
};

export default Overlay;
