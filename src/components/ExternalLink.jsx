// Dependencies
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

// Assets
import IconExternalLink from "./Icons/IconExternalLink";
import IconLink from "./Icons/IconLink";

const LinkContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;

const Link = styled.a`
  z-index: 2;
  color: ${({ theme }) => theme.externalLinks.color};
  top: 3px;
  position: relative;
  margin-left: 5px;

  &:hover {
    color: ${({ theme }) => theme.externalLinks.colorHover};
  }
`;

// Animation variants
const animation = {
  hover: {
    x: "15px",
  },
};

const ExternalLink = ({ href, text, icon }) => {
  const theme = useTheme();
  return (
    <LinkContainer variants={animation} whileHover={animation.hover}>
      {icon ? icon : <IconLink size={"24px"} color={"white"} />}
      <Link href={href} target="_blank" rel="noreferrer">
        {text}
      </Link>
      <IconExternalLink size={"24px"} color={theme.externalLinks.color} />
    </LinkContainer>
  );
};

export default ExternalLink;
