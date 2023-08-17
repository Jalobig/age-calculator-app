import React from "react";
import classes from "./Result.module.scss";

const Result = () => {
  return (
    <div className={classes.result}>
      <h1 className={classes.result__text}>
        <span>- -</span> years
      </h1>
      <h1 className={classes.result__text}>
        <span>- -</span> months
      </h1>
      <h1 className={classes.result__text}>
        <span>- -</span> days
      </h1>
    </div>
  );
};

export default Result;
