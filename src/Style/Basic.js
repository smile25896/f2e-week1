import styled, { css } from "styled-components";

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
`;

export const HomeSecondTitleBasic = styled.h1`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: #9a9a9a;
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainGradientCss = css`
  background: linear-gradient(155.4deg, #78e389 0.2%, #1eb893 90.81%);
`;
