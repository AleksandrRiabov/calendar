import './App.css';
import CalendarHeader from "../CalendarHeader/CalendarHeader";
import Month from "../Month/Month";
import CalendarFooter from "../CalendarFooter/CalendarFooter";



function App() {
  return (
    <div className="calendar">
      <CalendarHeader />
	  <Month /> 
	  <CalendarFooter />
    </div>
  );
}

export default App;