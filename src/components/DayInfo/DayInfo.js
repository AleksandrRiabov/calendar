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
	
		const arrowPos  = 7.142 + (selectedDay.format("d") * 14.2857);
		arrowRef.current.style.left = `${arrowPos}%` 
		
		return () => {
			dayInfoDropDown.classList.remove("dayInfoOpen");
		}
	}, [selectedDay, isThisWeek])
	
	return (
	   <div ref={dayInfoRef} className="dayInfo">
			<div ref={dayInfoInnerRef} className="dayTimesWrapper">
			   <h5 className="dayInfoTime"><span className="indicator"></span> 09:00 <span>Availible</span></h5>
				<h5 className="dayInfoTime"><span className="indicator"></span> 09:00 <span>Availible</span></h5>
				<h5 onClick={() => {openBookingModal("04:00")}} className="dayInfoTime"><span className="indicator"></span> 04:00 <span>Availible</span></h5>
				<h5 className="dayInfoTime"><span className="indicator"></span> 09:00 <span>Availible</span></h5>
				<h5 className="dayInfoTime"><span className="indicator"></span> 09:00 <span>Availible</span></h5>
				<h5 className="dayInfoTime"><span className="indicator"></span> 09:00 <span>Availible</span></h5>
				<h5 className="dayInfoTime"><span className="indicator"></span> 09:00 <span>Availible</span></h5>
			</div>
			
			
			
		 <div ref={arrowRef} className="selectedDayArrow hide"></div>
		</div>
	)
}


export default DayInfo;