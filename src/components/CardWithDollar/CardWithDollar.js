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

function CardWithDollar() {
  return (
    <Card to="/">
      <CardImg imgUrl="/img/unsplash_SahEnZR5Ni8.png" />
      <CardInfo>
        <CardTitle>洛碁大飯店忠孝館</CardTitle>
        <CardContent>國際觀光旅館</CardContent>
        <CardBottomInfo>
          <CardDollarBox>
            <CardDollar>NT$ 1,200</CardDollar>起
          </CardDollarBox>
          <CardHighlight>桃園市</CardHighlight>
        </CardBottomInfo>
      </CardInfo>
    </Card>
  );
}

export default CardWithDollar;
