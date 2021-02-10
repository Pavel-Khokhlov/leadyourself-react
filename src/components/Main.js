import React from "react";

import US1 from "../images/us1.jpg";
import US2 from "../images/us2.jpg";
import US3 from "../images/us3.jpg";
import US4 from "../images/us4.jpg";
import US5 from "../images/us5.jpg";
import Guide from "../images/logo3.jpg";
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
          <CardOffer src={US1} subtitle={`SMM`} button={`Ask`} />
          <CardOffer src={US2} subtitle={`Контент`} button={`Ask`} />
          <CardOffer src={US1} subtitle={`Cайт`} button={`Ask`} />
          <CardOffer src={US2} subtitle={`Фото`} button={`Ask`} />
          <CardOffer src={US1} subtitle={`Секс`} button={`Ask`} />
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
        <Article
          title={`Услуги SMM`}
          button={`Заказать`}
          classNameInfo={`article__info article__info_reverse`}
        >
          <ul className="article__text">
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
              <p className="paragraph">
                &#8226; составление раскладки на 19 постов
              </p>
            </li>
            <li>
              <p className="paragraph">консультация в течении недели</p>
            </li>
          </ul>
          <img src={Guide} alt="обложка" className="article__image" />
        </Article>
        <Article
          title={`Упаковка инстаграм`}
          button={`Заказать`}
          classNameInfo={`article__info`}
        >
          <img src={Guide} alt="обложка" className="article__image" />
          <ul className="article__text">
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
        <Article
          title={`Создание сайтов`}
          button={`Заказать`}
          classNameInfo={`article__info article__info_reverse`}
        >
          <ul className="article__text">
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
          <img src={Guide} alt="обложка" className="article__image" />
        </Article>
        <Article
          title={`Полиграфия`}
          button={`Заказать`}
          classNameInfo={`article__info`}
        >
          <img src={Guide} alt="обложка" className="article__image" />
          <ul className="article__text">
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
        <Article
          title={`Разбор полетов`}
          button={`Заказать`}
          classNameInfo={`article__info article__info_reverse`}
        >
          <ul className="article__text">
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
          <img src={Guide} alt="обложка" className="article__image" />
        </Article>
      </section>
    </main>
  );
};

export default Main;
