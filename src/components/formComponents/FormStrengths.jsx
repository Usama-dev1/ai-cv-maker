import React, { useState, useCallback } from "react";
import { useCvHook } from "../hooks/../../hooks/useCvHook";


const FormStrengths = () => {
  const { cvData, setCvData } = useCvHook();

  const [data, setData] = useState([
    {
      personalStrengths: "",
    },
  ]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      setCvData((prevCvData) => ({
        ...prevCvData,
        strengths: data,
      }));

      console.log("Updated cvData:", {
        ...cvData,
        strengths: { data },
      });
    },
    [data, cvData, setCvData]
  );

  const handleChangeInput = (index, e) => {
    const { name, value } = e.target;
    setData((prevData) => {
      const newData = [...prevData];
      newData[index][name] = value;
      return newData;
    });
  };

  const addFields = () => {
    setData((prevData) => [
      ...prevData,
      {
        personalStrengths: "",
      },
    ]);
  };

  const removeField = (index) => {
    setData((prevData) => prevData.filter((_, i) => i !== index));
  };

  return (
    <>
      <div>
        {data.map((field, index) => (
          <div key={index} className="space-y-4">
            <div className="space-y-2">
              <div className="space-y-2">
                <label
                  htmlFor={`personalStrengths-${index}`}
                  className="block text-sm font-medium">
                  Strengths
                </label>
                <input
                  type="text"
                  id={`personalStrengths-${index}`}
                  name="personalStrengths"
                  value={field.personalStrengths}
                  onChange={(e) => handleChangeInput(index, e)}
                  placeholder="Communication,Networking,Coding"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <button
                type="button"
                onClick={addFields}
                className="px-10 text-lg hover:bg-indigo-500 hover:text-gray-100 font-bold text-white py-2 bg-indigo-600 shadow-2xl rounded-xl">
                Add Strengths
              </button>

              {index !== 0 && (
                <button
                  type="button"
                  onClick={() => removeField(index)}
                  className="px-10 text-lg mx-10 hover:bg-red-500 hover:text-gray-100 font-bold text-white py-2 bg-red-600 shadow-2xl rounded-xl">
                  Remove Strength
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="px-8 text-md hover:bg-green-600 hover:text-white font-medium text-green-800 py-2 bg-green-200 shadow-md rounded-md">
          Update Cv
        </button>
      </div>
    </>
  );
};

export default FormStrengths;
