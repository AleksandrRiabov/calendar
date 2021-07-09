

const reducer = (state, action ) => {
	
	switch(action.type){
		case "SUBTRACT MONTH": 
			return {...state, currentDate: state.currentDate.clone().subtract(1, "month")}
			
		case "ADD MONTH": 
			return {...state, currentDate: state.currentDate.clone().add(1, "month")}
			
		case  "CALENDAR":
			return {...state, calendar: action.payload}
		
		case  "SELECT DAY":
			return {...state, selectedDay: action.payload}

		case  "OPEN BOOKING MODAL":
			return {...state,  showBookingModal: true, bookingModalContent: action.payload }
		
			case  "CLOSE BOOKING MODAL":
				return {...state,  showBookingModal: false }	

			case  "LOADING":
				return {...state, loading: action.payload}	
			case  "CONFIRMATION":
				return {...state, confirmation: action.payload}

			case  "SINGLE DAY DATA":
				return {...state, singleDayData: action.payload}	
				
		default: 
			return state;
	}
}

export default reducer;