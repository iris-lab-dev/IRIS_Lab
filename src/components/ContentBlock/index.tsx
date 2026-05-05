import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  Title,
  ContentWrapper,
  ServiceSectionOuter,
  ServiceContentWrapper,
  ServiceWrapper,
  ServiceRow,
  ServiceCard,
  ServiceLogoSlot,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
  HistoryWrapper,
  HistoryGroup,
  HistoryYear,
  HistoryItems,
  HistoryItem,
  HistoryMonth,
  HistoryText,
} from "./styles";

const ContentBlock = ({
  icon,
  title,
  content,
  section,
  history,
  button,
  t,
  id,
  direction,
}: ContentBlockProps) => {
  const renderInlineMarkup = (value: string) => ({ __html: t(value) });

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const hasSection = typeof section === "object" && section.length > 0;
  const hasHistory = typeof history === "object" && history.length > 0;
  const hasIcon = Boolean(icon);

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        {hasSection ? (
          <ServiceSectionOuter>
            <ServiceContentWrapper id={id}>
              <Title dangerouslySetInnerHTML={renderInlineMarkup(title)} />
              {content ? <Content dangerouslySetInnerHTML={renderInlineMarkup(content)} /> : null}
              <ServiceWrapper>
                <ServiceRow gutter={[24, 24]}>
                  {section.map(
                    (
                      item: {
                        title?: string;
                        content: string;
                        icon: string;
                      },
                      id: number
                    ) => {
                      return (
                        <Col key={id} lg={7} md={8} sm={12} xs={24}>
                          <ServiceCard>
                            <ServiceLogoSlot>
                              <SvgIcon
                                src={item.icon}
                                width="108px"
                                height="108px"
                              />
                            </ServiceLogoSlot>
                            {/* {item.title ? <MinTitle>{t(item.title)}</MinTitle> : null} */}

                            <MinPara dangerouslySetInnerHTML={renderInlineMarkup(item.content)} />
                          </ServiceCard>
                        </Col>
                      );
                    }
                  )}
                </ServiceRow>
              </ServiceWrapper>
            </ServiceContentWrapper>
          </ServiceSectionOuter>
        ) : hasHistory ? (
          <StyledRow justify="space-between" align="middle" id={id} direction={direction}>
            <Col span={24}>
              <ContentWrapper>
                <Title dangerouslySetInnerHTML={renderInlineMarkup(title)} />
                <HistoryWrapper>
                  {history.map((group, groupIndex) => {
                    return (
                      <HistoryGroup key={groupIndex}>
                        <HistoryYear>{t(group.year)}</HistoryYear>
                        <HistoryItems>
                          {group.items.map((item, itemIndex) => {
                            return (
                              <HistoryItem key={itemIndex}>
                                <HistoryMonth dangerouslySetInnerHTML={renderInlineMarkup(item.month)} />
                                <HistoryText dangerouslySetInnerHTML={renderInlineMarkup(item.content)} />
                              </HistoryItem>
                            );
                          })}
                        </HistoryItems>
                      </HistoryGroup>
                    );
                  })}
                </HistoryWrapper>
              </ContentWrapper>
            </Col>
          </StyledRow>
        ) : (
          <StyledRow
            justify="space-between"
            align="middle"
            id={id}
            direction={direction}
          >
            {hasIcon ? (
              <Col lg={11} md={11} sm={12} xs={24}>
                <SvgIcon src={icon as string} width="100%" height="100%" />
              </Col>
            ) : null}
            <Col lg={hasIcon ? 11 : 24} md={hasIcon ? 11 : 24} sm={hasIcon ? 11 : 24} xs={24}>
              <ContentWrapper>
                <Title dangerouslySetInnerHTML={renderInlineMarkup(title)} />
                {content ? <Content dangerouslySetInnerHTML={renderInlineMarkup(content)} /> : null}
                {direction === "right" ? (
                  <ButtonWrapper>
                    {typeof button === "object" &&
                      button.map(
                        (
                          item: {
                            color?: string;
                            title: string;
                          },
                          id: number
                        ) => {
                          return (
                            <Button
                              key={id}
                              color={item.color}
                              onClick={() => scrollTo("about")}
                            >
                              {t(item.title)}
                            </Button>
                          );
                        }
                      )}
                  </ButtonWrapper>
                ) : null}
              </ContentWrapper>
            </Col>
          </StyledRow>
        )}
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
