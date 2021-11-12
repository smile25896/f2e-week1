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

const HouseStyled = styled.div`
  ${MainContainer}
  padding-top: 127px;
  padding-bottom: 65px;
`;

const TitleBox = styled.div`
  text-align: center;
`;

const CardBox = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 47px;

  & > a:nth-child(2n) {
    margin-top: 30px;
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

function House() {
  return (
    <HouseStyled>
      <BackgroundDeco />
      <TitleBox>
        <HomeTitleBasic>精選住宿</HomeTitleBasic>
        <HomeSecondTitleBasic>accommodation</HomeSecondTitleBasic>
      </TitleBox>
      <CardBox>
        <CardWithDollar />
        <CardWithDollar />
        <CardWithDollar />
        <CardWithDollar />
      </CardBox>
      <MoreDiv>
        <MoreLinkBasic>更多住宿</MoreLinkBasic>
      </MoreDiv>
    </HouseStyled>
  );
}

export default House;
