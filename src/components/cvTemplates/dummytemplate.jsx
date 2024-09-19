import React from "react";
import { htmlToText } from "html-to-text";
import { useCvHook } from "../../hooks/useCvHook";
import useGeneratePDF from "../../hooks/useGeneratePDF";
import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";

const dummyTemplate = () => {
  const { cvData } = useCvHook();
  const { cvContentRef, generatePDF } = useGeneratePDF();


  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-5xl mx-auto">
      <div ref={cvContentRef} className="block">
        <h1 className="text-4xl font-bold mb-4">
          {cvData.fullName || "PAYTON WEBSTER"}
        </h1>
        <div className="flex justify-between items-center text-sm mb-6">
          <span className="flex items-center gap-2">
            <MdPhone />
            {cvData.phone || "+1-555-1212"}
          </span>
          <span className="flex items-center gap-2">
            <MdEmail />
            {cvData.email || "name@gmail.com"}
          </span>
          <span className="flex items-center gap-2">
            <FaLocationDot />
            {cvData.location || "New York, NYC"}
          </span>
        </div>
        <div className="grid grid-cols-[55%_45%] gap-4">
          <div>
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-1">EXPERIENCE</h2>
              <div className="w-full h-[3px] bg-black mb-1"></div>
              <p className="block text-lg font-extralight mb-1">
                {cvData.designation || "UI/UX Designer"}
              </p>
              <p className="block text-normal font-extrabold mb-1">
                {cvData.company || "Carroll"}
              </p>
              <div className="flex flex-row justify-start font-semibold space-x-9">
                <div className="text-sm flex flex-row items-center justify-around gap-2">
                  <SlCalender />
                  <span>
                    {formatDate(cvData.joinDate) || "Date - present"} to
                  </span>
                  <span>{formatDate(cvData.endDate) || "Date - present"}</span>
                </div>
                <div className="text-sm flex flex-row items-center justify-center gap-2">
                  <FaLocationDot className="text-sm" />
                  {cvData.companyLocation || "Location, NYC"}
                </div>
              </div>
              <p className="whitespace-pre-line break-words my-2">
                {htmlToText(
                  cvData.experience || "Your work experience details here."
                )}
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-1">EDUCATION</h2>
              <div className="w-full h-[3px] bg-black mb-2"></div>
              <div className="flex flex-row justify-start font-semibold space-x-9">
                <div className="text-sm flex flex-row items-center justify-around gap-2">
                  <SlCalender />
                  <span>{formatDate(cvData.educationStartDate) || "Year"}</span>
                  to
                  <span>{formatDate(cvData.educationEndDate) || "Year"}</span>
                </div>
                <div className="text-sm flex flex-row items-center justify-center gap-2">
                  <FaLocationDot className="text-sm" />
                  {cvData.educationLocation || "University, City"}
                </div>
              </div>
              <p className="whitespace-pre-line break-words mt-2">
                {htmlToText(cvData.education || "Your education details here.")}
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-lg font-semibold mb-2">STRENGTHS</h2>
              <div className="w-full h-[3px] bg-black mb-2"></div>
              <p className="whitespace-pre-line break-words">
                {htmlToText(cvData.strengths || "Your strengths here.")}
              </p>
            </section>
          </div>

          <div>
            <section className="mb-6">
              <h2 className="text-lg font-semibold mb-2">AWARDS</h2>
              <div className="w-full h-[3px] bg-black mb-2"></div>
              <p className="whitespace-pre-line break-words">
                {htmlToText(cvData.awards || "Your awards here.")}
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-lg font-semibold mb-2">ACHIEVEMENTS</h2>
              <div className="w-full h-[3px] bg-black mb-2"></div>
              <p className="whitespace-pre-line break-words">
                {htmlToText(cvData.achievements || "Your achievements here.")}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">CERTIFICATION</h2>
              <div className="w-full h-[3px] bg-black mb-2"></div>
              <div className="flex flex-row justify-start font-semibold space-x-9">
                <div className="text-sm flex flex-row items-center justify-center gap-2">
                  <SlCalender />
                  {formatDate(cvData.certificationDate) || "Certification Date"}
                </div>
              </div>
              <p className="whitespace-pre-line break-words mt-2">
                {htmlToText(
                  cvData.certification || "Your certification details here."
                )}
              </p>
            </section>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <button
          onClick={generatePDF}
          disabled={cvData.education.length === 0}
          className="px-10 text-lg font-bold text-white py-2 my-5 bg-light shadow-2xl rounded-xl">
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default dummyTemplate;
