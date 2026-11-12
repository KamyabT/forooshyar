"use client";

import ReactDatePicker from "react-multi-date-picker";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian from "react-date-object/calendars/gregorian";

interface DatePickerProps {
  value: string;
  onChange: (date: DateObject | null) => void;
  inputClass?: string;
}

export default function DatePicker({
  value,
  onChange,
  inputClass,
}: DatePickerProps) {
  const dateValue = value
    ? new DateObject({
        date: value,
        calendar: gregorian,
      }).convert(persian, persian_fa)
    : "";

  return (
    <ReactDatePicker
      calendar={persian}
      locale={persian_fa}
      value={dateValue}
      onChange={onChange}
      inputClass={inputClass}
      format="YYYY/MM/DD"
    />
  );
}