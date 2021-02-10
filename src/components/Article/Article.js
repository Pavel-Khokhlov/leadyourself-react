import React from "react";
import Button from "../Button/Button";

import "./article.css";

const Article = (props) => {
  return (
    <article className="article">
      <h3 className="title title__article">{props.title}</h3>
      <div className={props.classNameInfo}>{props.children}</div>
      <Button btnTitle={props.button} btnType={`button`}/>
    </article>
  );
};

export default Article;
