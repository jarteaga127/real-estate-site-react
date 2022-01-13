import * as React from "react";
import styled from "styled-components";

const ButtonGroup = styled.div`
  border: 1px solid;
`;

const ToggleBtn = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  background-color: white;
  cursor: pointer;

  &:nth-child(1) {
    color: white;
    background-color: #934687;
  }

  @media screen and (max-width: 810px) {
    width: 50%;
  }
`;

export default function BuyRent() {
  const [option, setOption] = React.useState("buy");

  const handleOption = (event, newOption) => {
    setOption(newOption);
  };

  return (
    <ButtonGroup value={option} exclusive onChange={handleOption}>
      <ToggleBtn value="buy">Buy</ToggleBtn>
      <ToggleBtn value="rent">Rent</ToggleBtn>
    </ButtonGroup>
  );
}
