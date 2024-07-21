// src/App.tsx
import React, { useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import PdfViewer from "./components/PdfViewer";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <PdfViewer />
    </>
  );
};

export default App;
