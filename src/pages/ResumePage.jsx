import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import SectionTitle from '../components/ui/SectionTitle';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

export default function ResumePage() {
  const basePath = import.meta.env.BASE_URL;
  const [numPages, setNumPages] = useState(null);

  return (
    <div className="min-h-screen bg-background px-6 py-10 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <SectionTitle>Resume</SectionTitle>
          <a
            href={`${basePath}Gabriel_Kiveu.pdf`}
            download
            className="bg-primary text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-primary-dark hover:-translate-y-0.5 transition-all duration-200"
          >
            Download PDF
          </a>
        </div>

        <Document
          file={`${basePath}Gabriel_Kiveu.pdf`}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          className="flex flex-col items-center gap-8"
        >
          {numPages && Array.from({ length: numPages }, (_, i) => (
            <div key={i} className="shadow-lg rounded-lg overflow-hidden">
              <Page
                pageNumber={i + 1}
                width={Math.min(800, window.innerWidth - 48)}
                renderTextLayer
                renderAnnotationLayer
              />
            </div>
          ))}
        </Document>
      </div>
    </div>
  );
}
