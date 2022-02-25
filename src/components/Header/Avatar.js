// Dependencies
import styled from "@emotion/styled";

// Assets
import avatarImage from "../../assets/image-avatar.jpeg";

// Styles
const AvatarContainer = styled.div`
  padding: 24px 32px 24px 31px;
  border-top: 1px solid #494e6e;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 850px) {
    border-top: none;
    border-left: 1px solid #494e6e;
  }
`;

const AvatarImage = styled.img`
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
  return (
    <AvatarContainer>
      <AvatarImage
        src={avatarImage}
        alt="User avatar, click to go to your profile."
      />
    </AvatarContainer>
  );
};
export default Avatar;
