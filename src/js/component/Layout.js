import React from 'react';
import store from '../store';
import List from './List';

export default class Layout extends React.Component{
	constructor(props){
		super(props);
		this.state={

		}
	}
	

 	
	render(){
		// master reneder
		return(
			<div className='layout-main-container'>
				<List />
			</div>
		)
	}
}
