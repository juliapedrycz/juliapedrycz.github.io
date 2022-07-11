import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text, recipe }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
        <p>{recipe}</p>
      </div>
    </div>
  </div>
);

export default Article;
