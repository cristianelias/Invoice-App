// Dependencies
import styled from "@emotion/styled";
import { motion } from "framer-motion";

// Assets
import iconCheck from "../../../assets/icon-check.svg";

// Styles
const Container = styled(motion.div)`
  height: 16px;
`;

const Label = styled.label`
  font-weight: 700;
  font-style: normal;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  cursor: pointer;
`;

const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;

  &:not(:checked) + span:before {
    background-image: url(${iconCheck});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 10px;
    border-radius: 2px;
    background-color: #7c5dfa;
    color: white;
  }

  &:disabled {
    cursor: default;
    color: black;
    opacity: 0.5;
  }

  &:not(:checked) + span:hover:before {
    box-shadow: 0px 0px 0px 2px #7c5dfa;
    outline-color: transparent;
    outline-width: 2px;
    outline-style: dotted;
  }
`;

const Text = styled.span`
  padding: 12px 60px 12px 0px;
  cursor: pointer;

  &:before {
    content: "";
    border-radius: 3px;
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 13px;
    vertical-align: -2px;
    background-color: #dfe3fa;
  }
`;

const FilterDropdownContent = ({ status, active, updaterFn, text }) => (
  <Container>
    <Label htmlFor={`filter-${status}`}>
      <Checkbox
        id={`filter-${status}`}
        type="checkbox"
        checked={!active}
        onChange={() => updaterFn(!active)}
      />
      <Text>{text}</Text>
    </Label>
  </Container>
);

export default FilterDropdownContent;
