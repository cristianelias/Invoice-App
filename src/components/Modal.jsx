// Dependencies
import styled from "@emotion/styled";
import { useContext } from "react";

// Assets
import creditsImage from "../assets/author.jpeg";

// Context
import UIContext from "../state/UIContext";

// Components
import ExternalLink from "./ExternalLink";
import IconLinkedIn from "./Icons/IconLinkedIn";
import IconGitHub from "./Icons/IconGitHub";

const Container = styled.article`
  min-width: 380px;
  position: absolute;
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #0c0e1675;
  color: white;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4px);
  z-index: 2;
  position: fixed;
  padding: 52px 52px 52px 155px;

  @media (max-width: 850px) {
    padding: 52px;
  }
`;

const Card = styled.div`
  min-width: 380px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 35px;
  flex-direction: row;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

const LeftBlock = styled.div``;

const RightBlock = styled.div`
  gap: 20px;
  display: flex;
  flex-flow: column;
  max-width: 460px;

  @media (max-width: 460px) {
    padding: 0 32px;
  }
`;

const H1 = styled.h1`
  font-size: 28px;
`;

const Paragraph = styled.p`
  line-height: 27px;
  font-size: 18px;
`;

const Image = styled.img`
  height: 340px;
  border-radius: 15px;
  box-shadow: rgb(50 50 93 / 25%) 0px 50px 100px -20px,
    rgb(0 0 0 / 30%) 0px 30px 60px -30px,
    rgb(10 37 64 / 35%) 0px -2px 6px 0px inset;
`;

const CreditsModal = () => {
  const { setCreditsModalOpen, creditsModalOpen } = useContext(UIContext);

  return (
    <>
      {creditsModalOpen && (
        <Container onClick={() => setCreditsModalOpen(false)}>
          <Card
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <LeftBlock>
              <Image src={creditsImage} alt="App's author face." />
            </LeftBlock>
            <RightBlock>
              <H1>👋 Hi, I'm Cris</H1>
              <Paragraph>
                Thank you for visiting my page, I hope you enjoy using it. I'd
                love to hear your feedback.
              </Paragraph>
              <Paragraph>You can reach me at:</Paragraph>
              <ExternalLink
                href={"https://www.linkedin.com/in/cristianelias/"}
                text={"LinkedIn"}
                icon={<IconLinkedIn color={"white"} size={"24px"} />}
              />

              <ExternalLink
                href={"https://github.com/cristianelias"}
                text={"GitHub"}
                icon={<IconGitHub color={"white"} size={"24px"} />}
              />

              <ExternalLink
                href={
                  "https://www.frontendmentor.io/challenges/invoice-app-i7KaLTQjl/hub/react-emotioncss-vite-framer-motion-formikyup-localstorage-HkdP_gOQc"
                }
                text={"Frontend Mentor solution"}
              />

              <ExternalLink
                href={"https://www.frontendmentor.io/profile/cristianelias"}
                text={"Frontend Mentor profile"}
              />
            </RightBlock>
          </Card>
        </Container>
      )}
    </>
  );
};
export default CreditsModal;
