// src/components/Book.tsx
import React, { useState } from "react";
import styled from "styled-components";
import Page from "./Page";

interface BookProps {
  pages: string[];
}

const BookContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavigationButton = styled.button`
  margin: 10px;
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Book: React.FC<BookProps> = ({ pages }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <BookContainer>
      <Page content={pages[currentPage]} />
      <div>
        <NavigationButton
          onClick={handlePreviousPage}
          disabled={currentPage === 0}
        >
          Previous
        </NavigationButton>
        <NavigationButton
          onClick={handleNextPage}
          disabled={currentPage === pages.length - 1}
        >
          Next
        </NavigationButton>
      </div>
    </BookContainer>
  );
};

export default Book;
