import './App.css';
import CalendarHeader from "../CalendarHeader/CalendarHeader";
import Month from "../Month/Month";
import CalendarFooter from "../CalendarFooter/CalendarFooter";
import BookingModal from "../BookingModal/BookingModal";
import Confirmation from "../Confirmation/Confirmation";

function App() {
  return (
		  <>
		  <BookingModal /> 
	     <div className="calendar">  
			  <CalendarHeader />
			  <Month /> 
			  <CalendarFooter />
   		 </div>
			 </>  
  );
}

export default App;