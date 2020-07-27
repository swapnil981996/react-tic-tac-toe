import React from 'react';
import avatar1 from '../images/avatar01.png'
import avatar2 from '../images/avatar02.png'
import clsx from 'clsx'

function Square(props){
		return (
			<div>
				<button className="square" onClick={() => props.onClick()}>
					{props.value?
					<div className={clsx('game_selected_div',
									{'game_player_1_selected_div':props.value=='01'},
									{'game_player_2_selected_div':props.value!='01'})}>
						<img src={props.value=='01'?avatar1:avatar2} height='28'/>
					</div>	
					:null
					}
				</button>
			</div>
		)
}
export default Square;
