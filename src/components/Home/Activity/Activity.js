import styled from "styled-components";
import { CardWithTag } from "components";
import {
  MainContainer,
  FlexBoxBasic,
  HomeTitleBasic,
  HomeSecondTitleBasic,
  BackgroundCss,
  MoreLinkBasic,
} from "style/Basic";

const ActivityStyled = styled.div`
  ${MainContainer}
  padding-top: 44px;
`;

const CardBox = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  margin: 0 -12.5px;
  @media (max-width: 1439px) {
    & > a:nth-child(3) {
      display: none;
    }
  }
`;

const CardBox2 = styled(CardBox)`
  justify-content: flex-end;
  margin-right: 20px;

  @media (max-width: 1770px) {
    margin-right: 180px;
    & > a:nth-child(4) {
      display: none;
    }
  }
  @media (max-width: 1500px) {
    /* margin-left: 111px; */
  }
  @media (max-width: 1439px) {
    margin-right: 0px;
    & > a:nth-child(3) {
      display: block;
    }
  }
`;

const TitleBox = styled.div`
  padding-top: 47px;
  padding-bottom: 109px;
  margin-left: 53px;
`;

const HomeTitle = styled(HomeTitleBasic)`
  /* position: relative;
  padding-top: 127px;
   */
`;

const HomeSecondTitle = styled(HomeSecondTitleBasic)`
  /* position: relative; */
`;

const BackgroundDeco = styled.div`
  ${BackgroundCss}
  background-image: url("/img/deco3.png");
  position: absolute;
  right: 0;
  bottom: -200px;
  width: 291.79px;
  height: 447.46px;
  z-index: -1;
`;

function Activity() {
  return (
    <ActivityStyled>
      <FlexBoxBasic>
        <CardBox>
          <CardWithTag />
          <CardWithTag />
          <CardWithTag />
        </CardBox>
        <TitleBox>
          <HomeTitle>
            多久沒有
            <br />
            出門走走了呢？
          </HomeTitle>
          <HomeSecondTitle>Let’s get out</HomeSecondTitle>
          <MoreLinkBasic to="/">更多FUNNY</MoreLinkBasic>
        </TitleBox>
      </FlexBoxBasic>
      <CardBox2>
        <CardWithTag />
        <CardWithTag />
        <CardWithTag />
        <CardWithTag />
      </CardBox2>
      <BackgroundDeco />
    </ActivityStyled>
  );
}

export default Activity;
