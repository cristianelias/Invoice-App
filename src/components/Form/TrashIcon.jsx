// Dependencies
import styled from "@emotion/styled";
import { useState } from "react";

const StyledTrashIcon = styled.svg`
  @media (max-width: 650px) {
    width: 15px;
  }
`;

const TrashIcon = () => {
  const [isBeingHovered, setIsBeingHovered] = useState(false);

  const handleMouseEnter = () => setIsBeingHovered(true);
  const handleMouseLeave = () => setIsBeingHovered(false);

  return (
    <StyledTrashIcon
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      width="13"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
        fill={isBeingHovered ? "#EC5757" : "#888EB0"}
      />
    </StyledTrashIcon>
  );
};

export default TrashIcon;
