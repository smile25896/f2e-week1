import styled from "styled-components";
import { SearchInputBasic } from "Style/Input";

const BannerStyled = styled.div`
  background-image: url("/img/banner.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  max-height: 500px;
  height: 500px;
  padding-top: 149px;
`;

const Title = styled.h1`
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 58px;
  letter-spacing: 0.03em;
  color: #ffffff;
  text-shadow: 0px 4px 15px rgba(33, 43, 40, 0.37);
  margin-bottom: 4px;
`;

const SecondTitle = styled.h2`
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.03em;

  color: #ffffff;

  text-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 53px auto 0;
  width: 691px;
  height: 60px;

  background: #ffffff;
  border: 6px solid #e7e7e7;
  box-sizing: border-box;
  border-radius: 79px;
`;

const SearchInput = styled.input`
  ${SearchInputBasic}
  flex: 1;
  text-align: left;
  font-size: 16px;
  line-height: 48px;
  padding-left: 21px;
`;

const SearchButton = styled.button`
  width: 85px;
  height: 40px;
  left: 968px;
  top: 364px;
  margin-right: 5px;
  border-width: 0;
  background: linear-gradient(155.4deg, #78e389 0.2%, #1eb893 90.81%);
  border-radius: 20px;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.03em;
  color: #ffffff;

  i {
    margin-right: 5px;
  }
`;

function Banner() {
  return (
    <BannerStyled>
      <Title>想去哪裡玩？</Title>
      <SecondTitle>這裡共有上千個活動及美食等著你去一同體驗</SecondTitle>
      <SearchBox>
        <SearchInput placeholder="12/22新北耶誕嘉年華" />
        <SearchButton>
          <i className="fa fa-search" />
          搜尋
        </SearchButton>
      </SearchBox>
    </BannerStyled>
  );
}

export default Banner;
