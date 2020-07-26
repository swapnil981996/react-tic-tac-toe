import React, { Component } from 'react';
import './PlayerScreen.css';
import {TextField,Grid} from '@material-ui/core';
import avatar1 from '../images/avatar01.png'
import avatar2 from '../images/avatar02.png'
import winner from '../images/winner.png'
import run from '../images/run.png'
import Dialog from '@material-ui/core/Dialog';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import {withStyles} from '@material-ui/core/styles';

const styles=() => ({
    input: {
        '&::before': {
            borderBottom:'unset !important'
        },
        '&::after': {
            borderBottom:'unset !important'
        },
      },
    focused: {
        borderBottom:'unset'
    },  
    underline:{
        borderBottom:'unset'
    }, 
      notchedOutline: {
        borderColor: '#FFFFFF',
        borderWidth: 1,
        '&:hover': {
            borderColor: '#FFFFFF',
            borderWidth: 2
        },
    },
    
    });


export const PopupDailog = (props) =>{
    return(
        <Dialog
            PaperProps={{
                style: { borderRadius: 15 }
            }}
            open={props.open}
        >
              {
                  props.children
              } 
        </Dialog>
    )
}  
    
 class PlayerScreen extends Component {

    constructor(props)
    {
        super(props)
        this.state={
            open:false,
            player_select:false,
            value:'',
            no_of_games:'',
            start_value:'',
            starts:''
        }
    }

    oepnPopup= (value,isopen) =>{
        this.setState({
            [value]:isopen
        })
    }

    handleRadioChange = (value,event) => {
        this.setState({
            [value]:event.target.value
        })
      };

    setNoOfGames = (isCancel) =>{
        if(isCancel)
        {
            this.setState({
                no_of_games:'',
                value:'',
                player_select:false
            })    
        }
        else{
            this.setState({
                no_of_games:this.state.value,
                player_select:false
            })
        }
        
    }

    setWhoStarts = (isCancel) =>{
        if(isCancel)
        {
            this.setState({
                starts:'',
                start_value:'',
                open:false
            })    
        }
        else{
            this.setState({
                starts:this.state.start_value,
                open:false
            })
        }
        
    }
      
  render() {
      const classes=this.props
    return (   
        <div className='player_main_div'>
            <div className='player_screen_card'>
                <div className='player_scren_card_divs player_1_div'>
                    <Grid className='player_div_grid' container spacing={1} alignItems="flex-end">
                        <Grid className='player_div_grid_1_item' item>
                            <div className='player-avatar_outer_div'>
                                <div className='player-avatar_div player_avatar_div_1'>
                                    <img src={avatar1} width='28'/>
                                </div>
                            </div>    
                        </Grid>
                        <Grid className='player_div_grid_2_item' item>
                            <TextField 
                                classes={classes.textField} 
                                id="input-with-icon-grid"
                                InputProps={{
                                    className: this.props.classes.input, // usually you dont need this and you only need classes, but just wanted to show that you can use
                                    classes: {
                                      focused: this.props.classes.focused,
                                      notchedOutline: classes.notchedOutline,
                                      underline:classes.underline
                                      // because i used variant="outlined" i can pass any classes here that the OutlinedInput uses
                                    },
                                  }}
                                label="Player 01" />
                        </Grid>
                    </Grid>
                </div>
                <div className='player_scren_card_divs player_2_div'>
                <Grid className='player_div_grid' container spacing={1} alignItems="flex-end">
                        <Grid className='player_div_grid_1_item' item>
                            <div className='player-avatar_outer_div'>
                                <div className='player-avatar_div player_avatar_div_2'>
                                    <img src={avatar2} width='32'/>
                                </div>
                            </div>    
                        </Grid>
                        <Grid className='player_div_grid_2_item' item>
                            <TextField 
                                classes={classes.textField} 
                                id="input-with-icon-grid"
                                InputProps={{
                                    className: this.props.classes.input, // usually you dont need this and you only need classes, but just wanted to show that you can use
                                    classes: {
                                      focused: this.props.classes.focused,
                                      notchedOutline: classes.notchedOutline,
                                      underline:classes.underline
                                      // because i used variant="outlined" i can pass any classes here that the OutlinedInput uses
                                    },
                                  }}
                                label="Player 02" />
                        </Grid>
                    </Grid>
                </div>
                <div className='player_scren_card_divs player_3_div'>
                <Grid onClick={()=>{this.oepnPopup('player_select',true)}} style={{cursor:'pointer'}} className='player_div_grid' container spacing={1} alignItems="flex-end">
                        <Grid className='player_div_grid_1_item' item>
                            <div className=''>
                                <div className='player-avatar_div player_avatar_div_3' style={{alignItems:'baseline'}}>
                                    <img src={winner} width='25'/>
                                </div>
                            </div>    
                        </Grid>
                        <Grid className='player_div_grid_2_item' item>
                            <TextField 
                                disabled
                                value={this.state.no_of_games?this.state.no_of_games+" Games":''}
                                classes={classes.textField} 
                                id="input-with-icon-grid"
                                InputProps={{
                                    className: this.props.classes.input, // usually you dont need this and you only need classes, but just wanted to show that you can use
                                    classes: {
                                      focused: this.props.classes.focused,
                                      notchedOutline: classes.notchedOutline,
                                      underline:classes.underline
                                      // because i used variant="outlined" i can pass any classes here that the OutlinedInput uses
                                    },
                                  }}
                                label="Number of game" />
                        </Grid>
                    </Grid>
                </div>
                <div className='player_scren_card_divs player_4_div'>
                <Grid onClick={()=>{this.oepnPopup('open',true)}} className='player_div_grid' container spacing={1} alignItems="flex-end">
                        <Grid className='player_div_grid_1_item' item>
                            <div className=''>
                                <div className='player-avatar_div player_avatar_div_4'  style={{alignItems:'baseline'}}>
                                    <img src={run} width='25'/>
                                </div>
                            </div>    
                        </Grid>
                        <Grid className='player_div_grid_2_item' item>
                            <TextField 
                                disabled
                                value={this.state.starts?this.state.starts:''}
                                classes={classes.textField} 
                                id="input-with-icon-grid"
                                InputProps={{
                                    className: this.props.classes.input, // usually you dont need this and you only need classes, but just wanted to show that you can use
                                    classes: {
                                      focused: this.props.classes.focused,
                                      notchedOutline: classes.notchedOutline,
                                      underline:classes.underline
                                      // because i used variant="outlined" i can pass any classes here that the OutlinedInput uses
                                    },
                                  }}
                                label="who starts" />
                        </Grid>
                    </Grid>
                </div>
                <hr className='horizontal_line'/>
                <div style={{padding:'0 12px'}}>
                    <button className='start_game_btn'>
                        Start Game
                    </button>
                </div>        
            </div>   
            <PopupDailog
                open={this.state.player_select}
            >
                <div className='player_popup'>
                    <div className='player_group_header'>
                        Number of game
                    </div>
                    <div className='player_selection_main_div'>
                        <RadioGroup value={this.state.value} onChange={(event)=>{this.handleRadioChange('value',event)}}>
                            <div className='player_selection_div'>
                                <FormControlLabel style={{margin:0}} value="2" control={<Radio color='primary' />}/>
                                2 Games
                            </div>
                            <div className='player_selection_div'>
                                <FormControlLabel style={{margin:0}} value="3" control={<Radio color='primary' />}/>
                                3 Games      
                            </div>
                            <div className='player_selection_div'>
                                <FormControlLabel style={{margin:0}} value="5" control={<Radio color='primary' />}/>
                                5 Games
                            </div>
                            <div className='player_selection_div'>
                                <FormControlLabel style={{margin:0}} value="10" control={<Radio color='primary' />}/>
                                10 Games
                            </div>
                        </RadioGroup>    
                    </div>  
                    <div className='player_selection_btn_div'>
                        <button onClick={()=>{this.setNoOfGames(true)}} className='player_selection_btn player_selection_cancel_btn'>
                            CANCEL
                        </button>
                        <button onClick={()=>{this.setNoOfGames(false)}} className='player_selection_btn player_selection_ok_btn'>
                            OK
                        </button>
                    </div>                           
                </div>
            </PopupDailog>
            <PopupDailog
                open={this.state.open}
            >
                <div className='player_popup'>
                    <div className='player_group_header'>
                        Who starts
                    </div>
                    <div className='player_selection_main_div'>
                        <RadioGroup value={this.state.start_value} onChange={(event)=>{this.handleRadioChange('start_value',event)}}>
                            <div className='player_selection_div'>
                                <FormControlLabel style={{margin:0}} value="Alternative turn" control={<Radio color='primary' />}/>
                                    Alternative turn
                            </div>
                            <div className='player_selection_div'>
                                <FormControlLabel style={{margin:0}} value="Looser first" control={<Radio color='primary' />}/>
                                    Looser first     
                            </div>
                            <div className='player_selection_div'>
                                <FormControlLabel style={{margin:0}} value="Winner first" control={<Radio color='primary' />}/>
                                    Winner first
                            </div>
                            <div className='player_selection_div'>
                                <FormControlLabel style={{margin:0}} value="Always player 01" control={<Radio color='primary' />}/>
                                    Always player 01
                            </div>
                            <div className='player_selection_div'>
                                <FormControlLabel style={{margin:0}} value="Always player 02" control={<Radio color='primary' />}/>
                                    Always player 02
                            </div>
                        </RadioGroup>    
                    </div>  
                    <div className='player_selection_btn_div'>
                        <button onClick={()=>{this.setWhoStarts(true)}} className='player_selection_btn player_selection_cancel_btn'>
                            CANCEL
                        </button>
                        <button onClick={()=>{this.setWhoStarts(false)}} className='player_selection_btn player_selection_ok_btn'>
                            OK
                        </button>
                    </div>                           
                </div>
            </PopupDailog> 
        </div>
    );
  }
}
export default withStyles(styles)(PlayerScreen)