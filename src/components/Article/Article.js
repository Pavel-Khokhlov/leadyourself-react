import React from "react";
import Button from "../Button/Button";

import './article.css';

const Article = (props) => {
  return (
    <article className="article">
      <div className="article__info">
        {props.children}
        <Button btnTitle={props.button}/>
      </div>
      <img src={props.src} alt="обложка" className="article__image" />
    </article>
  );
};

export default Article;
