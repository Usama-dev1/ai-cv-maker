import React, { useState } from "react";
import FormExp from "./formComponents/FormExp";
import FormPersonal from "./formComponents/FormPersonal";
import FormEducation from "./formComponents/FormEducation"
import FormStrengths from "./formComponents/FormStrengths"
import FormAwards from "./formComponents/FormAwards";
import FormAchievements from "./formComponents/FormAchievements";
import FormCertification from "./formComponents/FormCertifications";
import { FaArrowRight } from "react-icons/fa";

const MainForm = () => {
  const [formCat, setFormCat] = useState(0);

  const handleFormNextCat = () =>
    setFormCat(formCat <= 6 ? formCat + 1 : formCat);
  const handleFormPrevCat = () =>
    setFormCat(formCat > 0 ? formCat - 1 : formCat);
  const cats = [
    "Personal Info",
    "Experience",
    "Education",
    "Strengths",
    "Awards",
    "Achievements",
    "Certifications",
  ];

  return (
    <>
      <div className="flex font-semibold justify-around py-2 my-2 bg-white shadow-full">
        <button
          onClick={handleFormPrevCat}
          className="px-3 text-md hover:bg-green-600 hover:text-white font-medium text-green-800 py-2 bg-green-200 shadow-md rounded-md"
          disabled={formCat === 0}>
          <FaArrowRight className="text-xs inline-block me-2 rotate-180" />
          Previous
        </button>

        {cats.map((cat, index) =>
          index === formCat ? (
            <div
              className="text-base sm:text-lg mt-3 font-bold md:text-xl lg:text-2xl mx-2"
              key={index}>
              {cat}
            </div>
          ) : (
            ""
          )
        )}

        <button
          onClick={handleFormNextCat}
          className="px-5 text-md hover:bg-green-600 hover:text-white font-medium text-green-800 py-2 bg-green-200 shadow-md rounded-md"
          disabled={formCat === 6}>Next
          <FaArrowRight className="text-xs inline-block ms-2" />
        </button>
      </div>

      <form className="bg-white  p-6 shadow-full">
        <div className="grid grid-cols-1 gap-6">
          {/* Personal Information */}
          {formCat === 0 && (
            <div className="space-y-2 sm:col-span-2">
              <FormPersonal />
            </div>
          )}

          {/* Work Experience */}
          {formCat === 1 && (
            <>
              <div className="space-y-2 sm:col-span-2">
                <FormExp />
              </div>
            </>
          )}

          {/* Education */}
          {formCat === 2 && (
            <>
              <div className="space-y-2 sm:col-span-2">
                <FormEducation />
              </div>
            </>
          )}

          {/* Strengths */}
          {formCat === 3 && (
            <div className="space-y-2 sm:col-span-2">
              <FormStrengths />
            </div>
          )}

          {/* Awards */}
          {formCat === 4 && (
            <div className="space-y-2 sm:col-span-2">
              <FormAwards />
            </div>
          )}

          {/* Achievements*/}
          {formCat === 5 && (
            <div className="space-y-2 sm:col-span-2">
              <FormAchievements />
            </div>
          )}

          {/* Certification */}
          {formCat === 6 && (
            <>
              <div className="space-y-2 sm:col-span-2">
                <FormCertification />
              </div>
            </>
          )}
        </div>
      </form>
    </>
  );
};

export default MainForm;
