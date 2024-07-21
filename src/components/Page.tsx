// src/components/Page.tsx
import React from "react";
import styled from "styled-components";

interface PageProps {
  content: string;
}

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
`;

const PageContent = styled.div`
  background-color: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

const Page: React.FC<PageProps> = ({ content }) => {
  return (
    <PageContainer>
      <PageContent>{content}</PageContent>
    </PageContainer>
  );
};

export default Page;
