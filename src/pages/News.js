import React from "react";
import styled from "styled-components";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

const Container = styled.div`
  position: relative;
`;

const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 5rem 2rem;
`;

const TabsContainer = styled.div`
  display: flex;
  margin-bottom: 3rem;
  border-bottom: 1px solid #e2e8f0;
`;

const Tab = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${props => props.active ? '#0088ff' : '#4a5568'};
  background: transparent;
  border: none;
  border-bottom: 2px solid ${props => props.active ? '#0088ff' : 'transparent'};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #0088ff;
  }
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const NewsItem = styled.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
`;

const NewsImage = styled.div`
  height: 240px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NewsContent = styled.div`
  padding: 1.5rem;
`;

const NewsCategory = styled.span`
  color: #0088ff;
  font-size: 0.875rem;
  font-weight: 500;
`;

const NewsDate = styled.span`
  color: #718096;
  font-size: 0.875rem;
  margin-left: 1rem;
`;

const NewsTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
  margin: 1rem 0;
  line-height: 1.4;
`;

const NewsExcerpt = styled.p`
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const NewsLink = styled.a`
  color: #0088ff;
  font-weight: 500;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  
  &:hover {
    text-decoration: underline;
  }
  
  &:after {
    content: '→';
    margin-left: 0.5rem;
  }
`;

export default () => {
  const [activeTab, setActiveTab] = React.useState("all");

  const newsCategories = [
    { id: "all", name: "全部" },
    { id: "company", name: "公司新闻" },
    { id: "industry", name: "行业动态" },
    { id: "product", name: "产品资讯" }
  ];

  const newsItems = [
    {
      category: "company",
      date: "2024-03-20",
      title: "公司成功参展2024年香港春季电子展",
      excerpt: "我司携最新8K HDMI产品线亮相香港春季电子展，获得众多客户关注...",
      image: "http://www.linkworldgroup.com/uploads/201817542/small/exhibition-news53267954587.jpg"
    },
    {
      category: "product",
      date: "2024-03-15",
      title: "新一代8K HDMI线缆正式投产",
      excerpt: "采用最新光电转换技术，支持48Gbps超高带宽传输...",
      image: "http://www.linkworldgroup.com/uploads/201817542/small/new-product-news53267954587.jpg"
    },
    {
      category: "industry",
      date: "2024-03-10",
      title: "HDMI 2.1技术标准更新发布",
      excerpt: "HDMI联盟发布最新技术标准，新增多项功能特性...",
      image: "http://www.linkworldgroup.com/uploads/201817542/small/industry-news53267954587.jpg"
    }
  ];

  const filteredNews = activeTab === "all" 
    ? newsItems 
    : newsItems.filter(item => item.category === activeTab);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <TabsContainer>
            {newsCategories.map(category => (
              <Tab
                key={category.id}
                active={activeTab === category.id}
                onClick={() => setActiveTab(category.id)}
              >
                {category.name}
              </Tab>
            ))}
          </TabsContainer>

          <NewsGrid>
            {filteredNews.map((item, index) => (
              <NewsItem key={index}>
                <NewsImage>
                  <img src={item.image} alt={item.title} />
                </NewsImage>
                <NewsContent>
                  <div>
                    <NewsCategory>
                      {newsCategories.find(cat => cat.id === item.category).name}
                    </NewsCategory>
                    <NewsDate>{item.date}</NewsDate>
                  </div>
                  <NewsTitle>{item.title}</NewsTitle>
                  <NewsExcerpt>{item.excerpt}</NewsExcerpt>
                  <NewsLink href="#">阅读更多</NewsLink>
                </NewsContent>
              </NewsItem>
            ))}
          </NewsGrid>
        </Content>
      </Container>
      <Footer />
    </>
  );
}; 