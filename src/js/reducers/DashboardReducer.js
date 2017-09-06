
export default function reducer(state={
	remove_list:[],
}, action){
	switch(action.type){
		case 'REMOVE_LIST': {
			return {...state, remove_list : action.payload}
		}
	}

	return state;
}	
