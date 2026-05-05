import { Row } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;
  min-height: calc(100vh - var(--header-height));
  padding: 8rem 0 4rem;
  display: flex;
  align-items: center;
  scroll-snap-align: start;
  scroll-snap-stop: always;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const Title = styled("h6")`
  white-space: pre-line;
  color: #404041;

  .accent {
    color: #D4A017;
  }

  .accent-strong {
    color: #D4A017;
    font-weight: 700;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
  white-space: pre-line;
  color: #404041;

  .accent {
    color: #D4A017;
  }

  .accent-strong {
    color: #D4A017;
    font-weight: 700;
  }
`;

export const StyledRow = styled(Row)`
  width: 100%;
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : "row-reverse"};
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;
  width: 100%;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
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
    padding-top: 0;

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
  max-width: 280px;
  margin: 0 auto;
`;

export const ServiceLogoSlot = styled("div")`
  width: 100%;
  height: 132px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
`;

export const MinTitle = styled("h6")`
  font-size: 22px;
  line-height: 1.3;
  padding: 0 0 0.75rem;
  color: #000;
  font-family: "OneStoreMobileGothicTitleFont", sans-serif;
  font-weight: 700;
  white-space: pre-line;
`;

export const MinPara = styled("p")`
  font-size: 13px;
  line-height: 1.7;
  white-space: pre-line;
  max-width: 260px;
  margin: 0 auto;
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

export const HistoryWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 2rem;
`;

export const HistoryGroup = styled("div")`
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  @media only screen and (max-width: 575px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const HistoryYear = styled("div")`
  min-width: 110px;
  font-size: 3rem;
  line-height: 1;
  font-family: "OneStoreMobileGothicTitleFont", sans-serif;
  font-weight: 700;
  color: #404041;
`;

export const HistoryItems = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const HistoryItem = styled("div")`
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  color: #404041;
`;

export const HistoryMonth = styled("span")`
  min-width: 28px;
  font-size: 1rem;
  line-height: 1.6;
  font-family: "OneStoreMobileGothicTitleFont", sans-serif;
  font-weight: 700;
  color: #404041;
`;

export const HistoryText = styled("span")`
  font-size: 1rem;
  line-height: 1.6;
  white-space: pre-line;
  color: #404041;

  .accent {
    color: #D4A017;
  }

  .accent-strong {
    color: #D4A017;
    font-weight: 700;
  }
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;
