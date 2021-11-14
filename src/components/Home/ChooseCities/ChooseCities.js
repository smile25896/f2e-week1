import styled from "styled-components";
import { CityCard } from "components";
import {
  BackgroundCss,
  HomeTitleBasic,
  HomeSecondTitleBasic,
  MainContainer,
} from "style/Basic";

const ChooseCitiesStyled = styled.div`
  position: relative;
  padding-left: 219px;
  display: flex;
  min-height: 443px;

  @media (max-width: 1440px) {
    padding-right: 350px;
  }

  @media (max-width: 1290px) {
    padding-right: 200px;
  }

  @media (max-width: 1140px) {
    padding-right: 50px;
  }

  @media (max-width: 1023px) {
    ${MainContainer}
    flex-direction: column;
    align-items: center;
    background-color: #f2f2f2;
    padding-bottom: 35px;
  }
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
  padding-top: 127px;

  @media (max-width: 1023px) {
    padding-top: 47px;
    text-align: center;
  }
`;

const HomeTitle = styled(HomeTitleBasic)`
  position: relative;
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

  @media (max-width: 1023px) {
    margin-left: 0;
    padding-top: 18px;
    justify-content: center;
  }

  @media (max-width: 853px) and (min-width: 671px) {
    padding-left: 80px;
    padding-right: 80px;
  }

  @media (max-width: 670px) and (min-width: 600px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;

function ChooseCities() {
  return (
    <ChooseCitiesStyled>
      <BackgroundGray className="only-pc" />
      <BackgroundCircle className="only-pc" />
      <BackgroundHiking className="only-pc" />
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
        <CityCard />
      </CityCardBox>
    </ChooseCitiesStyled>
  );
}

export default ChooseCities;
