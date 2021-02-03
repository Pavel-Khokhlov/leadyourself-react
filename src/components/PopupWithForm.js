import React from "react";

const PopupWithForm = (props) => {
  const popupOpenClassName = `popup popup__guide ${
    props.isOpen ? "popup_opened" : ""
  }`;

  return (
    <section className={popupOpenClassName} onClick={props.onClose}>
      <form
        className="popup__container"
        method="post"
        noValidate
        onClick={(e) => e.stopPropagation()}
        onSubmit={props.onSubmit}
      >
        <button
          type="button"
          className="popup__close-btn"
          aria-label="Вернуться на страницу"
          onClick={props.onClose}
        />
        <h2 className="popup__title">{props.title}</h2>
        {props.children}
        <button
          type="submit"
          className="button button__popup"
          aria-label="скачать описание"
          onClick={props.onCLose}
        >
          Скачать
        </button>
      </form>
    </section>
  );
};

export default PopupWithForm;
