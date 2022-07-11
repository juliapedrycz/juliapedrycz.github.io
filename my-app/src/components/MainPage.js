import React from 'react'
import styled from 'styled-components'
import { Counter } from './Countdown';
import { useMediaQuery } from 'react-responsive'

const DirectionsContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`

export const Page = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;  
    background-image: url("bck.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
`

const IFrame = styled.iframe`
    width: ${(props) => props.isMobile ? '160px' : '700px'};
    height: ${(props) => props.isMobile ? '200px' : '600px'}; 
`

const Label1 = styled.label`
  font-family: The Nautigal;
  font-size: ${(props) => props.isMobile ? '82px' : '128px' };
  margin-bottom: 10px;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Item = styled.div`
  
`

const Directions = (props) => {
  return (
    <Container>
    <Label1 isMobile={props.isMobile}>Dojazd:</Label1>
    <DirectionsContainer>
      <IFrame isMobile={props.isMobile} title="palac" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10239.725007947343!2d19.7884852!3d50.087574!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf6d50d0e9a981b54!2zUGHFgmFjIFJhZHppd2nFgsWCw7N3!5e0!3m2!1sen!2spl!4v1657302797272!5m2!1sen!2spl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></IFrame>
      <IFrame isMobile={props.isMobile} title="kosciol" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10239.725007947343!2d19.7884852!3d50.087574!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471658e8cdf49a43%3A0xcc36ecc6ab77441d!2zS2_Fm2Npw7PFgiDFm3cuIFJvZHppbnkgdyBCYWxpY2FjaA!5e0!3m2!1sen!2spl!4v1657303508389!5m2!1sen!2spl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></IFrame>
    </DirectionsContainer>
    </Container>
    )
}

export const MainPage = () => {
  
const isMobile = useMediaQuery({
    query: '(max-width: 1224px)'
})

  return (
    <Page>
      <Counter isMobile={isMobile}/>
      <Directions isMobile={isMobile}/>
    </Page>
    )
}