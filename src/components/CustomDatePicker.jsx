import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomHeaderDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  const renderCustomHeader = ({
    date,
    changeYear,
    changeMonth,
    decreaseMonth,
    increaseMonth,
    decreaseYear,
    increaseYear,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
    prevYearButtonDisabled,
    nextYearButtonDisabled,
  }) => (
    <div className="flex justify-between mb-2">
      <div>
        <button
          type="button" // Prevent default form submission
          onClick={(e) => {
            e.preventDefault();
            decreaseYear();
          }}
          disabled={prevYearButtonDisabled}
          className="mx-1">
          {"<<"}
        </button>
        <button
          type="button" // Prevent default form submission
          onClick={(e) => {
            e.preventDefault();
            decreaseMonth();
          }}
          disabled={prevMonthButtonDisabled}
          className="mx-1">
          {"<"}
        </button>
      </div>
      <div>
        {date.toLocaleString("default", { month: "long" })} {date.getFullYear()}
      </div>
      <div>
        <button
          type="button" // Prevent default form submission
          onClick={(e) => {
            e.preventDefault();
            increaseMonth();
          }}
          disabled={nextMonthButtonDisabled}
          className="mx-1">
          {">"}
        </button>
        <button
          type="button" // Prevent default form submission
          onClick={(e) => {
            e.preventDefault();
            increaseYear();
          }}
          disabled={nextYearButtonDisabled}
          className="mx-1">
          {">>"}
        </button>
      </div>
    </div>
  );

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      renderCustomHeader={renderCustomHeader}
      dateFormat="MM/yyyy"
      showMonthYearPicker
    />
  );
};

export default CustomDatePicker;
