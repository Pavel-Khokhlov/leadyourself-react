import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

const GetGuidePopup = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setName("");
      setEmail("");
    }, 500);
  }, [props.isOpen]);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onGetGuide();
  };

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      title={`Заполните форму`}
      //button={props.button}
      onSubmit={handleSubmit}
    >
      <lable className="popup__lable">Имя :</lable>
      <input
        className="popup__input"
        type="text"
        name="name"
        placeholder="Введите имя"
        required
        autocomplete="off"
        value={name || ""}
        onChange={handleChangeName}
      />
      <span className="popup__error-name">{}</span>
      <lable className="popup__lable">E-mail :</lable>
      <input
        className="popup__input"
        type="email"
        name="email"
        placeholder="Введите E-mail"
        required
        autocomplete="off"
        value={email || ""}
        onChange={handleChangeEmail}
      />
      <span className="popup__error-email">{}</span>
    </PopupWithForm>
  );
};

export default GetGuidePopup;
