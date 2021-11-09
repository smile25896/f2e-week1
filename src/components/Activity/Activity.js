import styled from "styled-components";
import { CardWithTag } from "components";
import { FlexBox, HomeTitleBasic, HomeSecondTitleBasic } from "style/Basic";
import { Link } from "react-router-dom";
import { MainGradientCss } from "style/Basic";
// import {
//   Card,
//   CardImg,
//   CardInfo,
//   CardTitle,
//   CardContent,
//   CardBottomInfo,
//   CardTagBox,
//   CardTag,
//   CardHighlight,
// } from "style/Card";

const ActivityStyled = styled.div`
  padding: 44px 103px;
`;

const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -12.5px;
`;

const TitleBox = styled.div``;

const HomeTitle = styled(HomeTitleBasic)`
  /* position: relative;
  padding-top: 127px;
   */
`;

const HomeSecondTitle = styled(HomeSecondTitleBasic)`
  /* position: relative; */
`;

const MoreLink = styled(Link)`
  position: relative;
  display: inline-block;
  ${MainGradientCss}
  border-radius: 53px;
  margin-top: 39px;
  padding: 12px 38px 12px 23px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.03em;
  color: #ffffff;

  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    margin-left: 7px;
    right: 21px;
    top: 19px;
    background: #ffffff;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 27px;
    height: 2px;
    right: 0px;
    top: 21px;
    background: #ffffff;
  }
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
          <MoreLink>更多FUNNY</MoreLink>
        </TitleBox>
      </FlexBox>
      <CardBox>
        <CardWithTag />
        <CardWithTag />
        {/* <CardWithTag /> */}
      </CardBox>
    </ActivityStyled>
  );
}

export default Activity;
