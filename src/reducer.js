const reducer = (state, action ) => {
	
	switch(action.type){
		case "SUBTRACT MONTH": 
			return {...state, currentDate: state.currentDate.clone().subtract(1, "month")}
		case "ADD MONTH": 
			return {...state, currentDate: state.currentDate.clone().add(1, "month")}
	
		default: 
			return state;
	}
}

export default reducer;