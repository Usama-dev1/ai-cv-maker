import CvTemplate2 from "./cvTemplates/CvTemplate2 ";
import MainForm from "./MainForm";
import CvTemplate3 from "./cvTemplates/CvTemplate3";
import useGeneratePDF from "../../src/hooks/useGeneratePDF";

import { useState } from "react";
import Popup from "./Popup";
import { BsStars } from "react-icons/bs";

const CvContainer = () => {
 const[open,setOpen]=useState(true)
 const handlePop=()=>{
  setOpen(!open)
 }
   const { cvContentRef, generatePDF } = useGeneratePDF();

  return (
    <>
      {/* Main Container Area */}
      <div className=" relative flex-grow bg-indigo-100">
        <Popup popOpen={open} popClose={handlePop} />
        <div className="container mx-auto px-4 py-8 h-full">
          <div
            id="formdown"
            className="flex flex-col-reverse md:flex-col sm:flex-col lg:flex-row h-full gap-8 ">
            {/* Form 1: CV Input Form */}
            <div className="w-full lg:w-1/2 shadow-full">
              {/* <CvTemplate2 /> */}
              {/* <CvTemplate2 cvContentRef={cvContentRef} /> */}
              <CvTemplate3 cvContentRef={cvContentRef} />
            </div>

            {/* Form 2: CV Display */}
            <div className="w-full lg:w-1/2 shadow-full">
              {/* <CvForm /> */}
              <MainForm />
              <div className=" flex justify-center my-3">
                <button
                  type="button"
                  onClick={handlePop}
                  className="text-lg mx-5 bg-gradient-to-r from-indigo-500 to-indigo-700 hover:opacity-70 text-white px-2 sm:px-4 sm:mx-10 hover:text-gray-300 font-medium py-2 shadow-md rounded-md">
                  <BsStars className="inline-block me-2" />
                  Enhance With AI
                </button>
              </div>
              <div className="flex justify-center mt-5">
                <button
                  onClick={generatePDF}
                  className="text-lg mx-5 my-2 bg-gradient-to-r from-blue-500 to-blue-700 hover:opacity-70 text-white px-2 sm:px-4 sm:mx-10 hover:text-gray-300 font-medium py-2 shadow-md rounded-md">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CvContainer;
