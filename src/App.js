import React from 'react';
import { Blog, Features, WhatGPT3, Header } from './containers';
// import Possibility from './containers';
import { Navbar } from './components';
// import  { Footer, CTA, Brand } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    {/* <Brand/> */}
    <WhatGPT3 />
    <Features />
    {/* <Possibility /> */}
    {/* <CTA /> */}
    <Blog />
    {/* <Footer /> */}
  </div>
);

export default App;
