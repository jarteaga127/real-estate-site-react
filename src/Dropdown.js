import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  color: white;
  background-color: #262626;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3 ease-in-out;
  display: ${({ isOpen }) => (isOpen ? "grid" : "none")};
`;

const CloseMenu = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  font-size: 32px;
  cursor: pointer;

  &:hover {
    color: #c8a3d9;
  }
`;
const Wrapper = styled.div``;

const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 80px);
  text-align: center;
  margin-bottom: 4rem;
`;

const LinkContainer = styled.div`
  margin-top: 3rem;
`;

const DropdownLink = styled.p`
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: #c8a3d9;
  }
`;

const SignupBtn = styled.button`
  font-size: 24px;
  padding: 12px 24px;
  color: #9346b7;
  background-color: #eabeff;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #c8a3d9;
  }
`;

const LoginBtn = styled.button`
  font-size: 24px;
  padding: 12px 24px;
  color: white;
  background-color: #934687;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #74388f;
  }
`;

export default function Dropdown({ isOpen, toggle }) {
  return (
    <Container isOpen={isOpen} onClick={toggle}>
      <CloseMenu onClick={toggle}>
        <i class="fas fa-times"></i>
      </CloseMenu>
      <Wrapper>
        <DropdownMenu>
          <LinkContainer>
            <DropdownLink>Buy</DropdownLink>
            <DropdownLink>Rent</DropdownLink>
            <DropdownLink>Blog</DropdownLink>
            <DropdownLink>Area Guide</DropdownLink>
            <DropdownLink>
              <SignupBtn>Create Account</SignupBtn>
            </DropdownLink>
            <DropdownLink>
              <LoginBtn>Login</LoginBtn>
            </DropdownLink>
          </LinkContainer>
        </DropdownMenu>
      </Wrapper>
    </Container>
  );
}
