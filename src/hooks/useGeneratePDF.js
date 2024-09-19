import { useRef } from "react";
import html2pdf from "html2pdf.js";

const useGeneratePDF = () => {
  const cvContentRef = useRef(null);

  const generatePDF = () => {
    const element = cvContentRef.current;

   const options = {
     margin: [1, 1, 1, 1], 
     filename: "cv.pdf",
     image: { type: "jpeg", quality: 0.98 },
     html2canvas: { scale: 2 },
     jsPDF: { unit: "cm", format: "A4", orientation: "portrait" },
   };

    html2pdf().from(element).set(options).save();
  };


  return { cvContentRef, generatePDF };
};

export default useGeneratePDF;
