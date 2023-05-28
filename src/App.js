import React, { useState } from 'react';
// import { Route, Redirect, Switch } from 'wouter';
// import style from './App.module.css';

import AuthContext from './codes/AuthContext';
import Menu from './app/menu/Menu';
import Game from './app/game/Game';
import { canvas, req } from './codes/canvas/Canvas';
import music from './codes/objects/audio/music';

function App() {
  const [path, setPath] = useState('/menu');
  const [play, setPlay] = useState(false);
  if (play) {
    canvas.style.display = 'block';
  } else {
    canvas.style.display = 'none';
    cancelAnimationFrame(req);
  }

  // const music = new Audio('./music.mp3');
  // const music = new Audio('file:///home/ogius/Downloads/prepare-to-die-part-3-war-background-music-113258.mp3');

  // music.loop = true;
  // const music = new Audio('./codes/objects/audio/a.mp3');
  // music.autoplay = true;
  // music.onload = () => {
  // console.log('load');
  // }

  return (
    <AuthContext.Provider value={{
      path: path,
      setPath: setPath,
      play: play,
      setPlay: setPlay
    }}>
      {/* <Switch> */}
      {path === '/' ? <Game /> : <Menu />}
      {/* <Route path='/' component={Game} /> */}
      {/* <Route path='/menu' component={Menu} /> */}

      {/* <Route><Redirect to='/menu' /></Route> */}
      {/* </Switch> */}

    </AuthContext.Provider>
  );
}

export default App;
// import AuthContext from "../../codes/AuthContext";
// const ctx = React.useContext(AuthContext);