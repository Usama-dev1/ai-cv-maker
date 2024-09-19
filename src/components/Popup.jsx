import React, { useState, useCallback, useEffect } from "react";
import { BsStars } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { useCvHook } from "./../hooks/useCvHook";

const Popup = ({ popOpen, popClose }) => {
  const { cvData, data, setCvData, enterPrompt, loading } = useCvHook();
  const [localCvData, setLocalCvData] = useState(cvData);
  const handleInputChange = useCallback((e) => {
    const { id, value } = e.target;
    setLocalCvData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  }, []);

  const handleCall = useCallback(async () => {
    const cvDataString = JSON.stringify(localCvData);
    let prompt = `I am applying for the position of "${localCvData.jobType}". Here is the job description and requirements:

${localCvData.jobDesc}

My current CV is in JSON format as follows:
${cvDataString}

Please improve the content of my CV specifically for this job application. Tailor my experiences, skills, and achievements to match the job requirements. Highlight relevant qualifications and enhance the content to make me a strong candidate for this specific role. 

Important: Maintain the exact same JSON structure and keys. Only modify the content within each field. Do not add or remove any fields from the JSON structure. 

Respond with the improved CV in the exact same JSON format. Do not include any explanations or additional text in your response, only the JSON object.`;

    try {
      await enterPrompt(prompt);

      if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
        let apiOut = data.candidates[0].content.parts[0].text;
        apiOut = apiOut
          .replace(/```json\n?/, "")
          .replace(/\n?```$/, "")
          .trim();
        let newCv = JSON.parse(apiOut);
        setLocalCvData(newCv);
        setCvData(newCv);
      } else {
        console.error("Unexpected API response structure");
      }
    } catch (error) {
      console.error("Error processing API response:", error);
    }
  }, [localCvData, data, enterPrompt, setCvData]);

  const handleSubmit = useCallback(
    async(e) => {
      e.preventDefault();
      await handleCall();
      console.log(localCvData)
    },
    [handleCall]
  );

  return (
    <>
      <div
        className={`${
          popOpen ? "hidden" : "absolute"
        } inset-0 bg-black bg-opacity-50 flex items-start justify-center z-10 px-3`}>
        <div className="relative w-full flex flex-col items-center justify-center mt-5 sm:w-[50rem] h-[40rem] bg-indigo-300 rounded-md">
          <button onClick={popClose} className="absolute right-2 top-1">
            <IoClose className="text-3xl text-white" />
          </button>
          <div className="w-full px-4 py-2">
            <form
              onSubmit={handleSubmit}
              className="bg-slate-200 mt-10 p-6 rounded-lg shadow-xl">
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2 sm:col-span-2">
                  <label
                    htmlFor="jobType"
                    className="block text-sm font-medium">
                    Job Title (Position you're applying for)
                  </label>
                  <input
                    type="text"
                    id="jobType"
                    required
                    value={localCvData.jobType || ""}
                    onChange={handleInputChange}
                    placeholder="e.g. Senior Web Developer, UX Designer..."
                    className="w-full sm:w-[20rem] px-3 py-2 border rounded"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="jobDesc"
                    className="block text-sm font-medium">
                    Job Description and Requirements
                  </label>
                  <textarea
                    id="jobDesc"
                    value={localCvData.jobDesc || ""}
                    onChange={handleInputChange}
                    placeholder="Paste the full job description and requirements here"
                    className="w-full px-3 py-2 border rounded"
                    rows={10}
                  />
                </div>
              </div>
              <div className="text-center my-2">
                <button
                  type="submit"
                  className="text-lg mx-5 bg-gradient-to-r from-indigo-500 to-indigo-700 hover:opacity-70 text-white px-2 sm:px-4 sm:mx-10 hover:text-gray-300 font-medium py-2 shadow-md rounded-md">
                  <BsStars className="inline-block me-2" />
                  {loading ? "Loading CV..." : "Improve CV for Job"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
