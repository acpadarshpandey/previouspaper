import React, { useState } from 'react';
import pdf from "./resume.pdf"
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';



function MyApp() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file={pdf} 
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
<a href={pdf} download >Click to download</a>
    </div>
  );
}
export default MyApp;