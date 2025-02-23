import React from "react";
import styled from "styled-components";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { ReactComponent as MapPinIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as PhoneIcon } from "feather-icons/dist/icons/phone.svg";
import { ReactComponent as MailIcon } from "feather-icons/dist/icons/mail.svg";

const Container = styled.div`
  position: relative;
`;

const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 5rem 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: #1a202c;
  text-align: center;
  margin-bottom: 3rem;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ContactTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #0088ff;
  margin-bottom: 1.5rem;
`;

const ContactInfo = styled.div`
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoRow = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  
  svg {
    width: 20px;
    height: 20px;
    margin-right: 1rem;
    color: #0088ff;
    flex-shrink: 0;
  }
`;

const InfoText = styled.p`
  color: #4a5568;
  line-height: 1.6;
  margin: 0;
`;

const Form = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #0088ff;
  margin-bottom: 1.5rem;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #0088ff;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  margin-bottom: 1rem;
  
  &:focus {
    outline: none;
    border-color: #0088ff;
  }
`;

const SubmitButton = styled.button`
  background: #0088ff;
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;
  
  &:hover {
    background: #0077ee;
  }
`;

export default () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <Title>联系我们</Title>
          
          <ContactGrid>
            <ContactCard>
              <ContactTitle>中国总部</ContactTitle>
              <ContactInfo>
                <InfoRow>
                  <MapPinIcon />
                  <InfoText>
                    3/F Bldg A 170 Kangyi Rd, Liheng Administrative Area, Qingxi Town,
                    Dongguan City, Guangdong Province, China 523657
                  </InfoText>
                </InfoRow>
                <InfoRow>
                  <PhoneIcon />
                  <InfoText>
                    Tel: (86-769)87922496<br />
                    Fax: (86-769)87922491
                  </InfoText>
                </InfoRow>
                <InfoRow>
                  <MailIcon />
                  <InfoText>bruce@linkworldgroup.com</InfoText>
                </InfoRow>
              </ContactInfo>
            </ContactCard>
            
            <ContactCard>
              <ContactTitle>美国办事处</ContactTitle>
              <ContactInfo>
                <InfoRow>
                  <MapPinIcon />
                  <InfoText>
                    20 Park Street, 20E, Alhambra, CA91801
                  </InfoText>
                </InfoRow>
                <InfoRow>
                  <PhoneIcon />
                  <InfoText>Tel: +1 626 905 0398</InfoText>
                </InfoRow>
                <InfoRow>
                  <MailIcon />
                  <InfoText>lily@linkworldgroup.com</InfoText>
                </InfoRow>
              </ContactInfo>
            </ContactCard>
          </ContactGrid>

          <Form>
            <FormTitle>在线留言</FormTitle>
            <FormGrid>
              <Input type="text" placeholder="您的姓名" />
              <Input type="email" placeholder="电子邮箱" />
              <Input type="tel" placeholder="联系电话" />
              <Input type="text" placeholder="公司名称" />
            </FormGrid>
            <TextArea placeholder="请输入您的留言" />
            <SubmitButton type="submit">提交信息</SubmitButton>
          </Form>
        </Content>
      </Container>
      <Footer />
    </>
  );
}; 