import "./CalendarHeader.css";

const CalendarHeader = () => {
	return (
	   <div className="calendarHeader">
		   <h3 className="headerTitle">June <span className="calendarYear">2021</span></h3>
		   <div className="arrow left"></div>
		   <div className="arrow right"></div>
		</div>
	)
}

export default CalendarHeader;