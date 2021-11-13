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
  position: relative;
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
  position: absolute;
  max-width: 100%;
  overflow: hidden;
  flex: 1;
  top: 71px;
  padding-left: 200px;
  overflow: hidden;

  .slick-slider {
    max-width: 100%;
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

  .slick-dots {
    bottom: 20px;
    left: -203px;
    text-align: left;

    li {
      width: 10px;
      margin: 0 4px;

      button:before {
        content: "";
        background-color: #717171;
        width: 8px;
        height: 8px;
        border-radius: 5px;
        margin-top: 4px;
        margin-right: 5px;
      }
    }

    li.slick-active {
      width: 32px;

      button:before {
        content: "";
        background-color: #1eb893;
        width: 30px;
        height: 8px;
        border-radius: 5px;
        margin-top: 4px;
        margin-right: 5px;
      }
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
    dots: true,
  };
  return (
    <FoodStyled>
      <BackgroundDeco />
      <FlexBox>
        <TitleBox>
          <HomeTitle>餐飲美食</HomeTitle>
          <HomeSecondTitle>tasty</HomeSecondTitle>
          <MoreLinkBasic to="/">更多美味</MoreLinkBasic>
        </TitleBox>
        <SliderBox>
          <Slider {...settings}>
            <FoodCard imgurl="/img/food1.png" />
            <FoodCard imgurl="/img/food2.png" />
            <FoodCard imgurl="/img/food1.png" />
            <FoodCard imgurl="/img/food1.png" />
            <FoodCard imgurl="/img/food2.png" />
            <FoodCard imgurl="/img/food1.png" />
            <FoodCard imgurl="/img/food2.png" />
          </Slider>
        </SliderBox>
      </FlexBox>
    </FoodStyled>
  );
}

export default Food;
