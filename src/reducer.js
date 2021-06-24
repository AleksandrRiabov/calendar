import generateCalendar from "./generateCalendar";

const reducer = (state, action ) => {
	
	switch(action.type){
		case "SUBTRACT MONTH": 
			return {...state, currentDate: state.currentDate.clone().subtract(1, "month")}
			
		case "ADD MONTH": 
			return {...state, currentDate: state.currentDate.clone().add(1, "month")}
			
		case  "BUILD CALENDAR":
			  const updatedCalendar = generateCalendar(state.currentDate);
			return {...state, calendar: updatedCalendar}
		
		case  "SELECT DAY":
			return {...state, selectedDay: action.payload}

		case  "OPEN BOOKING MODAL":
			return {...state,  showBookingModal: true, bookingModalContent: action.payload }
		
			case  "CLOSE BOOKING MODAL":
				return {...state,  showBookingModal: false }	
		default: 
			return state;
	}
}

export default reducer;