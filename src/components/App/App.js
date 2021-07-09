import './App.css';
import Navbar from "../Navbar/Navbar";
import CalendarHeader from "../CalendarHeader/CalendarHeader";
import Month from "../Month/Month";
import CalendarFooter from "../CalendarFooter/CalendarFooter";
import BookingModal from "../BookingModal/BookingModal";
import { BrowserRouter as Router, Route} from "react-router-dom"
import Dashboard from "../admin/Dashboard/Dashboard";
import SingleDayDetails from "../admin/SingleDayDetails/SingleDayDetails";

function App() {
  return (
		  <>
		  <Router>
			  <Navbar />
			  <Route path="/dashboard">
				  <Dashboard />
				  </Route>	
				<Route path='/day/:id/:dayname/:daydate' exact render={({match}) => {
                            const {id, dayname, daydate} = match.params;

                        return <div className="dashboard"><SingleDayDetails dayId={id} dayName={dayname} dayDate={daydate}/></div>}}/>
				<Route path="/calendar">
					<BookingModal /> 
					<div className="calendar">  
						<CalendarHeader />
						<Month /> 
						<CalendarFooter />
					</div>
				</Route>
		  </Router>
			 </>  
  );
}

export default App;