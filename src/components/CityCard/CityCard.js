import styled from "styled-components";
import { Link } from "react-router-dom";
import { MainGradientCss } from "style/Basic";

const CityCardsEmpty = styled.div`
  width: 123px;
  margin: 0 17px 34px;
  padding: 22px 23px;

  @media (max-width: 576px) {
    margin: 5px;
    width: 108px;
  }
`;

const CityCardsStyled = styled(Link)`
  width: 123px;
  height: 151px;
  left: 462px;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  margin: 0 17px 34px;
  padding: 22px 23px;

  @media (max-width: 576px) {
    margin: 5px;
    width: 108px;
    height: 133px;
    padding: 20px 22px;
  }

  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.12);
  }
`;

const IconBox = styled.div`
  ${MainGradientCss}
  width: 76px;
  height: 76px;
  left: 485px;
  top: 682px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 576px) {
    width: 67px;
    height: 67px;
  }
`;

const Title = styled.h3`
  text-align: center;
  margin-top: 9px;
  font-size: 16px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0.1em;
  @media (max-width: 576px) {
    margin-top: 7px;
    font-weight: normal;
  }
`;

function CityCards({ text, imgNum }) {
  return text ? (
    <CityCardsStyled to="/">
      <IconBox>
        <img src={`${process.env.PUBLIC_URL}/img/city-icon${imgNum}.png`} />
      </IconBox>
      <Title>{text}</Title>
    </CityCardsStyled>
  ) : (
    <CityCardsEmpty className="only-tablet" />
  );
}

export default CityCards;
