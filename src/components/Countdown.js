import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive'

const Label1 = styled.label`
  font-family: The Nautigal;
  font-size: ${(props) => props.isMobile ? '76px' : '128px' };
  background-color: #f3ec78;
  background-image: linear-gradient(89.97deg, #d26558 1.84%, #F49867 102.67%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;
`

const Label2 = styled.label`
  font-family: The Nautigal;
  font-size: ${(props) => props.isMobile ? '64px' : '64px' };
  background-color: #f3ec78;
  background-image: linear-gradient(89.97deg, #d26558 1.84%, #F49867 102.67%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Counter = () => {

    const isMobile = useMediaQuery({
      query: '(max-width: 1224px)'
  })

    const [days, hours, minutes, seconds] = useCountdown(new Date("Oct 1, 2022 17:00:00"));

    return (
        <Container>    
            <Label1 isMobile={isMobile}>Do ślubu zostało:</Label1>
            <Label2 isMobile={isMobile}> {days}d {hours}h  {minutes}m {seconds}s</Label2>
        </Container>
    )
}


const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};
