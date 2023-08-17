import React, { useState } from "react";
import classes from "./Form.module.scss";
import Button from "../Button/Button";
import useInput from "../../hooks/useInput";

const year = new Date().getFullYear();
const Form = (props) => {
  const [dayTooFar, setDayTooFar] = useState(false);
  const dayInputValidate = (enteredValue) => {
    const trimmedValue = +enteredValue.trim();
    const test = trimmedValue !== "" && trimmedValue <= 31 && trimmedValue >= 1;
    return test;
  };
  const monthInputValidate = (enteredValue) => {
    const trimmedValue = +enteredValue.trim();
    const test = trimmedValue !== "" && trimmedValue <= 12 && trimmedValue >= 1;
    return test;
  };
  const yearInputValidate = (enteredValue) => {
    const trimmedValue = +enteredValue.trim();
    const test = trimmedValue !== "" && trimmedValue <= year;
    return test;
  };
  const {
    value: enteredDay,
    hasError: dayHasError,
    isValid: dayIsValid,
    valueChangeHandler: dayChangeHandler,
    onBlurInputHandler: dayOnBlurHandler,
    reset: dayReset,
  } = useInput(dayInputValidate);
  const {
    value: enteredMonth,
    hasError: monthHasError,
    isValid: monthIsValid,
    valueChangeHandler: monthChangeHandler,
    onBlurInputHandler: monthOnBlurHandler,
    reset: monthReset,
  } = useInput(monthInputValidate);
  const {
    value: enteredYear,
    hasError: yearHasError,
    isValid: yearIsValid,
    valueChangeHandler: yearChangeHandler,
    onBlurInputHandler: yearOnBlurHandler,
    reset: yearReset,
  } = useInput(yearInputValidate);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    setDayTooFar(false);
    if (!dayIsValid || !monthIsValid || !yearIsValid) {
      return;
    }
    const enteredDate = new Date(enteredYear, enteredMonth, enteredDay);

    if (enteredDay === "31") {
      if (
        enteredMonth === "2" ||
        enteredMonth === "02" ||
        enteredMonth === "4" ||
        enteredMonth === "04" ||
        enteredMonth === "6" ||
        enteredMonth === "06" ||
        enteredMonth === "8" ||
        enteredMonth === "08" ||
        enteredMonth === "10" ||
        enteredMonth === "12"
      ) {
        setDayTooFar(true);
        return;
      }
    }
    props.submitHandler(enteredDate);
    dayReset();
    monthReset();
    yearReset();
  };
  const dayClasses = `${classes.form__input} ${
    !dayHasError && !dayTooFar ? "" : classes.form__invalid
  }`;
  const monthClasses = `${classes.form__input} ${
    !monthHasError && !dayTooFar ? "" : classes.form__invalid
  }`;
  const yearClasses = `${classes.form__input} ${
    !yearHasError && !dayTooFar ? "" : classes.form__invalid
  }`;
  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <div className={classes.form__group}>
        <label
          className={`${classes.form__label} ${
            dayHasError || dayTooFar ? classes.error__label : ""
          }`}
        >
          Day
        </label>
        <input
          className={dayClasses}
          placeholder="DD"
          value={enteredDay}
          type="num"
          onChange={dayChangeHandler}
          onBlur={dayOnBlurHandler}
        />
        {dayHasError && enteredDay === "" && (
          <p className={classes.error__text}>This field is required</p>
        )}
        {((dayHasError && enteredDay !== "") || dayTooFar) && (
          <p className={classes.error__text}>Must be a valid day</p>
        )}
      </div>
      <div className={classes.form__group}>
        <label
          className={`${classes.form__label} ${
            monthHasError || dayTooFar ? classes.error__label : ""
          }`}
        >
          Month
        </label>
        <input
          className={monthClasses}
          placeholder="MM"
          value={enteredMonth}
          type="num"
          onChange={monthChangeHandler}
          onBlur={monthOnBlurHandler}
        />
        {monthHasError && enteredMonth === "" && (
          <p className={classes.error__text}>This field is required</p>
        )}
        {monthHasError && enteredMonth !== "" && (
          <p className={classes.error__text}>Must be a valid month</p>
        )}
      </div>
      <div className={classes.form__group}>
        <label
          className={`${classes.form__label} ${
            yearHasError || dayTooFar ? classes.error__label : ""
          }`}
        >
          Year
        </label>
        <input
          className={yearClasses}
          placeholder="YYYY"
          value={enteredYear}
          type="num"
          onChange={yearChangeHandler}
          onBlur={yearOnBlurHandler}
        />
        {yearHasError && enteredYear === "" && (
          <p className={classes.error__text}>This field is required</p>
        )}
        {yearHasError && enteredYear !== "" && (
          <p className={classes.error__text}>Must be in the past</p>
        )}
      </div>

      <Button />
    </form>
  );
};

export default Form;
