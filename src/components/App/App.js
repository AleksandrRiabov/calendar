import './App.css';
import CalendarHeader from "../CalendarHeader/CalendarHeader";
import Month from "../Month/Month";
import CalendarFooter from "../CalendarFooter/CalendarFooter";
import {AppProvider} from "../../context";

function App() {
	
  return (
	  <AppProvider>
	     <div className="calendar">
			  <CalendarHeader />
			  <Month /> 
			  <CalendarFooter />
   		 </div>
	  </AppProvider>
    
	  
  );
}

export default App;