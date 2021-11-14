import styled from "styled-components";
import { CardWithDollar } from "components";
import {
  MainContainer,
  FlexBoxBasic,
  HomeTitleBasic,
  HomeSecondTitleBasic,
  BackgroundCss,
  MoreLinkBasic,
} from "style/Basic";

const HotelStyled = styled.div`
  ${MainContainer}
  padding-top: 127px;
  padding-bottom: 65px;

  @media (max-width: 576px) {
    padding-top: 49px;
  }
`;

const TitleBox = styled.div`
  text-align: center;
`;

const CardBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 47px;

  @media (max-width: 576px) {
    padding-top: 31px;
  }

  & > a:nth-child(2n) {
    margin-top: 30px;
  }

  @media (max-width: 1240px) {
    flex-wrap: wrap;
    padding-left: 100px;
    padding-right: 100px;
  }

  @media (max-width: 1036px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;

const MoreDiv = styled.div`
  text-align: center;
`;

const BackgroundDeco = styled.div`
  ${BackgroundCss}
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
  background-image: url("/img/Subtract.png");
  width: 100%;
  height: 435px;
`;

function Hotel({ list }) {
  const hotelItems = list
    .slice(2, 6)
    .map((item) => <CardWithDollar key={item.ID} data={item} />);
  return (
    <HotelStyled>
      <BackgroundDeco />
      <TitleBox>
        <HomeTitleBasic>精選住宿</HomeTitleBasic>
        <HomeSecondTitleBasic>accommodation</HomeSecondTitleBasic>
      </TitleBox>
      <CardBox>{hotelItems}</CardBox>
      <MoreDiv>
        <MoreLinkBasic to="/">更多住宿</MoreLinkBasic>
      </MoreDiv>
    </HotelStyled>
  );
}

export default Hotel;
