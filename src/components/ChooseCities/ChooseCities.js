import styled from "styled-components";
import { CityCard } from "components";
import {
  BackgroundCss,
  HomeTitleBasic,
  HomeSecondTitleBasic,
} from "style/Basic";

const ChooseCitiesStyled = styled.div`
  position: relative;
  padding: 0 0 0 219px;
  display: flex;
  min-height: 443px;
`;

const BackgroundGray = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  height: 329px;
  background: #f7f7f7;
  border-radius: 0px 0px 136px 0px;
`;

const BackgroundCircle = styled.div`
  ${BackgroundCss}
  background-image: url('/img/deco2.png');
  position: absolute;
  width: 100px;
  height: 251.9px;
  top: 191px;
  left: 0;
`;

const BackgroundHiking = styled.div`
  ${BackgroundCss}
  background-image: url('/img/deco1.png');
  position: absolute;
  top: 171px;
  left: 52px;
  width: 140px;
  height: 140px;
`;

const TitleBox = styled.div`
  width: 135px;
  min-width: 135px;
`;

const HomeTitle = styled(HomeTitleBasic)`
  position: relative;
  padding-top: 127px;
  margin-bottom: 14px;
  font-weight: 600;
`;

const HomeSecondTitle = styled(HomeSecondTitleBasic)`
  position: relative;
`;

const CityCardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding-top: 92px;
  margin-left: 112px;
`;

function ChooseCities() {
  return (
    <ChooseCitiesStyled>
      <BackgroundGray />
      <BackgroundCircle />
      <BackgroundHiking />
      <TitleBox>
        <HomeTitle>縣市快選</HomeTitle>
        <HomeSecondTitle>Choose Cities</HomeSecondTitle>
      </TitleBox>
      <CityCardBox>
        <CityCard text="北部" imgNum="1" />
        <CityCard text="中部" imgNum="2" />
        <CityCard text="南部" imgNum="3" />
        <CityCard text="東部" imgNum="4" />
        <CityCard text="離島" imgNum="5" />
      </CityCardBox>
    </ChooseCitiesStyled>
  );
}

export default ChooseCities;
