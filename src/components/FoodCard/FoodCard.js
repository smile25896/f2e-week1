import styled from "styled-components";
import { Link } from "react-router-dom";
import { BackgroundCss, FlexBoxBasic } from "style/Basic";

const Card = styled(Link)`
  position: relative;
  ${BackgroundCss}
  display: block;
  width: 231px;
  height: 335px;
  border-radius: 10px;
  margin: 0 10px;
  overflow: hidden;
  background-image: url(${(props) => props.imgurl});
  /* background-color: #c4c4c4; */

  padding: 275px 14px 0;
`;

const Title = styled.div`
  position: relative;
  font-weight: 600;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.03em;

  color: #ffffff;

  text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
`;

const Catalog = styled.div`
  position: relative;
  font-weight: 600;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: 0.03em;

  color: #e4e4e4;
`;

const CityTag = styled.span`
  position: relative;
  background: #0e0e0e;
  border-radius: 10.5px;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: 0.03em;
  padding: 1px 8px;

  color: #ffffff;
`;

const Mask = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 231px;
  height: 148px;
  background: linear-gradient(
    360deg,
    rgba(0, 0, 0, 0.53) 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;

function FoodCard({ imgurl }) {
  return (
    <Card to="/" imgurl={imgurl}>
      <Mask />
      <Title>長角96</Title>
      <FlexBoxBasic style={{ justifyContent: "space-between" }}>
        <Catalog>異國料理</Catalog>
        <CityTag>新北市</CityTag>
      </FlexBoxBasic>
    </Card>
  );
}

export default FoodCard;
