// Dependencies
import styled from "@emotion/styled";
import "@fontsource/spartan/700.css";

// Styles
const Container = styled.div`
  grid-column: 2/3;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-flow: column;
  font-size: 18px;

  @media (max-width: 850px) {
    font-size: 15px;
    grid-column: 1/3;
  }
`;

const Message = styled.h1`
  font-family: "Spartan", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  position: relative;
  bottom: 65px;
  padding: 0 20px;
`;

const CirclesContainer = styled.div`
  width: 40rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 850px) {
    width: 15rem;
  }
`;

const LoadingCircle = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  position: relative;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 50%;
    opacity: 0.5;
    animation: loaderAnimation 2s ease-out infinite;
  }

  &:nth-of-type(1) {
    background-color: #7c5dfa;
  }

  &:nth-of-type(2) {
    background-color: #7c5dfa;
  }

  &:nth-of-type(3) {
    background-color: #7c5dfa;
  }

  &:nth-of-type(4) {
    background-color: #7c5dfa;
  }

  &:nth-of-type(5) {
    background-color: #7c5dfa;
  }

  &:nth-of-type(1)::before {
    background-color: #f8f8fb;
  }

  &:nth-of-type(2)::before {
    background-color: #dfe3fa;
    animation-delay: 0.2s;
  }

  &:nth-of-type(3)::before {
    background-color: #7e88c3;
    animation-delay: 0.4s;
  }

  &:nth-of-type(4)::before {
    background-color: #888eb0;
    animation-delay: 0.6s;
  }

  &:nth-of-type(5)::before {
    background-color: #f8f8fb;
    animation-delay: 0.8s;
  }

  @keyframes loaderAnimation {
    0% {
      transform: scale(1);
    }

    50%,
    75% {
      transform: scale(2.5);
    }

    80%,
    100% {
      opacity: 0;
    }
  }

  @media (max-width: 850px) {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    position: relative;
  }
`;

const Loading = () => (
  <Container>
    <Message>Please wait a bit while we get your invoices</Message>
    <div>
      <CirclesContainer>
        <LoadingCircle />
        <LoadingCircle />
        <LoadingCircle />
        <LoadingCircle />
        <LoadingCircle />
      </CirclesContainer>
    </div>
  </Container>
);

export default Loading;
