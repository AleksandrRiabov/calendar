import {useEffect, useRef} from "react";
import "./DayInfo.css"
import {useGlobalContext} from "../../context";

const DayInfo = ({isThisWeek}) => {
	const dayInfoInnerRef = useRef(null);
	const dayInfoRef = useRef(null);
	const arrowRef = useRef(null);
	const {selectedDay, openBookingModal} = useGlobalContext();
	
	useEffect(() => {
		dayInfoInnerRef.current.style.opacity = 1;
		const dayInfoDropDown = dayInfoRef.current;
		
		if (isThisWeek){
			dayInfoDropDown.classList.add("dayInfoOpen");
		}
	
		const arrowPos  = 7.142 + (selectedDay.day.format("d") * 14.2857);
		arrowRef.current.style.left = `${arrowPos}%` 
		
		return () => {
			dayInfoDropDown.classList.remove("dayInfoOpen");
		}
	}, [selectedDay, isThisWeek])

	return (
	   <div ref={dayInfoRef} className="dayInfo">
			<div ref={dayInfoInnerRef} className="dayTimesWrapper">
            {selectedDay.data.times.map((timeslot, index) => {
					return <h5 
					key={index}
					onClick={() => {if (timeslot.available){openBookingModal(timeslot.time)}}} 
					className={`dayInfoTime ${timeslot.available ? "available": "notAvailable"}`}
					><span className="indicator"></span> {timeslot.time} <span>{timeslot.available ? "Available": "Not Available"}</span></h5>
				})}
				
			</div>
		 <div ref={arrowRef} className="selectedDayArrow hide"></div>
		</div>
	)
}


export default DayInfo;