import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = css`
  position: relative;
  padding-left: 203px;
  padding-right: 203px;
  @media (max-width: 1680px) {
    padding-left: 150px;
    padding-right: 150px;
  }
  @media (max-width: 1500px) {
    padding-left: 103px;
    padding-right: 103px;
  }
  @media (max-width: 1023px) {
    padding-left: 2%;
    padding-right: 2%;
  }
`;

export const BackgroundCss = css`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const HomeTitleBasic = styled.h1`
  font-size: 32px;
  line-height: 46px;
  letter-spacing: 0.03em;
  font-weight: 600;
  margin-bottom: 14px;

  color: #000000;

  @media (max-width: 1023px) {
    margin-bottom: 4px;
  }

  @media (max-width: 576px) {
    font-size: 20px;
    line-height: 29px;
  }
`;

export const HomeSecondTitleBasic = styled.h1`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: #9a9a9a;
  @media (max-width: 576px) {
    font-size: 10px;
    line-height: 12px;
  }
`;

export const FlexBoxBasic = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
`;

export const MainGradientCss = css`
  background: linear-gradient(155.4deg, #78e389 0.2%, #1eb893 90.81%);
`;

export const MoreLinkBasic = styled(Link)`
  position: relative;
  display: inline-block;
  ${MainGradientCss}
  border-radius: 53px;
  margin-top: 39px;
  padding: 12px 38px 12px 23px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.03em;
  color: #ffffff;

  @media (max-width: 576px) {
    margin-top: 34px;
  }

  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    margin-left: 7px;
    right: 21px;
    top: 19px;
    background: #ffffff;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 27px;
    height: 2px;
    right: 0px;
    top: 21px;
    background: #ffffff;
  }
`;
