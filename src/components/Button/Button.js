import React from "react";
import classes from "./Button.module.scss";
import IconArrow from "../../assets/images/icon-arrow.svg";

const Button = () => {
  return (
    <div className={classes.button__group}>
      <hr />
      <button type="submit" className={classes.button}>
        <img
          src={IconArrow}
          alt="Icon of an arrow"
          
        />
      </button>
    </div>
  );
};

export default Button;
