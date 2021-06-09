import React, {useContext, useEffect, useReducer} from "react";
import moment from "moment";
import reducer from "./reducer";
const AppContext = React.createContext();

const initialState = {
	currentDate: moment(),
	calendar: [],
	selectedDay: moment() //today
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
	
	
	
	
	const data = {
		currentDate: state.currentDate,
		subtractMonth, 
		addMonth,
		calendar: state.calendar,
		selectedDay: state.selectedDay,
		selectDay: selectDay,
	}
	
	return <AppContext.Provider
			   value={data}
			   >{children}</AppContext.Provider>
} 

const useGlobalContext = () => {
	return useContext(AppContext);
}

export { AppProvider, useGlobalContext }