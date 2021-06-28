import React, {useContext, useEffect, useReducer} from "react";
import moment from "moment";
import reducer from "./reducer";
import serverData from "./backEnd.js";
import fetchData from "./functions/fetchData";
const AppContext = React.createContext();

const initialState = {
	currentDate: moment(),
	calendar: [],
	selectedDay: {day: moment(), data:{times: [{time: "03:15", available: true}, {time: "15:00", availible: false}]} },
	showBookingModal: false,
	bookingModalContent: "Content",
	loading: true,
	confirmation: {status: false, appointment: {}}
}



const AppProvider = ({children}) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	   const generateCalendar = async(startingDate) => {
		dispatch({type: "LOADING", payload: true});
		
		const serverData = await fetchData("http://localhost:3001/getmonth/fghfh");
	   const value = startingDate;
	   const startDay = value.clone().startOf("month").startOf("week");
		const endDay = value.clone().endOf("month").startOf("week");
		const day = startDay.clone().subtract(1, "day");
		
		const calendar = [];
		
		while(day.isBefore(endDay, day)){
			calendar.push(
			 Array(7)
				.fill(0)
				.map(() => {
					const date = day.add(1, "day").clone();
					const data = serverData[date.format("MM DD YYYY")] ? serverData[date.format("MM DD YYYY")]: {workDay: false,
						  times: [{time: "12:00", available: false}, {time: "15:00", available: false}, {time: "16:00", available: false}, {time: "19:00", available: false}]
						  };
					if (date.format("MMMM DD YYYY") === startingDate.format("MMMM DD YYYY")){
						dispatch({type: "SELECT DAY", payload: {day: date,data}}) 
					}
					return {
					  day: date,
					  data
				  }
				})
			)
		}	
			dispatch({type: "CALENDAR", payload: calendar})
			dispatch({type: "LOADING", payload: false})
		return calendar;
	}
	
	
	useEffect(() => {
		 async function buildCalendar(){
		   const calendar = await  generateCalendar(state.currentDate);
		   dispatch({type: "CALENDAR", payload: calendar});
	  }
		buildCalendar();
	},[state.currentDate])
	
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

	const setConfirmation = (data) => {
		dispatch({type: "CONFIRMATION", payload: data})
		console.log(data)
	}


	const globalProps = {
		currentDate: state.currentDate,
		subtractMonth, 
		addMonth,
		calendar: state.calendar,
		selectedDay: state.selectedDay,
		selectDay: selectDay,
		openBookingModal,
		closeBookingModal,
		showBookingModal: state.showBookingModal,
		bookingModalContent: state.bookingModalContent,
		loading: state.loading,
		setConfirmation,
		confirmation: state.confirmation
	}
	
	return <AppContext.Provider
			   value={globalProps}
			   >{children}</AppContext.Provider>
} 

const useGlobalContext = () => {
	return useContext(AppContext);
}

export { AppProvider, useGlobalContext }