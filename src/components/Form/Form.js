import React from "react";
import classes from "./Form.module.scss";
import Button from "../Button/Button";

const Form = () => {
  return (
    <form className={classes.form}>
      <div className={classes.form__group}>
        <label className={classes.form__label}>Day</label>
        <input className={classes.form__input} placeholder="DD" />
      </div>
      <div className={classes.form__group}>
        <label className={classes.form__label}>Month</label>
        <input className={classes.form__input} placeholder="MM" />
      </div>
      <div className={classes.form__group}>
        <label className={classes.form__label}>Year</label>
        <input className={classes.form__input} placeholder="YYYY" />
      </div>

      <Button />
    </form>
  );
};

export default Form;
