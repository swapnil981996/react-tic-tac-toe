import React from 'react';
import Board from './Board';
import avatar1 from './images/avatar01.png'
import avatar2 from './images/avatar02.png'
import clsx from 'clsx'
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/fontawesome-free-solid'

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class Game extends React.Component {
  constructor(){
    super();
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true,
      stepNumber: 0,
      nextplayer:'01',
      undo:false,
      playing_game:1,
      isNextGame:false,
      player1_score:0,
      player2_score:0,
      who_won_tornament:'',
      isGameOver:false
    };
  }

  componentDidMount = () =>{
    if(!this.props.isallowed)
    {
        window.location.href='#/'
    }
    if(this.props.whose_turn==='player1')
    {
      this.setState({
        xIsNext:true,
        nextplayer:'01'
      })
    }
    else
    {
      this.setState({
        xIsNext:false,
        nextplayer:'02'
      })
    }
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      undo:false,
      xIsNext: (step % 2) ? false : true,
      nextplayer: this.state.xIsNext ? '02' : '01',
    });
  }

  hello = () =>{
    this.props.setWinnerAndLooser('winner','')
    this.props.setWinnerAndLooser('looser','')
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber+1)
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? '01' : '02';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
      nextplayer: this.state.xIsNext ? '02' : '01',
      undo:true,
    },()=>{
      let history = this.state.history;
      let current = history[this.state.stepNumber];
      let winner = calculateWinner(current.squares);
      this.winner=winner
      let status; 
      if(winner){
        let game_no=parseInt(this.state.playing_game) + 1
        this.setState({
          nextplayer:'',
          isNextGame:true,
          playing_game:parseInt(this.props.no_of_games)>=game_no ?
                        game_no:
                       'play again'
        })

        

        if(winner==='01')
        {
          this.props.setWinnerAndLooser('winner','player1')
          this.props.setWinnerAndLooser('looser','player2')
          this.setState({
              xIsNext:true,
              nextplayer:'01',
              player1_score:this.state.player1_score+1
          })
        }
        console.log(winner)
        if(winner=='02')
        {
          this.props.setWinnerAndLooser('winner','player2')
          this.props.setWinnerAndLooser('looser','player1')
          this.setState({
            xIsNext:false,
            nextplayer:'02',
            player2_score:this.state.player2_score+1
          })
        }

        if(parseInt(this.props.no_of_games)<game_no )
        {
          if(this.state.player2_score<this.state.player1_score)
          {
            this.setState({
              who_won_tornament:'01'
            })
          }
          else if(this.state.player1_score<this.state.player2_score)
          {
            this.setState({
              who_won_tornament:'02'
            })
          }
          else{
            this.setState({
              isGameOver:true,
              playing_game:'play again'
            })
          }
        }
      }
    });
  }

  nextGame = () =>{
    this.setState({
      isNextGame:false,
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
    })
    if(this.winner==='01')
    {
      this.props.setWinnerAndLooser('winner','player1')
      this.props.setWinnerAndLooser('looser','player2')
      this.setState({
          xIsNext:true,
          nextplayer:'01'
      })
    }
    else
    {
      this.props.setWinnerAndLooser('winner','player2')
      this.props.setWinnerAndLooser('looser','player1')
      this.setState({
        xIsNext:false,
        nextplayer:'02'
      })
    }
    this.winner=''
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    let status;
    if(winner){
      status = 'Winner: ' + winner;
    }else{
      status = 'Next player: ' + (this.state.xIsNext ? '01' : '02');
    }

    const moves = history.map((step, move) => {
      const desc = move ? 'Move #' + move : 'Game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    return (

      <div className='game_main_div'>
        <div className='app-header'>
                <Link to='/players' className='app_header_left_arrw'>
                    <FontAwesomeIcon  icon={faArrowLeft}/>
                </Link>
                <div>
                    Two Players Game
                </div>
            </div>
        <div className="game">
          <div className="game-board">
            <Board squares={current.squares} onClick={(i)=>this.handleClick(i)}/>
          </div>
          <div className="game-info">
            <div className='game_tournament_header'>
              {this.props.no_of_games} Games Tournament
            </div>  
            <div style={{margin:'11px 0'}}>
              {
                this.winner?
                <div>
                  <div className='game_congratulations_div'>
                    Congratulations!
                  </div>
                  {this.state.playing_game==='play again'?
                  <div className='game_info_header_div'>  
                    <label style={{fontWeight: 600}}>
                      {this.state.who_won_tornament=='01'?
                        this.props.player_1?this.props.player_1:'Player 01':
                      this.props.player_2?this.props.player_2:'Player 02'},
                    </label> you won the tournament
                  </div>
                  :
                  <div className='game_info_header_div'>  
                    <label style={{fontWeight: 600}}>
                      {this.winner=='01'?
                        this.props.player_1?this.props.player_1:'Player 01':
                       this.props.player_2?this.props.player_2:'Player 02'},
                    </label> you won the game
                  </div>}
                </div>:
                <div>
                  {
                    this.state.isGameOver?
                    <div className='game_info_header_div'>  
                      No one win
                    </div>
                    :
                    <div className='game_info_header_div'>
                      Playing game {this.state.playing_game}
                    </div>  
                  }
                  
                </div>  
              }
            </div>  
            <div style={{paddingBottom:'20px',borderBottom:'solid 1px #70707026'}}>
              <div className='game_player_info game_player_1_info_clr'>
                  <div className={clsx({'game_player_info_selected_div':this.state.nextplayer==='01'})}>
                    <div className={clsx('game_selected_div','game_player_1_selected_div','game_player_info_img_div')}>
                        <img src={avatar1} height='35'/>
                    </div>
                  </div>
                  <div>
                    <div className='game_player_header_text'>Player 01</div>
                    {this.props.player_1}
                  </div>
                  <div>
                    <div className='game_player_header_text'>score</div>
                    {this.state.player1_score<10?'0'+this.state.player1_score:this.state.player1_score}
                  </div>  
              </div>
              <div className='game_player_info game_player_2_info_clr'>
                  <div className={clsx({'game_player_info_selected_div':this.state.nextplayer==='02'})}>
                    <div className={clsx('game_selected_div','game_player_2_selected_div','game_player_info_img_div')}>
                        <img src={avatar2} height='35'/>
                    </div>
                  </div>
                  <div>
                    <div className='game_player_header_text'>Player 02</div>
                    {this.props.player_2}
                  </div>
                  <div>
                    <div className='game_player_header_text'>score</div>
                    {this.state.player2_score<10?'0'+this.state.player2_score:this.state.player2_score}
                  </div>  
              </div>
            </div>
            <div style={{display:'grid',marginTop:'20px'}}>
              {this.state.playing_game==='play again'?
              <Link to='/players'>
                <button className='game_play_board_button game_board_undo' onClick={() => this.nextGame()}>
                  Play Again
                </button>
              </Link> 
              :
              this.state.isNextGame?
                <button className='game_play_board_button game_board_undo' onClick={() => this.nextGame()}>
                Next Game
              </button>
                :
                <button className='game_play_board_button game_board_undo' onClick={() => this.jumpTo(this.state.stepNumber-1)}>
                Undo Step
              </button>
                }
              
              <Link to='/players' onClick={this.hello}>
                <button className='game_play_board_button game_board_end' onClick={() => this.jumpTo(this.state.stepNumber-1)}>
                  End Tournament
                </button>
              </Link>
            </div>  
          </div>
        </div>
      </div>
    );
  }
}
export default Game;