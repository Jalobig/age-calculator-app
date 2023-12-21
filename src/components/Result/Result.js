import React from "react";
import classes from "./Result.module.scss";
import AnimatedNumbers from "react-animated-numbers";

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
      <div className={classes.result__row}>
        <h1 className={classes["result__text--num"]}>
          {year === undefined ? (
            "- -"
          ) : (
            <AnimatedNumbers animateToNumber={difference[2]} />
          )}
          </h1>
          <h1 className={classes.result__text}>{difference[2] === 1 ? "year" : "years"}</h1>
      </div>
      <div className={classes.result__row}>
        <h1 className={classes["result__text--num"]}>
          {month === undefined ? (
            "- -"
          ) : (
            <AnimatedNumbers animateToNumber={difference[1]} />
          )}
          </h1>
          <h1 className={classes.result__text}>{difference[1] === 1 ? "month" : "months"}</h1>
      </div>
      <div className={classes.result__row}>
        <h1 className={classes["result__text--num"]}>
          {day === undefined ? (
            "- -"
          ) : (
            <AnimatedNumbers animateToNumber={difference[0]} />
          )}
          </h1>
          <h1 className={classes.result__text}>{difference[0] === 1 ? "day" : "days"}</h1>
      </div>
      
    </div>
  );
};

export default Result;
