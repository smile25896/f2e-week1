import styled from "styled-components";
import {
  Card,
  CardImg,
  CardInfo,
  CardTitle,
  CardContent as CardContentBasic,
  CardBottomInfo,
  CardTagBox,
  CardTag,
  CardHighlight,
} from "style/Card";

const CardContent = styled(CardContentBasic)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function CardWithTag({ data }) {
  console.log(data);
  if (!data) return <></>;
  return (
    <Card to="/">
      <CardImg
        imgurl={data.Picture?.PictureUrl1 ?? "/img/unsplash_SahEnZR5Ni8.png"}
      />
      <CardInfo>
        <CardTitle>{data.Name}</CardTitle>
        <CardContent>{data.Address || data.Organizer}</CardContent>
        <CardBottomInfo>
          <CardTagBox>
            {data.Class1 != undefined ? <CardTag>{data.Class1}</CardTag> : null}
            {data.Class2 != undefined ? <CardTag>{data.Class2}</CardTag> : null}
          </CardTagBox>
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

export default CardWithTag;
