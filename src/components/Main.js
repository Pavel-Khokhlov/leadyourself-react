import React from "react";
//import HeaderImg from "../images/liza7.jpg";
import LeadLogo from "../images/lead.png";
import Guide from "../images/guide.png";

const Main = (props) => {
  return (
    <main className="main">
      {/* LEAD */}
      <div className="anchor" id="lead"></div>
      <section className="lead">
        <div className="lead__square"></div>
        <div className="lead__info">
          <div className="lead__title">
            <img src={LeadLogo} alt="логотип" className="lead__logo" />
            <h1 className="title title__lead">ead yourself</h1>
          </div>
          <p className="subtitle subtitle_lead">Визуальное агенство</p>
        </div>
        <div className="lead__text">
          <p className="paragraph paragraph_lead">
            «Наша команда занимается продвижением проектов в социальных сетях.
            Никакой теории, только реальный опыт, свой успешный блог и
            инфобизнес»
          </p>
        </div>
      </section>
      {/* GUIDE */}
      <div className="anchor" id="guide"></div>
      <section className="guide">
        <h3 className="title title__main">Пособие по Инстамиру</h3>
        <img src={Guide} alt="руководство инстаграм" className="guide__image" />
        <button type="button" className="button button__main" onClick={props.onGetGuideClick}>
          Получить
        </button>
      </section>
      {/* SERVICES */}
      <div className="anchor" id="uslugi"></div>
      <section className="uslugi">
        <h3 className="title title__main">Другие услуги</h3>
        <ul className="uslugi__list">
          <li className="uslugi__item">
            <button type="button" className="button button__main button__smm">
              Заказать
            </button>
            <p className="subtitle subtitle__main">Продвижение</p>
          </li>
          <li className="uslugi__item">
            <button type="button" className="button button__main button__inst">
              Заказать
            </button>
            <p className="subtitle subtitle__main">Контент</p>
          </li>
          <li className="uslugi__item">
            <button type="button" className="button button__main button__www">
              Заказать
            </button>
            <p className="subtitle subtitle__main">Создание сайтов</p>
          </li>
          <li className="uslugi__item">
            <button type="button" className="button button__main button__foto">
              Заказать
            </button>
            <p className="subtitle subtitle__main">Организация фотосессии</p>
          </li>
        </ul>
        <button type="button" className="button button__main">
          Хотите связаться с нами?
        </button>
      </section>
    </main>
  );
};

export default Main;
