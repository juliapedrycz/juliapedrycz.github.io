import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive'

const Container = styled.div`
  display: flex;
  flex-direction: ${(props)=> props.isMobile ? 'column' : 'row' };
  align-items: center;
  padding: 2rem;
`

const WhatGPT3 = () => {

  const isMobile = useMediaQuery({
    query: '(max-width: 1224px)'});

return(
  
  <Container isMobile={isMobile} id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <div className="directions-container">
        <Feature title="Kościół" text="ul. Akacjowa 24, Balice" />
        <br />
        <iframe title="kosciol" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10239.725007947343!2d19.7884852!3d50.087574!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471658e8cdf49a43%3A0xcc36ecc6ab77441d!2zS2_Fm2Npw7PFgiDFm3cuIFJvZHppbnkgdyBCYWxpY2FjaA!5e0!3m2!1sen!2spl!4v1657303508389!5m2!1sen!2spl" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </div>
    <div className="gpt3__whatgpt3-feature">
      <div className="directions-container">
        <Feature title="Pałac" text="ul. Krakowska 1, Balice" />
        <br />
        <iframe title="palac" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10239.725007947343!2d19.7884852!3d50.087574!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf6d50d0e9a981b54!2zUGHFgmFjIFJhZHppd2nFgsWCw7N3!5e0!3m2!1sen!2spl!4v1657302797272!5m2!1sen!2spl" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </div>
  </Container>
)};

export default WhatGPT3;
