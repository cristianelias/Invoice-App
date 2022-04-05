// Dependencies
import styled from "@emotion/styled";
import { useContext } from "react";

// Assets
import avatarImage from "../../assets/image-avatar.jpeg";

// Context
import UIContext from "../../state/UIContext";

// Styles
const AvatarContainer = styled.div`
  padding: 24px 32px 24px 31px;
  border-top: 1px solid #494e6e;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;

  @media (max-width: 850px) {
    border-top: none;
    border-left: 1px solid #494e6e;
  }
`;

const Image = styled.img`
  border-radius: 50%;
  height: 40px;
  width: 40px;

  @media (max-width: 850px) {
    border-radius: 50%;
    height: 32px;
    width: 32px;
  }
`;

const Avatar = () => {
  const { creditsModalOpen, setCreditsModalOpen } = useContext(UIContext);

  return (
    <AvatarContainer onClick={() => setCreditsModalOpen(!creditsModalOpen)}>
      <Image src={avatarImage} alt="User avatar" />
    </AvatarContainer>
  );
};
export default Avatar;
