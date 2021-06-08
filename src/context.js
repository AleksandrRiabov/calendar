import React, {useContext, useEffect, useReducer} from "react";
import moment from "moment";
import reducer from "./reducer";
const AppContext = React.createContext();

const initialState = {
	currentDate: moment()
}
const AppProvider = ({children}) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	
	
	const subtractMonth = () => {
	     dispatch({type: "SUBTRACT MONTH"})	
	}
	
	const addMonth = () => {
		console.log()
	     dispatch({type: "ADD MONTH"})	
	}
	
	const data = {
		currentDate: state.currentDate,
		subtractMonth, 
		addMonth,
	}
	
	return <AppContext.Provider
			   value={data}
			   >{children}</AppContext.Provider>
} 

const useGlobalContext = () => {
	return useContext(AppContext);
}

export { AppProvider, useGlobalContext }