import React from 'react'
import styled from 'styled-components'
import { Counter } from './Countdown';

const DirectionsContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 80vw;
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
    width: 70%;
    height: 100%; 
    margin-left: 10px;
`

const Label1 = styled.label`
  font-family: The Nautigal;
  font-size: 128px;
  margin-bottom: 10px;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 70vh;
`

const Item = styled.div`
  
`

const Directions = () => {
  return (
    <Container>
    <Label1>Dojazd:</Label1>
    <DirectionsContainer>
      <IFrame title="palac" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10239.725007947343!2d19.7884852!3d50.087574!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf6d50d0e9a981b54!2zUGHFgmFjIFJhZHppd2nFgsWCw7N3!5e0!3m2!1sen!2spl!4v1657302797272!5m2!1sen!2spl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></IFrame>
      <IFrame title="kosciol" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10239.725007947343!2d19.7884852!3d50.087574!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471658e8cdf49a43%3A0xcc36ecc6ab77441d!2zS2_Fm2Npw7PFgiDFm3cuIFJvZHppbnkgdyBCYWxpY2FjaA!5e0!3m2!1sen!2spl!4v1657303508389!5m2!1sen!2spl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></IFrame>
    </DirectionsContainer>
    </Container>
    )
}

export const MainPage = () => {

  return (
    <Page>
      <Counter />
      <Directions />
    </Page>
    )
}