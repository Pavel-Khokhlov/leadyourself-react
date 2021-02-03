import React from "react";
import Button from "../Button/Button";

const CardOffer = (props) => {
  return (
    <li className="offer__item">
      <img src={props.src} alt="иконка услуги" className="offer__img" />
      <p className="offer__subtitle">{props.subtitle}</p>
      <Button btnTitle={props.button} btnType={`button`} />
    </li>
  );
};

export default CardOffer;
