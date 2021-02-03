import React from "react";

import SMM from "../images/logo2.jpg";
import Guide from "../images/logo3.jpg";
import Cloud from "../images/cloud.png";
import CardOffer from "./CardOffer/CardOffer";
import Article from "./Article/Article";
import Button from "./Button/Button";

import "./CardOffer/cardOffer.css";
import "./main.css";

const Main = (props) => {
  return (
    <main className="main">
      {/* LEAD */}
      <div className="anchor" id="lead"></div>
      <section className="lead">
        <img src={Cloud} alt="облако" className="lead__cloud" />
        <div className="lead__info">
          <h1 className="title title__lead">Lead yourself</h1>
          <p className="subtitle subtitle_lead">Визуальное агенство</p>
        </div>
        <div className="lead__text">
          <p className="paragraph paragraph__lead">
            «Наша команда занимается продвижением проектов в социальных сетях.
            Никакой теории, только реальный опыт, свой успешный блог и
            инфобизнес»
          </p>
        </div>
      </section>
      {/* offer */}
      <div className="anchor" id="offer"></div>
      <section className="offer">
        <h3 className="title title__main">
          выбрать <span className="title__main_color">услугу</span>
        </h3>
        <ul className="offer__list">
          <CardOffer src={SMM} subtitle={`Услуга SMM`} button={`Подробнее`} />
          <CardOffer src={SMM} subtitle={`Контент`} button={`Подробнее`} />
          <CardOffer
            src={SMM}
            subtitle={`Создание сайтов`}
            button={`Подробнее`}
          />
          <CardOffer src={SMM} subtitle={`Фотосессия`} button={`Подробнее`} />
        </ul>
      </section>
      {/* GUIDE */}
      <div className="anchor" id="guide"></div>
      <section className="guide">
        <h3 className="title title__main">
          Пособие <span className="title__main_color">по Инстамиру</span>
        </h3>
        <img src={Guide} alt="руководство инстаграм" className="guide__image" />
        <Button
          btnType={`button`}
          onClick={props.onGetGuideClick}
          btnTitle={`Получить`}
        />
      </section>
      {/* ARTICLES */}
      <div className="anchor" id="articles"></div>
      <section className="main__article">
        <Article src={Guide} button={`Купить`}>
          <h3 className="title title__article">Упаковка инстаграма</h3>
          <ul>
            <li>
              <p className="paragraph">полный разбор страницы</p>
            </li>
            <li>
              <p className="paragraph">разбор схемы постинга</p>
            </li>
            <li>
              <p className="paragraph">подбор цветовой палитры</p>
            </li>
            <li>
              <p className="paragraph">создание шапки профиля</p>
            </li>
            <li>
              <p className="paragraph">отбор и обработка фотографий</p>
            </li>
            <li>
              <p className="paragraph">оформление актуальных историй</p>
            </li>
            <li>
              <p className="paragraph">составление раскладки на 19 постов</p>
            </li>
            <li>
              <p className="paragraph">консультация в течении недели</p>
            </li>
          </ul>
        </Article>
        <Article src={Guide} button={`Купить`}>
          <h3 className="title title__article">Упаковка инстаграма</h3>
          <ul>
            <li>
              <p className="paragraph">полный разбор страницы</p>
            </li>
            <li>
              <p className="paragraph">разбор схемы постинга</p>
            </li>
            <li>
              <p className="paragraph">подбор цветовой палитры</p>
            </li>
            <li>
              <p className="paragraph">создание шапки профиля</p>
            </li>
            <li>
              <p className="paragraph">отбор и обработка фотографий</p>
            </li>
            <li>
              <p className="paragraph">оформление актуальных историй</p>
            </li>
            <li>
              <p className="paragraph">составление раскладки на 19 постов</p>
            </li>
            <li>
              <p className="paragraph">консультация в течении недели</p>
            </li>
          </ul>
        </Article>
        <Article src={Guide} button={`Купить`}>
          <h3 className="title title__article">Упаковка инстаграма</h3>
          <ul>
            <li>
              <p className="paragraph">полный разбор страницы</p>
            </li>
            <li>
              <p className="paragraph">разбор схемы постинга</p>
            </li>
            <li>
              <p className="paragraph">подбор цветовой палитры</p>
            </li>
            <li>
              <p className="paragraph">создание шапки профиля</p>
            </li>
            <li>
              <p className="paragraph">отбор и обработка фотографий</p>
            </li>
            <li>
              <p className="paragraph">оформление актуальных историй</p>
            </li>
            <li>
              <p className="paragraph">составление раскладки на 19 постов</p>
            </li>
            <li>
              <p className="paragraph">консультация в течении недели</p>
            </li>
          </ul>
        </Article>
        <Article src={Guide} button={`Купить`}>
          <h3 className="title title__article">Упаковка инстаграма</h3>
          <ul>
            <li>
              <p className="paragraph">полный разбор страницы</p>
            </li>
            <li>
              <p className="paragraph">разбор схемы постинга</p>
            </li>
            <li>
              <p className="paragraph">подбор цветовой палитры</p>
            </li>
            <li>
              <p className="paragraph">создание шапки профиля</p>
            </li>
            <li>
              <p className="paragraph">отбор и обработка фотографий</p>
            </li>
            <li>
              <p className="paragraph">оформление актуальных историй</p>
            </li>
            <li>
              <p className="paragraph">составление раскладки на 19 постов</p>
            </li>
            <li>
              <p className="paragraph">консультация в течении недели</p>
            </li>
          </ul>
        </Article>
      </section>
    </main>
  );
};

export default Main;
