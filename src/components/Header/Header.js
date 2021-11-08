import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 23px 13px 36px;
`;

const LogoBox = styled.div``;

const MenuBox = styled.div`
  display: flex;
`;
const MenuItem = styled.div`
  flex: 1;
  font-size: 15px;
  line-height: 22px;

  font-weight: 600;
  letter-spacing: 0.03em;

  color: #000000;
  margin: 0 20px;
`;

const SearchBox = styled.div`
  width: 195px;
  height: 45px;
  background: #f5f5f5;
  border: 3px solid #f0f0f0;
  box-sizing: border-box;
  border-radius: 34px;
  padding-left: 22px;
  padding-right: 22px;
  display: flex;
  justify-content: space-between;
`;

const SearchInput = styled.input`
  border-width: 0px;
  background-color: transparent;
  font-size: 15px;
  letter-spacing: 0.03em;
  color: #545454;
  width: 110px;
  line-height: 39px;

  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled.i`
  color: #707070;
  font-size: 18px;
  margin-left: 5px;
  line-height: 39px;
`;

function Header() {
  return (
    <HeaderStyled>
      <LogoBox>
        <img src={process.env.PUBLIC_URL + "/img/logo1.png"} />
      </LogoBox>
      <MenuBox>
        <MenuItem>旅遊景點</MenuItem>
        <MenuItem>特色活動</MenuItem>
        <MenuItem>美食饗宴</MenuItem>
        <MenuItem>精選住宿</MenuItem>
      </MenuBox>
      <SearchBox>
        <SearchInput placeholder="搜尋關鍵字..." />
        <SearchIcon className="fa fa-search" />
      </SearchBox>
    </HeaderStyled>
  );
}

export default Header;