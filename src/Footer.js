import React from "react";
import styled from "styled-components";

const FootSec = styled.section`
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  padding-top: 20px;
  padding-left: 118px;
  padding-bottom: 20px;
  background-color: #c8c8c8;
`;

const SiteLogo = styled.div`
  h3 {
    font-family: "Offside";
    font-size: 24px;
    color: #333333;
    cursor: pointer;
  }
`;

const Links = styled.div`
  margin-top: 50px;
  display: flex;

  @media screen and (max-width: 510px) {
    display: initial;
    margin-top: 25px;
  }
`;

const LinkColumn = styled.div`
  padding-right: 100px;
`;

const ColumnHead = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

const LinkCont = styled.div``;

const LinkCont002 = styled.ul`
  list-style-type: none;
  margin-left: -2rem;
`;

const FootLink = styled.li`
  padding: 5px;
  cursor: pointer;

  i {
    font-size: 48px;
    padding: 5px;
  }

  &:hover {
    color: #333333;
    text-decoration: underline;
  }
`;

const LangSelect = styled.select`
  padding: 8px 16px;
  font-size: 14px;
`;

const Copyright = styled.div`
  margin-top: 100px;
  text-align: center;
  font-size: 10px;

  @media screen and (max-width: 410px) {
    margin-top: 50px;
    text-align: left;
  }
`;

export default function Footer() {
  return (
    <FootSec>
      <SiteLogo>
        <h3>PadsInJapan</h3>
      </SiteLogo>
      <Links>
        <LinkColumn>
          <ColumnHead>Search Our Pads</ColumnHead>
          <LinkCont>
            <LinkCont002>
              <FootLink>Buy</FootLink>
              <FootLink>Rent</FootLink>
              <FootLink>Short-term</FootLink>
              <FootLink>Furnished Pads</FootLink>
            </LinkCont002>
          </LinkCont>
        </LinkColumn>
        <LinkColumn>
          <ColumnHead>About Us</ColumnHead>
          <LinkCont>
            <LinkCont002>
              <FootLink>Company Profile</FootLink>
              <FootLink>Contact</FootLink>
              <FootLink>FAQs</FootLink>
              <FootLink>Blog</FootLink>
              <FootLink>Language</FootLink>
              <FootLink>
                <LangSelect>
                  <option>English</option>
                  <option>日本語</option>
                </LangSelect>
              </FootLink>
            </LinkCont002>
          </LinkCont>
        </LinkColumn>
        <LinkColumn>
          <ColumnHead>Follow Us</ColumnHead>
          <LinkCont>
            <LinkCont002>
              <FootLink>
                <i class="fab fa-twitter"></i>
              </FootLink>
              <FootLink>
                <i class="fab fa-facebook-square"></i>
              </FootLink>
              <FootLink>
                <i class="fab fa-instagram"></i>
              </FootLink>
            </LinkCont002>
          </LinkCont>
        </LinkColumn>
      </Links>
      <Copyright>2021 PadsInJapan Holdings</Copyright>
    </FootSec>
  );
}
