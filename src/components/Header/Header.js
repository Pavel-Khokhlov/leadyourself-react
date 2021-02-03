import React from "react";
import Instagram from "../../images/instagram.png";
import Telegram from "../../images/telegram2.png";

import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <ul className="header__links">
        <li>
          <a href="#guide" className="header__link">
            Guide
          </a>
        </li>
        <li>
          <a href="#article" className="header__link">
            Услуги
          </a>
        </li>
        <li>
          <a href="#contacts" className="header__link">
            Контакты
          </a>
        </li>
        <li>
          <a href="#contacts" className="header__link">
            <img
              src={Instagram}
              alt="иконка инстаграм"
              className="header__icon"
            />
          </a>
        </li>
        <li>
          <a href="#contacts" className="header__link">
            <img
              src={Telegram}
              alt="иконка телеграм"
              className="header__icon"
            />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
