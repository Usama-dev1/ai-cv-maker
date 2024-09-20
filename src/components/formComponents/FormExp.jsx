import React, { useState, useCallback } from "react";
import DatePicker from "react-datepicker";
import { useCvHook } from "../hooks/../../hooks/useCvHook";
import "react-datepicker/dist/react-datepicker.css";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";


const FormExp = () => {
  const { cvData, setCvData } = useCvHook();

  const [data, setData] = useState([
    {
      designation: "",
      company: "",
      joinDate: null,
      endDate: null,
      companyLocation: "",
      experience: "",
    },
  ]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      setCvData((prevCvData) => ({
        ...prevCvData,
        experience: data,
      }));
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

  // const handleExp=()=>{
  //   console.log(data.experience)
  // }
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
        designation: "",
        company: "",
        joinDate: null,
        endDate: null,
        companyLocation: "",
        experience: "",
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
                htmlFor={`designation-${index}`}
                className="block text-sm font-medium">
                Designation:
              </label>
              <input
                type="text"
                id={`designation-${index}`}
                name="designation"
                value={field.designation}
                onChange={(e) => handleChangeInput(index, e)}
                placeholder="e.g. UI/UX Designer"
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor={`company-${index}`}
                className="block text-sm font-medium">
                Company:
              </label>
              <input
                type="text"
                id={`company-${index}`}
                name="company"
                value={field.company}
                onChange={(e) => handleChangeInput(index, e)}
                placeholder="e.g. Carroll"
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor={`joinDate-${index}`}
                className="block text-sm font-medium">
                Join Date:
              </label>
              <DatePicker
                id={`joinDate-${index}`}
                placeholderText="Enter DD/MM/YY"
                selected={field.joinDate}
                onChange={(date) => handleChangeDate(index, "joinDate", date)}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor={`endDate-${index}`}
                className="block text-sm font-medium">
                End Date:
              </label>
              <DatePicker
                id={`endDate-${index}`}
                selected={field.endDate}
                placeholderText="Enter DD/MM/YY"
                onChange={(date) => handleChangeDate(index, "endDate", date)}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor={`companyLocation-${index}`}
                className="block text-sm font-medium">
                Company Location:
              </label>
              <input
                type="text"
                id={`companyLocation-${index}`}
                name="companyLocation"
                value={field.companyLocation}
                onChange={(e) => handleChangeInput(index, e)}
                placeholder="e.g. New York, NYC"
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <div className="flex justify-between items-center">
                <label
                  htmlFor={`experience-${index}`}
                  className="block text-sm font-medium">
                  Experience:
                </label>
                {/* <button
                  type="button"
                  onClick={handleExp}
                  className="text-sm mx-5 bg-gradient-to-r from-indigo-500 to-indigo-700 hover:opacity-70 text-white px-2 sm:px-4 sm:mx-10 text-md hover:text-gray-300 font-medium py-2 shadow-md rounded-md">
                  <BsStars className="inline-block me-2" />
                  Generate With AI
                </button> */}
              </div>
              <textarea
                id={`experience-${index}`}
                name="experience"
                placeholder="Please Enter Your Experience Details"
                value={field.experience}
                onChange={(e) => handleChangeInput(index, e)}
                className="w-full px-3 py-2 border rounded"
                rows={7}
              />
              <div className="flex">
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

export default FormExp;
