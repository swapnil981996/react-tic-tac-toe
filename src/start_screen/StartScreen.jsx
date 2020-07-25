import React, { Component } from 'react';
import './StartScreen.css';
import  logoimg from '../images/4inarow.png';
import customerimg from '../images/one.png'
import onlineimg from '../images/online.png'
import playerimg from '../images/two.png'
import trainingimg from '../images/training.png'
import Dialog from '@material-ui/core/Dialog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlayCircle} from '@fortawesome/fontawesome-free-regular'
import {Link} from "react-router-dom";

export default class StartScreen extends Component {

    constructor(props)
    {
        super(props)
        this.state={
            open:false
        }
    }

    oepnPopup= (isopen) =>{
        this.setState({
            open:isopen
        })
    }

  render() {
    return (   
      <div className='start_main_div'>
          <div className='start_screen_header'>
              <div className='start_screen_heading'>
                Connect Four!
              </div>
              <img src={logoimg} className='logo_img'/>
              <div className='start_screen_phrase'>
                Play with other players around the world.
              </div>        
          </div>
          <div className='start_screen_main_div'>    
            <div className='strat_screen_card'>
                <div className='start_card_first_div'>
                    <div className='start_play_btn'>
                        <div>
                            <FontAwesomeIcon className='start_play_btn_logo' icon={faPlayCircle} />
                            <div className='start_play_btn_text'>
                                PLAY
                            </div>
                        </div>    
                    </div>    
                </div> 
                <div className='start_card_second_div'>
                    <div className='start_screen_btn_div'>
                        <div className='start_screen_btn_row'>
                            <button onClick={()=>{this.oepnPopup(true)}} className='start_screen_btn start_screen_customer_game'>
                                <img src={customerimg} className='start_screen_btn_img'/>
                                Custom Game
                            </button >
                            <Link to="/players" className='link_decoration'>
                                <button className='start_screen_btn start_screen_player_game'>
                                    <img src={playerimg} className='start_screen_btn_img'/>
                                    Two Players
                                </button>
                            </Link>
                        </div>
                        <div className='start_screen_btn_row'>
                            <button onClick={()=>{this.oepnPopup(true)}} className='start_screen_btn start_screen_online_games'>
                                <img src={onlineimg} className='start_screen_btn_img'/>
                                Game Online
                            </button >
                            <button onClick={()=>{this.oepnPopup(true)}} className='start_screen_btn start_screen_training_game'>
                                <img src={trainingimg} className='start_screen_btn_img'/>
                                Training Game
                            </button>
                        </div>   
                    </div> 
                </div>   
            </div>
            <div className='start_screen_footer'>
                <i>&#169;</i>2020
            </div>
          </div>   

          <Dialog onClose={()=>{this.oepnPopup(false)}} open={this.state.open}>
              <div className='start__screen_dialog'>
                Coming Soon...
              </div>  
          </Dialog> 
      </div>
    );
  }
}