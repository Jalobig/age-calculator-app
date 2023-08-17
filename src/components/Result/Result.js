import React from "react";
import classes from "./Result.module.scss";

const Result = (props) => {

  function calcDate(date1, date2) {
    const date1_time_stamp = date1?.getTime();
    const date2_time_stamp = date2.getTime();

    const calc = new Date(date2_time_stamp - date1_time_stamp);
    //Retrieve the date, month and year
    const calcFormatTmp =
      calc.getDate() + "-" + (calc.getMonth() + 1) + "-" + calc.getFullYear();
    //Convert to an array and store
    const calcFormat = calcFormatTmp.split("-");
    //Subtract each member of our array from the default date
    const days_passed = Number(Math.abs(calcFormat[0]) - 1);
    const months_passed = Number(Math.abs(calcFormat[1]) - 1);
    const years_passed = Number(Math.abs(calcFormat[2]) - 1970);
    return [days_passed, months_passed + 1, years_passed];
  }

  const a = props.birthday,
    b = new Date(),
    difference = calcDate(a, b);

  const year = props.birthday?.getFullYear();
  const month = props.birthday?.getMonth();
  const day = props.birthday?.getDate();

  return (
    <div className={classes.result}>
      <h1 className={classes.result__text}>
        <span>{year === undefined ? "- -" : difference[2]}</span>{" "}
        {difference[2] === 1 ? "year" : "years"}
      </h1>
      <h1 className={classes.result__text}>
        <span>{month === undefined ? "- -" : difference[1]}</span>{" "}
        {difference[1] === 1 ? "month" : "months"}
      </h1>
      <h1 className={classes.result__text}>
        <span>{day === undefined ? "- -" : difference[0]}</span>{" "}
        {difference[0] === 1 ? "day" : "days"}
      </h1>
    </div>
  );
};

export default Result;
