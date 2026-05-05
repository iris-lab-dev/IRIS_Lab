import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  MiddleBlockSection,
  Title,
  Content,
  ContentWrapper,
  ServiceSectionOuter,
  ServiceContentWrapper,
  ServiceWrapper,
  ServiceRow,
  ServiceCard,
  ServiceLogoSlot,
  MinPara,
} from "./styles";

interface MiddleBlockProps {
  title: string;
  content: string;
  button?: string;
  icon?: string;
  section?: {
    title?: string;
    content: string;
    icon: string;
    link?: string;
  }[];
  id?: string;
  t: TFunction;
}

const MiddleBlock = ({ title, content, button, icon, section, id, t }: MiddleBlockProps) => {
  const renderInlineMarkup = (value: string) => ({ __html: t(value) });

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const navigateTo = (link?: string) => {
    if (!link) {
      return;
    }

    if (/^https?:\/\//i.test(link)) {
      window.open(link, "_blank", "noopener,noreferrer");
      return;
    }

    window.location.href = link;
  };

  const hasSection = typeof section === "object" && section.length > 0;
  const isServiceSection = id === "service";

  return (
    <MiddleBlockSection id={id}>
      <Slide direction="up" triggerOnce>
        {hasSection ? (
          <ServiceSectionOuter>
            <ServiceContentWrapper>
              <Title dangerouslySetInnerHTML={renderInlineMarkup(title)} />
              <Content dangerouslySetInnerHTML={renderInlineMarkup(content)} />
              <ServiceWrapper>
                <ServiceRow gutter={[24, 24]}>
                  {section.map((item, index) => {
                    return (
                      <Col key={index} lg={7} md={8} sm={12} xs={24}>
                        <ServiceCard onClick={() => navigateTo(item.link)}>
                          <ServiceLogoSlot $tight={isServiceSection}>
                            <SvgIcon
                              src={item.icon || icon || ""}
                              width="108px"
                              height="108px"
                            />
                          </ServiceLogoSlot>
                          <MinPara
                            $wide={isServiceSection}
                            dangerouslySetInnerHTML={renderInlineMarkup(item.content)}
                          />
                        </ServiceCard>
                      </Col>
                    );
                  })}
                </ServiceRow>
              </ServiceWrapper>
            </ServiceContentWrapper>
          </ServiceSectionOuter>
        ) : (
          <Row justify="center" align="middle">
            <ContentWrapper>
              <Col lg={24} md={24} sm={24} xs={24}>
                <Title dangerouslySetInnerHTML={renderInlineMarkup(title)} />
                <Content dangerouslySetInnerHTML={renderInlineMarkup(content)} />
                {button && (
                  <Button name="submit" onClick={() => scrollTo("mission")}>
                    {t(button)}
                  </Button>
                )}
              </Col>
            </ContentWrapper>
          </Row>
        )}
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
