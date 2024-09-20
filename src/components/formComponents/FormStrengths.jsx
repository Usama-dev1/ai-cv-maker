import React, { useState, useCallback } from "react";
import { useCvHook } from "../hooks/../../hooks/useCvHook";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";



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
                className="my-2 px-4 text-md hover:bg-indigo-400-400 hover:text-opacity-50 font-medium text-white py-2 bg-indigo-600 shadow-md rounded-md">
                <FaPlusCircle className="inline me-1" />
                Add
              </button>

              {index !== 0 && (
                <button
                  type="button"
                  onClick={() => removeField(index)}
                  className="my-2 mx-5 px-4 text-md hover:bg-red-400 hover:text-opacity-50 font-medium text-white py-2 bg-red-500 shadow-md rounded-md">
                  <FaMinusCircle className="inline me-1" />
                  Delete
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button
          type="submit"
          onClick={handleSubmit}
          className="px-8 mt-10 text-md hover:bg-green-600 hover:text-white font-medium text-green-800 py-2 bg-green-200 shadow-md rounded-md">
          {" "}
          Update Cv
        </button>
      </div>
    </>
  );
};

export default FormStrengths;
