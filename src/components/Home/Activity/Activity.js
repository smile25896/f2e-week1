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
  position: relative;
  padding-top: 44px;
`;

const CardBox = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  margin: 0 -12.5px;
`;

const CardBox1 = styled(CardBox)`
  justify-content: flex-end;
  margin-right: 20px;

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

  @media (max-width: 1439px) and (min-width: 1241px) {
    margin-right: 0px;
    /* & > a:nth-child(3) {
      display: block;
    } */
  }

  @media (max-width: 1241px) {
    margin-right: 0px;
    & > a:nth-child(3) {
      display: none;
    }
  }
`;

const CardBox3 = styled(CardBox)`
  @media (max-width: 1023px) {
    justify-content: center;
    flex-wrap: wrap;
    margin-left: 0;
    margin-right: 0;

    /* & > a {
      width: calc(50% - 25px);
    } */
  }
`;

const TitleBox = styled.div`
  padding-top: 3px;
  padding-bottom: 109px;
  margin-left: 53px;

  @media (max-width: 1023px) {
    padding-top: 49px;
    padding-bottom: 31px;
    margin-left: 0;
    text-align: center;
  }
`;

const HomeTitle = styled(HomeTitleBasic)``;

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

const MoreLinkBasicBox = styled.div`
  text-align: center;
`;

function Activity({ list }) {
  return (
    <ActivityStyled>
      <FlexBoxBasic className="only-pc">
        <CardBox1>
          <CardWithTag data={list[5]} />
          <CardWithTag data={list[6]} />
          <CardWithTag data={list[7]} />
        </CardBox1>
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
      <CardBox2 className="only-pc">
        <CardWithTag data={list[8]} />
        <CardWithTag data={list[13]} />
        <CardWithTag data={list[12]} />
        <CardWithTag data={list[14]} />
      </CardBox2>
      <TitleBox className="only-tablet">
        <HomeTitle>多久沒有出門走走了呢？</HomeTitle>
        <HomeSecondTitle>Let’s get out</HomeSecondTitle>
      </TitleBox>
      <CardBox3 className="only-tablet">
        <CardWithTag data={list[5]} />
        <CardWithTag data={list[6]} />
        <CardWithTag data={list[7]} />
        <CardWithTag data={list[8]} />
        <CardWithTag data={list[13]} />
        <CardWithTag data={list[12]} />
      </CardBox3>
      <MoreLinkBasicBox classNam="only-tablet">
        <MoreLinkBasic to="/">更多FUNNY</MoreLinkBasic>
      </MoreLinkBasicBox>
      <BackgroundDeco className="only-pc" />
    </ActivityStyled>
  );
}

export default Activity;
