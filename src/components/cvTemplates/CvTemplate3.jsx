import React from "react";
import { htmlToText } from "html-to-text";
import { useCvHook } from "../../hooks/useCvHook";

const CvTemplate3 = ({ cvContentRef }) => {
  const { cvData} = useCvHook();

  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
  };

  return (
    <div className="bg-white p-8 max-w-4xl mx-auto">
      <div ref={cvContentRef} className="font-sans">
        <header className="mb-4">
          <h1 className="text-3xl font-bold mb-2">
            {cvData.personal.fullname || "PAYTON WEBSTER"}
          </h1>
          <div className="text-sm">
            <p>{cvData.personal.phone || "+1-555-1212"}</p>
            <p>{cvData.personal.email || "name@gmail.com"}</p>
            <p>{cvData.personal.location || "New York, NYC"}</p>
          </div>
        </header>

        <section className="mb-6">
          <h2 className="text-xl font-bold mb-1 pb-2 border-b-2 border-gray-300">
            EXPERIENCE
          </h2>
          {cvData.experience.map((data, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-bold">
                {data.designation || "UI/UX Designer"}
              </h3>
              <p className="font-semibold">{data.company || "Carroll"}</p>
              <p className="text-sm">
                {formatDate(data.joinDate) || "Start Date"} -{" "}
                {formatDate(data.endDate) || "End Date"}
              </p>
              <p className="text-sm mb-2">
                {data.companyLocation || "Location, NYC"}
              </p>
              <p className="whitespace-pre-line">
                {htmlToText(
                  data.experience || "Your work experience details here."
                )}
              </p>
            </div>
          ))}
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2 pb-2 border-b-2 border-gray-300">
            EDUCATION
          </h2>
          {cvData.education.map((data, index) => (
            <div key={index} className="mb-2">
              <h3 className="font-bold">{data.educationDetails || "Degree"}</h3>
              <p className="font-semibold">
                {data.educationLocation || "University, City"}
              </p>
              <p className="text-sm">
                {formatDate(data.educationStartDate) || "Start Year"} -{" "}
                {formatDate(data.educationEndDate) || "End Year"}
              </p>
            </div>
          ))}
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold mb-1 pb-2 border-b-2 border-gray-300">
            SKILLS
          </h2>
          <ul>
            {cvData.strengths.map((data, index) => (
              <li key={index}>
                {data.personalStrengths || "Your skills here."}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold pb-2 mb-1 border-b-2 border-gray-300">
            CERTIFICATIONS
          </h2>
          {cvData.certification.map((data, index) => (
            <div key={index} className="mb-2">
              <p className="font-semibold">
                {data.certificationDetails || "Certification Name"}
              </p>
              <p className="text-sm">
                {data.certificationInstitution || "Institution"}
              </p>
              <p className="text-sm">
                {formatDate(data.certificationStartDate) ||
                  "Certification Date"}
              </p>
            </div>
          ))}
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold mb-1 1 pb-2 border-b-2 border-gray-300">
            AWARDS & ACHIEVEMENTS
          </h2>
          <ul>
            {cvData.awards.map((data, index) => (
              <li key={index} className="mb-3">
                {htmlToText(data.personalAwards)}
              </li>
            ))}
            {cvData.achievements.map((data, index) => (
              <li key={index}>
                {htmlToText(
                  data.personalAchievements || "Your achievement here."
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="flex justify-center mt-5">
        {/* <button
          onClick={generatePDF}
          className="px-8 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition duration-300">
          <FaDownload className="inline-block me-2" />
          Download PDF
        </button> */}
      </div>
    </div>
  );
};

export default CvTemplate3;
