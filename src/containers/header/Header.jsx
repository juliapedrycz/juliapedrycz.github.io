import React from 'react';
// import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';
import { Counter } from '../../components/Countdown';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Julia i Filip</h1>
      <p>Serdecznie zapraszamy na nasz ślub, który odbędzie się 1 pażdziernika o 15 w kościele Swiętej Rodziny w Balicach </p>

      {/* <div className="gpt3__header-content__input"> */}
      {/*  <input type="email" placeholder="Your Email Address" /> */}
      {/*  <button type="button">Get Started</button> */}
      {/* </div> */}

      {/* <div className="gpt3__header-content__people"> */}
      {/*  <img src={people} /> */}
      {/*  <p>1,600 people requested access a visit in last 24 hours</p> */}
      {/* </div> */}
    </div>

    <div className="gpt3__header-image">
      <Counter />
    </div>
  </div>
);

export default Header;
