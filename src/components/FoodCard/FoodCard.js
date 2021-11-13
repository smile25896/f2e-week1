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

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

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

function FoodCard({ data }) {
  return (
    <Card
      to="/"
      imgurl={data.Picture?.PictureUrl1 ?? "/img/unsplash_SahEnZR5Ni8.png"}
    >
      <Mask />
      <Title>{data.Name}</Title>
      <FlexBoxBasic style={{ justifyContent: "space-between" }}>
        <Catalog>{data.Class}</Catalog>
        <CityTag>
          {data.City ??
            data.Address?.slice(0, 3) ??
            data.Organizer?.slice(0, 3)}
        </CityTag>
      </FlexBoxBasic>
    </Card>
  );
}

export default FoodCard;
