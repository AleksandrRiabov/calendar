import "./SingleDay.css";
import moment from "moment";
import {useGlobalContext} from "../../context";


const SingleDay = ({day}) => {
	const {selectedDay, currentDate, selectDay} = useGlobalContext();
	
	const isToday = (moment().format("MMMM DD YYYY") === day.format("MMMM DD YYYY"));
	const isThisMonth = (day.format("MMMM") !== currentDate.format("MMMM"));
	const isSelected = (selectedDay.format("MMMM DD YYYY") === day.format("MMMM DD YYYY"));
	
	return (
	   <div onClick={() => selectDay(day)} 
		   className={`singleDay ${isThisMonth ? "other": ""} ${isSelected ? "selectedDay": ""}`}>
		  <div className="dayName">{day.format("ddd")}</div>
		  <div className={`dayNumber ${isToday && "today"}`}>{day.format("DD")}</div>
		  <div className="singlDayAvailability">
			<div className="indicator"></div>
			<div className="indicator"></div>
			<div className="indicator"></div>
			<div className="indicator"></div>
			</div>
		</div>
	)
}

export default SingleDay;