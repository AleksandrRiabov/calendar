import React, {useContext, useEffect, useReducer} from "react";
import moment from "moment";
import reducer from "./reducer";
const AppContext = React.createContext();

const initialState = {
	currentDate: moment(),
	calendar: [],
	selectedDay: moment(),
	showBookingModal: true,
	bookingModalContent: "Content"
}
const AppProvider = ({children}) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	
	
	
	useEffect(() => {
		dispatch({type: "BUILD CALENDAR"})
	},[])
	
	const subtractMonth = () => {
	     dispatch({type: "SUBTRACT MONTH"})	
		 dispatch({type: "BUILD CALENDAR"})
	}
	
	const addMonth = () => {
	     dispatch({type: "ADD MONTH"})
		 dispatch({type: "BUILD CALENDAR"})
	}
	
	const selectDay = (day) => {
		 dispatch({type: "SELECT DAY", payload: day})
	}
	
	const openBookingModal = (content) => {
		dispatch({type: "OPEN BOOKING MODAL",  payload: content});
	}
    
	const closeBookingModal = () => {
		dispatch({type: "CLOSE BOOKING MODAL", payload: "e4mpty"});
	}

	
	
	
	
	const data = {
		currentDate: state.currentDate,
		subtractMonth, 
		addMonth,
		calendar: state.calendar,
		selectedDay: state.selectedDay,
		selectDay: selectDay,
		openBookingModal,
		closeBookingModal,
		showBookingModal: state.showBookingModal,
		bookingModalContent: state.bookingModalContent
	}
	
	return <AppContext.Provider
			   value={data}
			   >{children}</AppContext.Provider>
} 

const useGlobalContext = () => {
	return useContext(AppContext);
}

export { AppProvider, useGlobalContext }