import React from "react";
import styled from "styled-components";
import BackImg from "./Data/Images/newsletterbackground.jpg";

const NewsLetter001 = styled.div`
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  max-height: 1080px;
  max-width: 1920px;
  position: relative;
  overflow: hidden;
`;

const Background = styled.img`
  position: absolute;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

const NewsLetText = styled.div`
  position: relative;
  z-index: 10;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;

  h2 {
    margin-top: 6rem;
    font-size: 48px;
    font-weight: bold;
  }

  p {
    margin-top: 6rem;
    font-size: 32px;
  }

  @media screen and (max-width: 510px) {
    h2 {
      margin-top: 5rem;
      font-size: 32px;
    }

    p {
      font-size: 18px;
    }
  }
`;

const Email = styled.div`
  position: relative;
  justify-content: center;
  margin: 0 auto;
  width: 50%;
`;

const Email002 = styled.input`
  display: block;
  font-style: italic;
  padding: 8px 16px;
  font-size: 14px;
  width: ;
  justify-items: center;
  margin: 0 auto;
  opacity: 0.7;
`;

const SubBtn = styled.button`
  display: block;
  font-size: 14px;
  padding: 8px 16px;
  margin: 8px auto 0 auto;
  border-radius: 8px;
  border: none;
  color: white;
  background-color: #934687;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #74388f;
  }
`;

export default function NewsLetter() {
  return (
    <NewsLetter001>
      <Background src={BackImg} />
      <NewsLetText>
        <h2>Sign up for our Newsletter</h2>
        <p>Get the latest news and info about our new pads.</p>
      </NewsLetText>
      <Email>
        <Email002 type="text" placeholder="Your E-mail here" />
        <SubBtn>Subscribe</SubBtn>
      </Email>
    </NewsLetter001>
  );
}
