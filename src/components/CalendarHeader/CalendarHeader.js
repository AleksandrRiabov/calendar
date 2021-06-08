import "./CalendarHeader.css";
import {useGlobalContext} from "../../context";

const CalendarHeader = () => {
	const {currentDate, subtractMonth, addMonth} = useGlobalContext();
	
	return (
	   <div className="calendarHeader">
		   <h3 className="headerTitle">{currentDate.format("MMMM")} <span className="calendarYear">{currentDate.format("YYYY")}</span></h3>
		   <div onClick={() => subtractMonth()} className="arrow left"></div>
		   <div onClick={() => addMonth()} className="arrow right"></div>
		</div>
	)
}

export default CalendarHeader;