import styled from "styled-components";
import AreaTrain from "./AreaTrain";
import BuyRent from "./BuyRent";

const SearchPad = styled.section`
  padding-bottom: 50px;
`;

const SearchHeader = styled.div`
  font-size: 24px;
  padding: 16px;
  margin-bottom: -1rem;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 810px) {
    font-size: initial;
    padding: 8px;
  }
`;

const SrchOptions = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 810px) {
    display: block;
  }
`;

const Option001 = styled.div`
  @media screen and (max-width: 810px) {
    display: block;
  }
`;

const Option002 = styled.div`
  @media screen and (max-width: 810px) {
    display: block;
    margin-top: 5px;
  }
`;

const Option003 = styled.div`
  @media screen and (max-width: 810px) {
    display: block;
    margin-top: 5px;
  }
`;

const SelectRegion = styled.select`
  padding: 8px;
  font-size: 14px;
  background-color: white;
  border: 1px solid;
  cursor: pointer;

  @media screen and (max-width: 810px) {
    display: block;
    width: 100%;
  }
`;

const Region = styled.option``;

const Option004 = styled.div`
  @media screen and (max-width: 810px) {
    display: block;
    margin-top: 5px;
  }
`;

const SelectCity = styled.select`
  padding: 8px;
  font-size: 14px;
  background-color: white;
  border: 1px solid;
  cursor: pointer;

  @media screen and (max-width: 810px) {
    display: block;
    width: 100%;
  }
`;

const City = styled.option``;

const Option005 = styled.div`
  @media screen and (max-width: 810px) {
    display: block;
    width: 100%;
    margin-top: 5px;
  }
`;

const SelectDistrict = styled.select`
  padding: 8px;
  font-size: 14px;
  background-color: white;
  border: 1px solid;
  cursor: pointer;

  @media screen and (max-width: 810px) {
    display: block;
    width: 100%;
  }
`;

const District = styled.option``;

const Option006 = styled.div`
  @media screen and (max-width: 810px) {
    display: block;
    margin-top: 5px;
  }
`;

const MaxPrice = styled.select`
  padding: 8px;
  font-size: 14px;
  background-color: white;
  border: 1px solid;
  cursor: pointer;

  @media screen and (max-width: 810px) {
    display: block;
    width: 100%;
  }
`;

const Price = styled.option``;

const Search = styled.div`
  @media screen and (max-width: 810px) {
    display: block;
    margin-top: 5px;
  }
`;

const SearchBtn = styled.button`
  width: 40px;
  height: 40px;
  padding: 8px 12px;
  font-size: 14px;
  border-radius: 8px;
  border: none;
  color: white;
  background-color: #934687;
  cursor: pointer;

  span {
    display: none;
  }

  &:hover {
    background-color: #74388f;
  }

  @media screen and (max-width: 810px) {
    width: 100%;

    i {
      display: none;
    }

    span {
      display: initial;
      font-size: 18px;
    }
  }
`;

const AdvancedSearch = styled.div`
  text-align: right;
  width: 80%;

  p {
    color: #934687;
    cursor: pointer;

    &:hover {
      color: #74388f;
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 810px) {
    text-align: center;
    width: 100%;
  }
`;

export default function FindPad() {
  return (
    <SearchPad>
      <SearchHeader>
        <h2>Find Your Pad in Japan</h2>
      </SearchHeader>
      <SrchOptions>
        <Option001>
          <BuyRent />
        </Option001>
        <Option002>
          <AreaTrain />
        </Option002>
        <Option003>
          <SelectRegion>
            <Region>Nationwide</Region>
            <Region>Hokkaido</Region>
            <Region>Tohoku</Region>
            <Region>Kanto</Region>
            <Region>Chubu</Region>
            <Region>Kansai</Region>
            <Region>Chugoku</Region>
            <Region>Shikoku</Region>
            <Region>Kyushu</Region>
            <Region>Okinawa</Region>
          </SelectRegion>
        </Option003>
        <Option004>
          <SelectCity>
            <City>All Cities</City>
            <City>Tokyo</City>
            <City>Saitama</City>
            <City>Yokohama</City>
            <City>Kawasaki</City>
            <City>Chiba</City>
            <City>Utsunomiya</City>
            <City>Takasaki</City>
            <City>Mito</City>
          </SelectCity>
        </Option004>
        <Option005>
          <SelectDistrict>
            <District>All Districts</District>
            <District>Shinjuku</District>
            <District>Shibuya</District>
            <District>Chuo</District>
            <District>Nakano</District>
            <District>Toshima</District>
          </SelectDistrict>
        </Option005>
        <Option006>
          <MaxPrice>
            <Price>Max Price</Price>
            <Price>2,000,000</Price>
            <Price>4,000,000</Price>
            <Price>6,000,000</Price>
            <Price>8,000,000</Price>
            <Price>10,000,000</Price>
          </MaxPrice>
        </Option006>
        <Search>
          <SearchBtn>
            <span>Search</span>
            <i class="fas fa-search"></i>
          </SearchBtn>
        </Search>
      </SrchOptions>
      <AdvancedSearch>
        <p>Advanced Search</p>
      </AdvancedSearch>
    </SearchPad>
  );
}
