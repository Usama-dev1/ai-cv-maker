import { useCvHook } from "../hooks/../../hooks/useCvHook";
import React, { useState } from "react";

const FormPersonal = () => {
  const { cvData, setCvData } = useCvHook();

  const [data, setData] = useState([
    { fullname: "", phone: "", email: "", location: "" },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCvData((prevCvData) => ({
      ...prevCvData,
      personal: data,
    }));
  };

  return (
    <>
      <div className="space-y-2 sm:col-span-2">
        <label htmlFor="fullName" className="block text-sm font-medium">
          Full Name:
        </label>
        <input
          value={data.fullName}
          onChange={handleInputChange}
          type="text"
          name="fullname"
          id="fullName"
          placeholder="e.g. Payton Webster"
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="phone" className="block text-sm font-medium">
          Phone:
        </label>
        <input
          value={data.phone}
          onChange={handleInputChange}
          name="phone"
          type="number"
          id="phone"
          placeholder="e.g. +1-555-1212"
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium">
          Email:
        </label>
        <input
          value={data.email}
          onChange={handleInputChange}
          name="email"
          type="email"
          id="email"
          placeholder="e.g. name@gmail.com"
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="location" className="block text-sm font-medium">
          Location:
        </label>
        <input
          type="text"
          value={data.location}
          onChange={handleInputChange}
          name="location"
          placeholder="e.g. New York, NYC"
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div>
        <div className="flex justify-center mt-10">
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-8 mt-10 text-md hover:bg-green-600 hover:text-white font-medium text-green-800 py-2 bg-green-200 shadow-md rounded-md">
            {" "}
            Update Cv
          </button>
        </div>
      </div>
    </>
  );
};

export default FormPersonal;
