import styled from "styled-components";
import { FoodCard } from "components";
import {
  MainContainer,
  FlexBoxBasic,
  HomeTitleBasic,
  HomeSecondTitleBasic,
  BackgroundCss,
  MoreLinkBasic,
} from "style/Basic";
import Slider from "react-slick";

const FoodStyled = styled.div`
  ${MainContainer}
  margin-top: 108px;
  height: 484px;
`;

const FlexBox = styled(FlexBoxBasic)`
  height: 100%;
`;

const TitleBox = styled.div`
  /* padding-top: 47px;
  padding-bottom: 109px;
  margin-left: 53px; */
  min-width: 150px;
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
  background-image: url("/img/gray-deco.png");
  position: absolute;
  left: 0;
  top: 0;
  width: 733px;
  height: 484px;
  z-index: -1;
`;

const SliderBox = styled.div`
  max-width: 100%;
  flex: 1;
  margin: 0 -10px;
`;

function Food() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <FoodStyled>
      <BackgroundDeco />
      <FlexBox>
        <TitleBox>
          <HomeTitle>餐飲美食</HomeTitle>
          <HomeSecondTitle>tasty</HomeSecondTitle>
          <MoreLinkBasic>更多美味</MoreLinkBasic>
        </TitleBox>
        <SliderBox>
          <Slider {...settings}>
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
          </Slider>
        </SliderBox>
      </FlexBox>
    </FoodStyled>
  );
}

export default Food;
