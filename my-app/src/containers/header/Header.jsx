import React, { useEffect, useState } from 'react';
// import people from '../../assets/people.png';
import './header.css';

const getReturnValues = (countDown) => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime(),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const Header = () => {
  const [days, hours, minutes, seconds] = useCountdown(new Date('Oct 1, 2022 16:00:00'));

  return (
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
        <div className="counter-container">
          <h1 className="gradient__text">Do ślubu zostało </h1>
          <h3 className="gradient__text">  {days}d {hours}h {minutes}m {seconds}s </h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
