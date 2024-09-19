import { htmlToText } from "html-to-text";
import { useCvHook } from "../../hooks/useCvHook";
import useGeneratePDF from "../../hooks/useGeneratePDF";
const CvTemplate1 = () => {
  const { cvData } = useCvHook();
  const { cvContentRef, generatePDF} = useGeneratePDF();
  return (
    <>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4"></div>
        <div ref={cvContentRef}>
          <h1 className="text-4xl font-bold mb-4">
            {cvData.fullName || "PAYTON WEBSTER"}
          </h1>
          <div className="flex flex-wrap justify-between text-sm mb-6">
            <span>{cvData.phone || "+1-555-1212"}</span>
            <span>{cvData.email || "name@gmail.com"}</span>
            <span>{cvData.location || "New York, NYC"}</span>
          </div>

          <section className="mb-6">
            <h2 className="text-lg font-semibold border-gray-300 mb-5 text-left">
              EXPERIENCE
            </h2>
            <div className="w-full h-[0.5px] bg-black"></div>

            <p className="whitespace-pre-line break-words">
              {htmlToText(cvData.experience)}
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold border-gray-300 mb-2">
              EDUCATION
            </h2>
            <div className="w-full h-[0.5px] bg-black"></div>

            <p className="whitespace-pre-line break-words">
              {htmlToText(cvData.education)}
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold border-gray-300 mb-2">
              STRENGTHS
            </h2>
            <div className="w-full h-[0.5px] bg-black"></div>

            <p className="whitespace-pre-line break-words">
              {htmlToText(cvData.strengths)}
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold border-gray-300 mb-2">
              AWARDS
            </h2>
            <div className="w-full h-[0.5px] bg-black"></div>

            <p className="whitespace-pre-line break-words">
              {htmlToText(cvData.awards)}
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold border-gray-300 mb-2">
              ACHIEVEMENTS
            </h2>
            <div className="w-full h-[0.5px] bg-black"></div>

            <p className="whitespace-pre-line break-words">
              {htmlToText(cvData.achievements)}
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold border-gray-300 mb-2">
              CERTIFICATION
            </h2>
            <div className="w-full h-[0.5px] bg-black"></div>

            <p className="whitespace-pre-line break-words">
              {htmlToText(cvData.certification)}
            </p>
          </section>
        </div>
        <div className="flex justify-center">
          <button
            onClick={generatePDF}
            disabled={cvData.education.length === 0}
            className="px-10 text-lg font-bold text-white py-2 my-5 bg-light shadow-2xl rounded-xl">
            Download PDF
          </button>
        </div>
      </div>
    </>
  );
};

export default CvTemplate1;
