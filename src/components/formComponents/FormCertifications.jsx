import React, { useState, useCallback } from "react";
import DatePicker from "react-datepicker";
import { useCvHook } from "../hooks/../../hooks/useCvHook";

import "react-datepicker/dist/react-datepicker.css";

const FormCertification = () => {
  const { cvData, setCvData } = useCvHook();

  const [data, setData] = useState([
    {
      certificationStartDate: null,
      certificationEndDate: null,
      certificationInstitution: "",
      certificationDetails: "",
    },
  ]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      setCvData((prevCvData) => ({
        ...prevCvData,
        certification: data,
      }));

      console.log("Updated cvData:", {
        ...cvData,
        certification: { data },
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
        certificationStartDate: null,
        certificationEndDate: null,
        certificationInstitution: "",
        certificationDetails: "",
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
                htmlFor={`certificationStartDate-${index}`}
                className="block text-sm font-medium">
                Date:
              </label>
              <DatePicker
                id={`certificationStartDate-${index}`}
                selected={field.certificationStartDate}
                onChange={(date) =>
                  handleChangeDate(index, "certificationStartDate", date)
                }
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            {/* <div className="space-y-2">
              <label
                htmlFor={`certificationEndDate-${index}`}
                className="block text-sm font-medium">
                End Date:
              </label>
              <DatePicker
                id={`certificationEndDate-${index}`}
                selected={field.certificationEndDate}
                onChange={(date) =>
                  handleChangeDate(index, "certificationEndDate", date)
                }
                className="w-full px-3 py-2 border rounded"
              />
            </div> */}
            <div className="space-y-2">
              <label
                htmlFor={`certificationInstitution-${index}`}
                className="block text-sm font-medium">
                Certification Institution:
              </label>
              <input
                type="text"
                id={`certificationInstitution-${index}`}
                name="certificationInstitution"
                value={field.educationLocation}
                onChange={(e) => handleChangeInput(index, e)}
                placeholder="e.g. New York, NYC"
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <label
                htmlFor={`certificationDetails-${index}`}
                className="block text-sm font-medium">
                Education Details:
              </label>
              <textarea
                id={`certification-${index}`}
                name="certificationDetails"
                value={field.certificationDetails}
                onChange={(e) => handleChangeInput(index, e)}
                className="w-full px-3 py-2 border rounded"
              />
              <button
                type="button"
                onClick={addFields}
                className="px-10 text-lg hover:bg-indigo-500 hover:text-gray-100 font-bold text-white py-2 bg-indigo-600 shadow-2xl rounded-xl">
                Add certification
              </button>

              {index !== 0 && (
                <button
                  type="button"
                  onClick={() => removeField(index)}
                  className="px-10 text-lg mx-10 hover:bg-red-500 hover:text-gray-100 font-bold text-white py-2 bg-red-600 shadow-2xl rounded-xl">
                  Remove certification
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

export default FormCertification;
