import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './TicTacToe.css';
import StartScreen from './start_screen/StartScreen'
import PlayerScreen from './player_screen/PlayerScreen'
import {
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Game from './Game.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path='/'>
              <StartScreen/>
            </Route>
            <Route path='/players'>
              <PlayerScreen/>
            </Route>
            <Route path='/game'>
              <Game/>
            </Route>
          </Switch>
        </HashRouter>  
      </div>
    );
  }
}

export default App;
