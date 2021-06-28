import "./SingleDay.css";
import moment from "moment";
import {useGlobalContext} from "../../context";
import checkPercents from "../../functions/checkPercents";

const SingleDay = ({day}) => {
	const {selectedDay, currentDate, selectDay,subtractMonth, addMonth} = useGlobalContext();
	
	const isToday = (moment().format("MMMM DD YYYY") === day.day.format("MMMM DD YYYY"));
	const notThisMonth = (day.day.format("MMMM") !== currentDate.format("MMMM"));
	const isSelected = (selectedDay.day.format("MMMM DD YYYY") === day.day.format("MMMM DD YYYY"));
	const prevMonth = (notThisMonth && day.day.isBefore(currentDate));
   const nextMonth = (notThisMonth && day.day.isAfter(currentDate));

	const prevOrNextMonth = () => {
		if (prevMonth){
			subtractMonth();
		}
		if (nextMonth){
			addMonth();
		}
	}
	
	const percentBooked = checkPercents(day.data.times);
	return (
	   <div onClick={() => {selectDay(day); prevOrNextMonth()}} 
		   className={`singleDay ${notThisMonth ? "other": ""} ${isSelected ? "selectedDay": ""}`}>
		  <div className="dayName">{day.day.format("ddd")}</div>
		  <div className={`dayNumber ${isToday && "today"}`}>{day.day.format("DD")}</div>
		  <div className="singlDayAvailability">
			<div className={`indicator ${percentBooked >= 25 && "booked"}`}></div>
			<div className={`indicator ${percentBooked >= 50 && "booked"}`}></div>
			<div className={`indicator ${percentBooked >= 75  && "booked"}`}></div>
			<div className={`indicator ${percentBooked >= 100 && "booked"}`}></div>
			</div>
		</div>
	)
}

export default SingleDay;