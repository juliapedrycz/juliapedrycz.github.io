import React from 'react';
import Article from '../../components/article/Article';
import { drink1, drink2, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">U nas każdy <br /> może zostać barmanem</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={drink1} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={drink2} date="dodaj jakieś różne rzeczy" text="Drink nr 1" />
        <Article imgUrl={blog03} date="dodaj jakieś różne rzeczy" text="Drink nr 2" />
        <Article imgUrl={blog04} date="dodaj jakieś różne rzeczy" text="Drink nr 3" />
        <Article imgUrl={blog05} date="dodaj jakieś różne rzeczy" text="Drink nr 4" />
      </div>
    </div>
  </div>
);

export default Blog;
