import React, { useState, useCallback } from "react";
import { useCvHook } from "../hooks/../../hooks/useCvHook";

const FormAchievements = () => {
  const { cvData, setCvData } = useCvHook();

  const [data, setData] = useState([
    {
      personalAchievements: "",
    },
  ]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      setCvData((prevCvData) => ({
        ...prevCvData,
        achievements: data,
      }));

      console.log("Updated cvData:", {
        ...cvData,
        achievements: { data },
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
        personalAchievements: "",
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
                  htmlFor={`personalAchievements-${index}`}
                  className="block text-sm font-medium">
                  Achievements
                </label>
                <input
                  type="text"
                  id={`personalAchievements-${index}`}
                  name="personalAchievements"
                  value={field.personalAchievements}
                  onChange={(e) => handleChangeInput(index, e)}
                  placeholder="Certificates...."
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <button
                type="button"
                onClick={addFields}
                className="px-10 text-lg  hover:bg-indigo-500 hover:text-gray-100 font-bold text-white py-2 bg-indigo-600 shadow-2xl rounded-xl">
                Add Achievements
              </button>

              {index !== 0 && (
                <button
                  type="button"
                  onClick={() => removeField(index)}
                  className="px-10 text-lg mx-10 hover:bg-red-500 hover:text-gray-100 font-bold text-white py-2 bg-red-600 shadow-2xl rounded-xl">
                  Remove Achievement
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
className="px-8 text-md hover:bg-green-600 hover:text-white font-medium text-green-800 py-2 bg-green-200 shadow-md rounded-md"> Update Cv
        </button>
      </div>
    </>
  );
};

export default FormAchievements;
