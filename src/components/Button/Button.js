import React from "react";

import "./button.css";

const Button = (props) => {
  return (
    <button type={props.btnType} className="button" onClick={props.onClick}>
      {props.btnTitle}
    </button>
  );
};

export default Button;
