import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './Components/header';
import {ParallaxPic} from './Components/parallaxpic';
import {Problem} from './Components/problem';
import {Proposal} from './Components/proposal';
import {Effect} from './Components/effects';
import {LiveDemo} from './Components/livedemo';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <ParallaxPic></ParallaxPic>
      <br>
      </br>
      <Problem></Problem>
      <Proposal></Proposal>
      <LiveDemo></LiveDemo>
    </div>
  );
}

export default App;
