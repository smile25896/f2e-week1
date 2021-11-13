import styled from "styled-components";
import {
  Card,
  CardImg,
  CardInfo,
  CardTitle,
  CardContent,
  CardBottomInfo,
  CardTagBox,
  CardTag,
  CardHighlight,
} from "style/Card";

function CardWithTag() {
  return (
    <Card to="/">
      <CardImg imgurl="/img/unsplash_SahEnZR5Ni8.png" />
      <CardInfo>
        <CardTitle>2021大溪豆干節</CardTitle>
        <CardContent>臺北市政府工務局公園路燈工程管理處</CardContent>
        <CardBottomInfo>
          <CardTagBox>
            <CardTag>年度</CardTag>
            <CardTag>節慶</CardTag>
          </CardTagBox>
          <CardHighlight>桃園市</CardHighlight>
        </CardBottomInfo>
      </CardInfo>
    </Card>
  );
}

export default CardWithTag;
