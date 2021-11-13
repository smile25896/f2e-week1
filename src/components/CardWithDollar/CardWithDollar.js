import styled from "styled-components";
import {
  Card,
  CardImg,
  CardInfo,
  CardTitle,
  CardContent,
  CardBottomInfo,
  CardHighlight,
  CardDollarBox,
  CardDollar,
} from "style/Card";

function CardWithDollar({ data }) {
  return (
    <Card to="/">
      <CardImg
        imgurl={data.Picture?.PictureUrl1 ?? "/img/unsplash_SahEnZR5Ni8.png"}
      />
      <CardInfo>
        <CardTitle>{data.Name}</CardTitle>
        <CardContent>{data.Class != undefined ? data.Class : null}</CardContent>
        <CardBottomInfo>
          <CardDollarBox>
            <CardDollar>NT$ 1,200</CardDollar>起
          </CardDollarBox>
          <CardHighlight>
            {data.City ??
              data.Address?.slice(0, 3) ??
              data.Organizer?.slice(0, 3)}
          </CardHighlight>
        </CardBottomInfo>
      </CardInfo>
    </Card>
  );
}

export default CardWithDollar;
