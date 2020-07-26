import React from 'react';
import Board from './Board';
import avatar1 from './images/avatar01.png'
import avatar2 from './images/avatar02.png'
import clsx from 'clsx'

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
    };
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      undo:false,
      xIsNext: (step % 2) ? false : true,
      nextplayer: this.state.xIsNext ? '02' : '01',
    });
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber+1)
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? '01' : 'O2';
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
      let status;
      if(winner){
        this.setState({
          nextplayer:''
        })
      }
    });
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
        <div className="game">
          <div className="game-board">
            <Board squares={current.squares} onClick={(i)=>this.handleClick(i)}/>
          </div>
          <div className="game-info">
            <div style={{margin:'15px 0'}}>
              {
                winner?
                <div>
                  <div className='game_congratulations_div'>
                    Congratulations!
                  </div>
                  <div className='game_info_header_div'>  
                    <label style={{fontWeight: 600}}>{winner}</label> won the game
                  </div>
                </div>:
                <div>
                  <div className='game_info_header_div'>
                    Playing game
                  </div>  
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
                    Player 01
                  </div>
                  <div>
                    score
                  </div>  
              </div>
              <div className='game_player_info game_player_2_info_clr'>
                  <div className={clsx({'game_player_info_selected_div':this.state.nextplayer==='02'})}>
                    <div className={clsx('game_selected_div','game_player_2_selected_div','game_player_info_img_div')}>
                        <img src={avatar2} height='35'/>
                    </div>
                  </div>
                  <div>
                    Player 02
                  </div>
                  <div>
                    score
                  </div>  
              </div>
            </div>
            <div style={{display:'grid',marginTop:'20px'}}>
              <button className='game_play_board_button game_board_undo' onClick={() => this.jumpTo(this.state.stepNumber-1)}>
                Undo Step
              </button>
              <button className='game_play_board_button game_board_end' onClick={() => this.jumpTo(this.state.stepNumber-1)}>
                End Tournament
              </button>
            </div>  
          </div>
        </div>
      </div>
    );
  }
}
export default Game;