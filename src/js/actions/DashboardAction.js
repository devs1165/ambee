
export function setListData(taglist){
	return function(dispatch){
		var x = setInterval(function(){
	 	var y = Math.floor(Math.random() * 10); 
			 
	 	dis(dispatch,y);
		},5000);
	}	
}

function dis(dispatch,y) {
	dispatch({
		type : "REMOVE_LIST",
		payload: y
	})

}
