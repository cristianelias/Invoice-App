/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// Dependencies
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { motion } from "framer-motion";

// Components
import FilterDropdownContent from "./FilterDropdownContent";

// Assets
import iconArrowDown from "../../../assets/icon-arrow-down.svg";

// Custom hooks
import useComponentVisible from "../../../hooks/useComponentVisible";

// Styles
const Container = styled.div`
  cursor: pointer;
  position: relative;
  user-select: none;
  height: 40px;
  display: flex;
  justify-content: center;
  flex-flow: column;
  padding: 0px 18px;
  z-index: 1;
`;

const Trigger = styled.span`
  cursor: pointer;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  margin-right: 12px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const Content = styled(motion.fieldset)`
  z-index: 1;
  position: absolute;
  top: 53px;
  right: -18px;
  background: ${({ theme }) => theme.colors.background.popOver};
  box-shadow: ${({ theme }) => theme.boxShadow.dropdownContent};
  border-radius: 8px;
  width: 192px;
  padding: 28px 0 28px 24px;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 25px;

  &:last-child {
    margin-bottom: 0 !important;
  }
`;

// Animation variants
const animationVariants = {
  open: {
    display: "flex",
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
    },
  },
  closed: {
    display: "none",
    y: -50,
  },
};

const FilterDropdown = ({ showFullInfo, statusFilters }) => {
  const { refComponent, refTrigger, isComponentVisible } =
    useComponentVisible(false);
  const arrowRotationDegree = isComponentVisible ? 180 : 0;

  return (
    <Container>
      <legend ref={refTrigger}>
        <Trigger>{showFullInfo ? `Filter by status` : `Filter`}</Trigger>

        <img
          css={css`
            transform: rotate(${arrowRotationDegree}deg);
          `}
          src={iconArrowDown}
          alt="Arrow icon. Click to display filters."
        />
      </legend>
      <Content
        initial="closed"
        animate={isComponentVisible ? "open" : "closed"}
        variants={animationVariants}
        ref={refComponent}
      >
        {statusFilters.map((filter) => {
          return (
            <FilterDropdownContent
              key={filter.status}
              status={filter.status}
              text={filter.displayText}
              active={filter.active}
              updaterFn={filter.updaterFn}
            />
          );
        })}
      </Content>
    </Container>
  );
};

export default FilterDropdown;
