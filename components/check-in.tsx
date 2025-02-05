"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import { BsCalendar } from "react-icons/bs";

import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css";

export const CheckIn = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);

  return (
    <div className="relative flex items-center justify-end h-full">
      <div className="absolute z-10 pr-8">
        <div>
          <BsCalendar size={16} className="text-accent" />
        </div>
      </div>
      <DatePicker
        className="w-full h-full"
        selected={startDate}
        placeholderText="Check-in"
        onChange={(date) => setStartDate(date as Date)}
      />
    </div>
  );
};
