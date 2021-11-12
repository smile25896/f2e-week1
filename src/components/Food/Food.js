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
  padding-right: 0;
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
  position: relative;
  max-width: calc(100% - 100px);
  flex: 1;
  padding-left: 50px;
  overflow: hidden;

  .slick-slider {
    max-width: 100%;
    /* overflow: hidden; */
  }
  .slick-arrow {
    z-index: 99;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100px;
    height: 100px;
  }

  .slick-prev {
    background-image: url("/img/btn-left.png");
    top: 103px;
    left: -50px;

    &:before {
      display: none;
    }
  }

  .slick-next {
    background-image: url("/img/btn-right.png");
    top: 253px;
    right: 50px;

    &:before {
      display: none;
    }
  }
`;

function Food() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    variableWidth: true,
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
            <FoodCard imgUrl="/img/food1.png" />
            <FoodCard imgUrl="/img/food2.png" />
            <FoodCard imgUrl="/img/food1.png" />
            <FoodCard imgUrl="/img/food1.png" />
            <FoodCard imgUrl="/img/food2.png" />
            <FoodCard imgUrl="/img/food1.png" />
            <FoodCard imgUrl="/img/food2.png" />
          </Slider>
        </SliderBox>
      </FlexBox>
    </FoodStyled>
  );
}

export default Food;
