import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { ReactComponent as DownloadIcon } from "feather-icons/dist/icons/download.svg";
import { ReactComponent as SearchIcon } from "feather-icons/dist/icons/search.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingRow = tw.div`flex flex-col items-center`;
const Heading = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center`;
const Description = tw.p`mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 max-w-xl text-center`;

const SearchContainer = tw.div`relative mt-8 max-w-lg mx-auto`;
const SearchInput = tw.input`w-full px-6 py-4 rounded-full border-2 border-gray-300 focus:border-primary-500 focus:outline-none`;
const SearchButton = tw.button`absolute right-0 top-0 mt-3 mr-4`;

const CategoriesContainer = tw.div`mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8`;
const Category = styled.div`
  ${tw`bg-white rounded-lg shadow-md p-8 transition-transform duration-300 hover:transform hover:scale-105`}
`;
const CategoryIcon = tw.div`w-16 h-16 mx-auto mb-4`;
const CategoryTitle = tw.h3`text-xl font-bold text-center mb-4`;
const CategoryDescription = tw.p`text-gray-600 text-center`;

const DownloadsSection = tw.div`mt-24`;
const DownloadGrid = tw.div`mt-8 grid grid-cols-1 md:grid-cols-2 gap-8`;
const DownloadCard = styled.div`
  ${tw`bg-white rounded-lg shadow-md p-6 flex items-center justify-between`}
`;
const DownloadInfo = tw.div``;
const DownloadTitle = tw.h4`font-bold mb-2`;
const DownloadSize = tw.span`text-sm text-gray-600`;
const DownloadButton = styled.a`
  ${tw`flex items-center px-4 py-2 rounded bg-primary-500 text-white hover:bg-primary-700 transition duration-300`}
`;

const FAQSection = tw.div`mt-24`;
const FAQ = styled.div`
  ${tw`mt-8`}
`;
const FAQQuestion = styled.button`
  ${tw`w-full py-4 px-6 text-left bg-gray-100 hover:bg-gray-200 transition duration-300 rounded-lg focus:outline-none`}
  ${props => props.active && tw`bg-primary-500 text-white`}
`;
const FAQAnswer = styled.div`
  ${tw`p-6 bg-white`}
  display: ${props => (props.active ? "block" : "none")};
`;

export default () => {
  const [activeQuestion, setActiveQuestion] = React.useState(null);
  const [searchQuery, setSearchQuery] = React.useState("");

  const categories = [
    {
      title: "产品手册",
      description: "查看详细的产品规格、安装指南和使用说明"
    },
    {
      title: "常见问题",
      description: "快速查找常见技术问题的解决方案"
    },
    {
      title: "技术支持",
      description: "获取专业的技术支持和咨询服务"
    }
  ];

  const downloads = [
    {
      title: "HDMI 2.1线缆用户手册",
      size: "2.5 MB",
      url: "/downloads/hdmi-manual.pdf"
    },
    {
      title: "USB4线缆规格说明",
      size: "1.8 MB",
      url: "/downloads/usb4-specs.pdf"
    },
    {
      title: "产品认证文件",
      size: "3.2 MB",
      url: "/downloads/certifications.pdf"
    },
    {
      title: "安装指南",
      size: "1.5 MB",
      url: "/downloads/installation-guide.pdf"
    }
  ];

  const faqs = [
    {
      question: "如何选择合适的HDMI线缆？",
      answer: "选择HDMI线缆时需要考虑以下因素：1. 使用场景（如家庭影院、游戏等）2. 传输距离 3. 所需带宽 4. 设备兼容性..."
    },
    {
      question: "为什么我的设备无法达到8K分辨率？",
      answer: "可能的原因包括：1. 线缆不支持48Gbps带宽 2. 源设备或显示设备不支持8K 3. 线缆过长导致信号衰减..."
    },
    {
      question: "如何正确安装光纤HDMI线缆？",
      answer: "安装光纤HDMI线缆时请注意：1. 不要过度弯折 2. 注意源端和显示端的方向 3. 确保接头完全插入..."
    }
  ];

  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <Content>
          <HeadingRow>
            <Heading>技术支持中心</Heading>
            <Description>
              为您提供全方位的技术支持和资源下载服务
            </Description>
          </HeadingRow>

          <SearchContainer>
            <SearchInput 
              type="text" 
              placeholder="搜索技术支持内容..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <SearchButton>
              <SearchIcon tw="w-5 h-5 text-gray-500" />
            </SearchButton>
          </SearchContainer>

          <CategoriesContainer>
            {categories.map((category, index) => (
              <Category key={index}>
                <CategoryTitle>{category.title}</CategoryTitle>
                <CategoryDescription>{category.description}</CategoryDescription>
              </Category>
            ))}
          </CategoriesContainer>

          <DownloadsSection>
            <Heading>资源下载</Heading>
            <DownloadGrid>
              {downloads.map((item, index) => (
                <DownloadCard key={index}>
                  <DownloadInfo>
                    <DownloadTitle>{item.title}</DownloadTitle>
                    <DownloadSize>{item.size}</DownloadSize>
                  </DownloadInfo>
                  <DownloadButton href={item.url}>
                    <DownloadIcon tw="w-4 h-4 mr-2" />
                    下载
                  </DownloadButton>
                </DownloadCard>
              ))}
            </DownloadGrid>
          </DownloadsSection>

          <FAQSection>
            <Heading>常见问题</Heading>
            <FAQ>
              {faqs.map((faq, index) => (
                <div key={index} tw="mb-4">
                  <FAQQuestion
                    active={activeQuestion === index}
                    onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                  >
                    {faq.question}
                  </FAQQuestion>
                  <FAQAnswer active={activeQuestion === index}>
                    {faq.answer}
                  </FAQAnswer>
                </div>
              ))}
            </FAQ>
          </FAQSection>
        </Content>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
}; 