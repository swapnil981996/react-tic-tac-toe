import React, { Component } from 'react';
import './PlayerScreen.css';
import {TextField,Grid} from '@material-ui/core';
import avatar1 from '../images/avatar01.png'
import avatar2 from '../images/avatar02.png'
import winner from '../images/winner.png'
import run from '../images/run.png'
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
    }
    });
 class PlayerScreen extends Component {

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
                <Grid className='player_div_grid' container spacing={1} alignItems="flex-end">
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
                <Grid className='player_div_grid' container spacing={1} alignItems="flex-end">
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
        </div>
    );
  }
}
export default withStyles(styles)(PlayerScreen)