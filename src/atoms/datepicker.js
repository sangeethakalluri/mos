import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";

const StaticDatePicker = () => {
  const [date, changeDate] = useState(new Date());

  // prettier-ignore
  return (
    <>
      <DatePicker
        autoOk
        className="form-control datePicker"
        variant="inline"
        openTo="date"
        format="dd/MM/yyyy"
        value={date}
        onChange={changeDate}
      />
    </>
  );
};

export default StaticDatePicker;