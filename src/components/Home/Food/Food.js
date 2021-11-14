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
  padding-right: 0 !important;

  @media (max-width: 576px) {
    margin-top: 49px;
    height: auto;
  }
`;

const FlexBox = styled(FlexBoxBasic)`
  position: relative;
  height: 100%;
  @media (max-width: 1223px) {
    flex-direction: column;
  }
`;

const TitleBox = styled.div`
  /* padding-top: 47px;
  padding-bottom: 109px;
  margin-left: 53px; */
  min-width: 150px;
  @media (max-width: 1223px) {
    min-width: auto;
    text-align: center;
  }
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

  @media (max-width: 1223px) {
    position: relative;
    padding-left: 0;
    top: 0px;
    margin-top: 31px;
  }

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

  @media (max-width: 1223px) {
    .slick-arrow,
    .slick-dots {
      display: none !important;
    }
  }
`;

function Food({ list }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    variableWidth: true,
    dots: true,
  };
  const foodItems = list
    .slice(3, 15)
    .map((item) => <FoodCard key={item.ID} data={item} />);
  return (
    <FoodStyled>
      <BackgroundDeco className="only-pc" />
      <FlexBox>
        <TitleBox>
          <HomeTitle>餐飲美食</HomeTitle>
          <HomeSecondTitle>tasty</HomeSecondTitle>
          <MoreLinkBasic className="only-pc" to="/">
            更多美味
          </MoreLinkBasic>
        </TitleBox>
        <SliderBox>
          <Slider {...settings}>{foodItems}</Slider>
        </SliderBox>
        <MoreLinkBasic className="only-tablet" to="/">
          更多美味
        </MoreLinkBasic>
      </FlexBox>
    </FoodStyled>
  );
}

export default Food;
