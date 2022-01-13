import styled from "styled-components";

const Nav = styled.nav`
  height: 70px;
  width: 100%;
  padding: 8px;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #262626;
  z-index: 100;
  position: fixed;

  @media screen and (max-width: 688px) {
    padding: 8px 48px;
  }
`;

const Logo = styled.div`
  h1 {
    font-family: "Offside";
    color: white;
    cursor: pointer;
  }
`;

const NavLinks = styled.div`
  display: flex;
  height: 40px;

  @media screen and (max-width: 688px) {
    display: none;
  }
`;

const NavLink002 = styled.div`
  display: block;
  padding: 8px 16px;
  font-family: "Roboto", sans-serif;
  color: white;
  cursor: pointer;

  &:hover {
    color: #c8a3d9;
  }
`;

const LogSign = styled.div`
  @media screen and (max-width: 688px) {
    display: none;
  }
`;

const LoginBtn = styled.button`
  height: 40px;
  padding: 8px 16px;
  margin-left: 8px;
  color: white;
  background-color: #934687;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #74388f;
  }
`;

const SignupBtn = styled.button`
  height: 40px;
  padding: 8px 16px;
  color: #9346b7;
  background-color: #eabeff;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #c8a3d9;
  }
`;

const SideMenu = styled.div`
  display: none;

  @media screen and (max-width: 688px) {
    display: initial;
  }
`;

const SideMenuBtn = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  i {
    font-size: 24px;
    color: white;

    &:hover {
      color: #74388f;
    }
  }
`;

export default function NavBar({ toggle }) {
  return (
    <Nav>
      <Logo>
        <h1>PadsInJapan</h1>
      </Logo>
      <NavLinks>
        <NavLink002>Buy</NavLink002>
        <NavLink002>Rent</NavLink002>
        <NavLink002>Blog</NavLink002>
        <NavLink002>Area Guide</NavLink002>
      </NavLinks>
      <LogSign>
        <SignupBtn>Create Account</SignupBtn>
        <LoginBtn>Login</LoginBtn>
      </LogSign>
      <SideMenu>
        <SideMenuBtn onClick={toggle}>
          <i class="fa fa-bars"></i>
        </SideMenuBtn>
      </SideMenu>
    </Nav>
  );
}
