import React from "react";
import styled from "styled-components";

const CurrentPads = styled.section`
  padding-bottom: 50px;
`;

const Header = styled.div`
  font-size: 24px;
  padding: 16px;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 810px) {
    font-size: initial;
    padding: 8px;
  }
`;

const TabGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Tab = styled.button`
  text-align: center;
  width: 360px;
  padding: 8px;
  color: #9346b7;
  background-color: #eabeff;
  border-radius: 3px;
  border: none;
  cursor: pointer;

  &:nth-child(1) {
    color: white;
    background-color: #934687;
  }
`;

const PadContainer = styled.div`
  padding: 5px;
  margin-left: 118px;

  @media screen and (max-width: 810px) {
    margin-left: 0px;
  }
`;

const PadThumb = styled.div`
  display: flex;
  margin: 6px;
`;

const PadImgCont = styled.div``;

const PadImg = styled.img`
  height: 250px;

  @media screen and (max-width: 810px) {
    height: 120px;
  }
`;

const PadText = styled.div`
  padding: 8px 16px;

  h3 {
    font-size: 32px;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 24px;
    margin-bottom: 0.5rem;
  }

  @media screen and (max-width: 510px) {
    padding: 4px 8px;

    h3 {
      font-size: 18px;
      margin-top: 0px;
    }

    p {
      font-size: initial;
    }
  }
`;

const ViewBtn = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  height: 40px;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  color: white;
  background-color: #934687;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #74388f;
  }

  @media screen and (max-width: 510px) {
    display: none;
  }
`;

export default function NewPads({ pads }) {
  return (
    <CurrentPads>
      <Header>
        <h2>Check Out Our Newest Pads</h2>
      </Header>
      <TabGroup>
        <Tab id="Rent">Rent</Tab>
        <Tab>Buy</Tab>
        <Tab>Short-term Stay</Tab>
      </TabGroup>
      <PadContainer>
        {pads.map(({ id, image, title, price, alt }) => (
          <PadThumb key={id}>
            <PadImgCont>
              <PadImg src={image} />
            </PadImgCont>
            <PadText>
              <h3>{title}</h3>
              <p>{price}</p>
              <ViewBtn>View This Pad</ViewBtn>
            </PadText>
          </PadThumb>
        ))}
      </PadContainer>
    </CurrentPads>
  );
}
