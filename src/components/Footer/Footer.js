import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterStyled = styled.header`
  padding-top: 58px;
  background-color: #333333;
`;

const LogoDiv = styled.div`
  text-align: center;
`;

const MenuBox = styled.ul`
  display: flex;
  justify-content: center;
  padding: 29px 0 59px;
`;
const MenuItem = styled.li`
  flex: 1;
  font-size: 15px;
  line-height: 22px;

  letter-spacing: 0.03em;

  color: #b3b3b3;
  margin: 0 20px;
`;

const MoreInfo = styled.div`
  background: #1f1f1f;
  padding: 4px 0 6px;
  text-align: center;
  font-size: 12px;
  line-height: 17px;
  /* identical to box height */

  letter-spacing: 0.03em;

  color: #868686;
`;

function Footer() {
  return (
    <FooterStyled>
      <LogoDiv>
        <img src={process.env.PUBLIC_URL + "/img/logo2.png"} />
      </LogoDiv>
      <MenuBox>
        <Link to="/">
          <MenuItem>旅遊景點</MenuItem>
        </Link>
        <Link to="/">
          <MenuItem>特色活動</MenuItem>
        </Link>
        <Link to="/">
          <MenuItem>美食饗宴</MenuItem>
        </Link>
        <Link to="/">
          <MenuItem>精選住宿</MenuItem>
        </Link>
      </MenuBox>
      <MoreInfo>Week1 - 台灣旅遊景點導覽</MoreInfo>
    </FooterStyled>
  );
}

export default Footer;
