import styled from "styled-components";
import { Row } from "antd";

export const MiddleBlockSection = styled("section")`
  position: relative;
  min-height: calc(100vh - var(--header-height));
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  scroll-snap-stop: always;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Title = styled("h6")`
  white-space: pre-line;
  font-family: "OneStoreMobileGothicBody", sans-serif;
  font-weight: 600;
  color: #404041;

  .accent {
    color: #D4A017;
  }

  .accent-strong {
    color: #D4A017;
    font-weight: 700;
  }

  @media only screen and (max-width: 768px) {
    font-size: 2.25rem;
    line-height: 1.2;
  }

  @media only screen and (max-width: 480px) {
    font-size: 1.85rem;
    line-height: 1.18;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
  white-space: pre-line;
  color: #404041;

  .accent {
    color: #D4A017;
  }

  .accent-strong {
    color: #D4A017;
    font-weight: 700;
  }

  .accent-black-strong {
    color: #000000;
    font-weight: 700;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }

  @media only screen and (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.55;
  }
`;

export const ContentWrapper = styled("div")`
  width: min(100%, 760px);

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ServiceSectionOuter = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin: 0 auto;
  width: min(100%, 1080px);
`;

export const ServiceContentWrapper = styled(ContentWrapper)`
  max-width: 100%;
  width: 100%;
  text-align: center;
  margin: 0 auto;

  ${Content} {
    max-width: 720px;
    margin: 1.5rem auto 2rem;
    text-align: center;
  }

  @media only screen and (max-width: 575px) {
    ${Content} {
      max-width: 100%;
    }
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: center;
  max-width: 100%;
  width: 100%;
`;

export const ServiceRow = styled(Row)`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  justify-content: center;
  align-items: stretch;
  row-gap: 2rem;

  .ant-col {
    display: flex;
    justify-content: center;
  }
`;

export const ServiceCard = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  padding: 1.5rem 1rem;
  width: 100%;
  max-width: 240px;
  margin: 0 auto;
  cursor: pointer;
`;

export const ServiceLogoSlot = styled("div")<{ $tight?: boolean }>`
  width: ${({ $tight }) => ($tight ? "108px" : "100%")};
  height: 132px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;

  img {
    margin: 0 auto;
  }
`;

export const MinPara = styled("p")<{ $wide?: boolean }>`
  font-size: 13px;
  line-height: 1.7;
  white-space: pre-line;
  width: ${({ $wide }) => ($wide ? "162px" : "auto")};
  max-width: ${({ $wide }) => ($wide ? "162px" : "260px")};
  margin: ${({ $wide }) => ($wide ? "0" : "0 auto")};
  text-align: center;
  color: #404041;

  .accent {
    color: #D4A017;
  }

  .accent-strong {
    color: #D4A017;
    font-weight: 700;
  }
`;
