import React, { useState } from "react";
import styled from "styled-components";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.mjs`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  min-height: 100vh;
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;

  .react-pdf__Page__textContent {
    span {
      &:hover {
        background-color: #fff;
        color: #007bff;
      }
    }
  }
`;

const Navigation = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const NavButton = styled.span`
  cursor: pointer;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  user-select: none;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const PageIndicator = styled.span`
  font-size: 16px;
  color: #333;
`;

const PdfViewer: React.FC = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageWidth, setPageWidth] = useState<number | null>(null);

  function onPageLoadSuccess(page) {
    if (!pageWidth) {
      setPageWidth(page.originalWidth);
    }
  }

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  const scale = pageWidth ? (window.innerWidth * 0.4) / pageWidth : 1;

  return (
    <Container>
      <Document
        file={`/Benny_the_Bear.pdf`}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <PageContainer>
          <Page
            pageNumber={pageNumber}
            scale={scale}
            onLoadSuccess={onPageLoadSuccess}
          />
          {pageNumber + 1 <= numPages && (
            <Page
              pageNumber={pageNumber + 1}
              scale={scale}
              onLoadSuccess={onPageLoadSuccess}
            />
          )}
        </PageContainer>
      </Document>
      <Navigation>
        <NavButton
          onClick={() => pageNumber > 1 && setPageNumber(pageNumber - 2)}
          disabled={pageNumber <= 1}
        >
          &lt;
        </NavButton>
        <PageIndicator>
          Page {pageNumber} - {pageNumber + 1 <= numPages ? pageNumber + 1 : ""}{" "}
          of {numPages}
        </PageIndicator>
        <NavButton
          onClick={() =>
            pageNumber + 1 < numPages && setPageNumber(pageNumber + 2)
          }
          disabled={pageNumber + 1 >= numPages}
        >
          &gt;
        </NavButton>
      </Navigation>
    </Container>
  );
};

export default PdfViewer;
