import React, { useState, useCallback } from "react";
import DatePicker from "react-datepicker";
import { useCvHook } from "../hooks/../../hooks/useCvHook"
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";


import "react-datepicker/dist/react-datepicker.css";

const FormEudcation = () => {
  const { cvData, setCvData } = useCvHook();

  const [data, setData] = useState([
    {
      educationStartDate: null,
      educationEndDate: null,
      educationLocation: "",
      educationDetails: "",
    },
  ]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      setCvData((prevCvData) => ({
        ...prevCvData,
        education: data,
      }));

      console.log("Updated cvData:", {
        ...cvData,
        education: {data},
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

  const handleChangeDate = (index, name, date) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData[index][name] = date;
      return newData;
    });
  };

  const addFields = () => {
    setData((prevData) => [
      ...prevData,
      {
        educationStartDate: null,
        educationEndDate: null,
        educationLocation: "",
        educationDetails: "",
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
              <label
                htmlFor={`educationStartDate-${index}`}
                className="block text-sm font-medium">
                Start Date:
              </label>
              <DatePicker
                id={`educationStartDate-${index}`}
                selected={field.educationStartDate}
                onChange={(date) =>
                  handleChangeDate(index, "educationStartDate", date)
                }
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor={`educationEndDate-${index}`}
                className="block text-sm font-medium">
                End Date:
              </label>
              <DatePicker
                id={`educationEndDate-${index}`}
                selected={field.educationEndDate}
                onChange={(date) =>
                  handleChangeDate(index, "educationEndDate", date)
                }
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor={`educationLocation-${index}`}
                className="block text-sm font-medium">
                Education Address:
              </label>
              <input
                type="text"
                id={`educationLocation-${index}`}
                name="educationLocation"
                value={field.educationLocation}
                onChange={(e) => handleChangeInput(index, e)}
                placeholder="e.g. New York, NYC"
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <label
                htmlFor={`educationDetails-${index}`}
                className="block text-sm font-medium">
                Educational Degree:
              </label>
              <textarea
                id={`experience-${index}`}
                name="educationDetails"
                value={field.educationDetails}
                onChange={(e) => handleChangeInput(index, e)}
                className="w-full px-3 py-2 border rounded"
              />
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

export default FormEudcation;
