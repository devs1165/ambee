
export function setListData(taglist){
	return function(dispatch){
		var x = setInterval(function(){
	 	Math.floor(Math.random() * 10); 
			dispatch({
				type : "REMOVE_LIST",
				payload: x
			})
		}, 1000);
	}	
}

