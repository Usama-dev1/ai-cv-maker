import React from "react";
import { htmlToText } from "html-to-text";
import { useCvHook } from "../../hooks/useCvHook";

const CvTemplate2 = ({ cvContentRef }) => {
  const { cvData } = useCvHook();

  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div
      ref={cvContentRef}
      className="bg-white p-8 flex-wrap shadow-md max-w-5xl mx-auto">
      <div className="block">
        <h1 className="text-4xl font-bold mb-4">
          {cvData.personal.fullname || "PAYTON WEBSTER"}
        </h1>
        <div className="flex flex-col sm:flex-row items-start justify-start sm:space-x-7 sm:items-center text-sm mb-6">
          <span className="flex ">
            <span className="font-bold me-1">Phone No:</span>
            {cvData.personal.phone || "+1-555-1212"}
          </span>
          <span className="flex me-1">
            <span className="font-bold me-1">Email:</span>
            {cvData.personal.email || "name@gmail.com"}
          </span>
          <span className="flex">
            <span className="font-bold me-1 ">Address:</span>
            {cvData.personal.location || "New York, NYC"}
          </span>
        </div>
        <div className="grid gird-cols sm:grid-cols-[55%_45%] gap-4">
          <div>
            <section className="mb-6">
              <h2 className="text-base text-center font-semibold mb-2">
                EXPERIENCE
              </h2>
              <div className="w-full h-[3px] bg-black mb-1"></div>
              {cvData.experience.map((data, index) => (
                <div key={`experience-${index}`}>
                  <p className="block text-sm font-medium mb-1">
                    {data.designation || "UI/UX Designer"}
                  </p>
                  <p className="block text-normal font-extrabold mb-1">
                    {data.company || "Carroll"}
                  </p>
                  <div className="flex flex-col justify-start items-start font-semibold gap-2  ">
                    <div className="text-sm flex flex-row items-center justify-around gap-2">
                      <span>
                        {formatDate(data.joinDate) || "Date - Start"}{" "}
                        <span>to</span>
                      </span>
                      <span>{formatDate(data.endDate) || "Date - End"}</span>
                    </div>
                    <div className="text-sm flex flex-row items-center justify-center gap-2">
                      {data.companyLocation || "Location, NYC"}
                    </div>
                  </div>
                  <p className="whitespace-pre-line mb-2 pb-2 border-b-[0.5px] border-dotted border-b-gray-500 w-full break-words">
                    {htmlToText(
                      data.experience || "Your work experience details here."
                    )}
                  </p>
                </div>
              ))}
            </section>

            <section className="mb-6">
              <h2 className="text-base text-center font-semibold mb-2">
                EDUCATION
              </h2>
              <div className="w-full h-[3px] bg-black mb-2"></div>
              {cvData.education.map((data, index) => (
                <div key={`education-${index}`}>
                  <div className="flex flex-col justify-start items-start font-semibold my-2">
                    <div className="text-sm flex flex-row items-center justify-around gap-2">
                      <span>Date:</span>
                      <span>
                        {formatDate(data.educationStartDate) || "Year"}
                      </span>
                      to
                      <span>{formatDate(data.educationEndDate) || "Year"}</span>
                    </div>
                    <div className="text-sm flex flex-row text-nowrap items-center justify-center gap-2">
                      <span>Address:</span>
                      {data.educationLocation || "University, City"}
                    </div>
                  </div>
                  <p className="whitespace-pre-line mb-2 pb-2 border-b-[0.5px] border-dotted border-b-gray-500 w-full break-words">
                    {htmlToText(
                      data.educationDetails || "Your education details here."
                    )}
                  </p>
                </div>
              ))}
            </section>

            <section className="mb-6">
              <h2 className="text-base text-center font-semibold mb-2">
                STRENGTHS
              </h2>
              <div className="w-full h-[3px] bg-black mb-2"></div>
              {cvData.strengths.map((data, index) => (
                <ul key={`strengths-${index}`}>
                  <li className="whitespace-pre-line mb-2 pb-2 border-b-[0.5px] border-dotted border-b-gray-500 w-full break-words">
                    {data.personalStrengths || "Your strengths here."}
                  </li>
                </ul>
              ))}
            </section>
          </div>

          <div>
            <section className="mb-6">
              <h2 className="text-base text-center font-semibold mb-2">
                AWARDS
              </h2>
              <div className="w-full h-[3px] bg-black mb-2"></div>
              {cvData.awards.map((data, index) => (
                <ul
                  key={`awards-${index}`}
                  className="list-number flex justify-start mx-5">
                  <li className="whitespace-pre-line mb-2 pb-2 border-b-[0.5px] border-dotted border-b-gray-500 w-full break-words">
                    <span className="text-xl"></span>
                    {htmlToText(data.personalAwards || "Your Awards here.")}
                  </li>
                </ul>
              ))}
            </section>
            <section className="mb-6">
              <h2 className="text-base text-center font-semibold mb-2">
                ACHIEVEMENTS
              </h2>
              <div className="w-full h-[3px] bg-black mb-2"></div>
              {cvData.achievements.map((data, index) => (
                <ul
                  key={`achievements-${index}`}
                  className="list-number flex justify-start mx-5">
                  <li className="whitespace-pre-line mb-2 pb-2 border-b-[0.5px] border-dotted border-b-gray-500 w-full break-words">
                    <span className="text-xl"></span>
                    {htmlToText(
                      data.personalAchievements || "Your Awards here."
                    )}
                  </li>
                </ul>
              ))}
            </section>

            <section>
              <h2 className="text-base text-center font-semibold mb-2">
                CERTIFICATION
              </h2>
              <div className="w-full h-[3px] bg-black mb-2"></div>
              {cvData.certification.map((data, index) => (
                <div key={`certification-${index}`}>
                  <div className="flex flex-col justify-start items-start font-semibold my-2">
                    <div className="text-sm flex flex-row items-center justify-around gap-2">
                      <span>
                        <span className="me-1">Date:</span>
                        {formatDate(data.certificationStartDate) || "Year"}
                      </span>
                    </div>
                    <div className="text-sm flex flex-row items-center justify-center gap-2">
                      <span>Institute:</span>
                      {data.certificationInstitution || "University, Institute"}
                    </div>
                  </div>
                  <p className="whitespace-pre-line mb-2 pb-2 border-b-[0.5px] border-dotted border-b-gray-500 w-full break-words">
                    {htmlToText(
                      data.certificationDetails ||
                        "Your certification details here."
                    )}
                  </p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvTemplate2;
