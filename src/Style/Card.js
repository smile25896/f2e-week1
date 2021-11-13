import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { BackgroundCss } from "style/Basic";

export const Card = styled(Link)`
  display: block;
  width: 290px;

  overflow: hidden;

  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
  border-radius: 10px;

  margin: 0 12.5px 31px;

  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.15);
  }
`;

export const CardImg = styled.div`
  ${BackgroundCss}
  background-image: url(${(props) => props.imgurl});
  height: 243px;
  width: 100%;
`;

export const CardInfo = styled.div`
  padding: 12px 14px;
`;

export const CardTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.03em;
  height: 46px;
  max-height: 46px;
  overflow: hidden;
`;

export const CardContent = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: 0.03em;
  color: #a8a8a8;
  margin-top: 1px;
`;

export const CardBottomInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 16px;
`;

export const CardTagBox = styled.ul``;
export const CardTag = styled.li`
  display: inline-block;
  background: #ededed;
  border-radius: 11px;
  padding: 2px 9px;
  margin: 0 2.5px;
  font-weight: 600;
  font-size: 12px;
  line-height: 17px;
`;

export const CardHighlight = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.03em;

  color: #0085ff;
`;

export const CardDollarBox = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: 0.03em;

  color: #a8a8a8;
`;

export const CardDollar = styled.span`
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  margin-right: 6px;
`;
