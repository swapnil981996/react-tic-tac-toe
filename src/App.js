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
  constructor(props)
  {
    super(props)
    this.state={
      player_1:'',
      player_2:'',
      no_of_games:'',
      winner:null,
      looser:null,
      whose_turn:'player1',
      isallowed:false,
    }
  
  }

  setStateValue = (value,state) =>{
    this.setState({
      [value]:state
    })
  }
  setPlayerName = (event) =>{
    this.setState({
      [event.target.id]:event.target.value
    })
  }

  setNoOfGame = (gamesno) => {
    this.setState({
      no_of_games:gamesno
    })
  }

  setWhoseTurn = (turn) => {
    this.setState({
      whose_turn:turn
    })
  }

  setWinnerAndLooser = (value,state) =>{
    this.setState({
      [value]:state
    })
  }

  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path='/'>
              <StartScreen
                setStateValue={this.setStateValue}
              />
            </Route>
            <Route path='/players'>
              <PlayerScreen
                setPlayerName={this.setPlayerName}
                setNoOfGame={this.setNoOfGame}
                player_1={this.state.player_1}
                player_2={this.state.player_2}
                setWhoseTurn={this.setWhoseTurn}
                winner={this.state.winner}
                looser={this.state.looser}
                isallowed={this.state.isallowed}
              />
            </Route>
            <Route path='/game'>
              <Game
                player_1={this.state.player_1}
                player_2={this.state.player_2}
                no_of_games={this.state.no_of_games}
                whose_turn={this.state.whose_turn}
                setWinnerAndLooser={this.setWinnerAndLooser}
                isallowed={this.state.isallowed}
              />
            </Route>
          </Switch>
        </HashRouter>  
      </div>
    );
  }
}

export default App;
