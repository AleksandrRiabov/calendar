import './App.css';
import CalendarHeader from "../CalendarHeader/CalendarHeader";
import Month from "../Month/Month";
import CalendarFooter from "../CalendarFooter/CalendarFooter";
import BookingModal from "../BookingModal/BookingModal";
import {useGlobalContext} from "../../context";

function App() {
	const {showBookingModal} = useGlobalContext();
  return (
		  <>
		  {showBookingModal ? <BookingModal /> : null}
	     <div className="calendar">  
			  <CalendarHeader />
			  <Month /> 
			  <CalendarFooter />
   		 </div>
			 </>  
  );
}

export default App;