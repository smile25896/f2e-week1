import styled from "styled-components";
import { CardWithTag } from "components";
import {
  FlexBox,
  HomeTitleBasic,
  HomeSecondTitleBasic,
  BackgroundCss,
  MoreLinkBasic,
} from "style/Basic";

const ActivityStyled = styled.div`
  position: relative;
  padding: 44px 103px;
`;

const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -12.5px;
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
`;

function Activity() {
  return (
    <ActivityStyled>
      <FlexBox>
        <CardBox>
          <CardWithTag />
          <CardWithTag />
          {/* <CardWithTag /> */}
        </CardBox>
        <TitleBox>
          <HomeTitle>
            多久沒有
            <br />
            出門走走了呢？
          </HomeTitle>
          <HomeSecondTitle>Let’s get out</HomeSecondTitle>
          <MoreLinkBasic>更多FUNNY</MoreLinkBasic>
        </TitleBox>
      </FlexBox>
      <CardBox style={{ marginLeft: "111px" }}>
        <CardWithTag />
        <CardWithTag />
        {/* <CardWithTag /> */}
      </CardBox>
      <BackgroundDeco />
    </ActivityStyled>
  );
}

export default Activity;
