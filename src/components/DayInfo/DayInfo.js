import {useEffect, useRef} from "react";
import "./DayInfo.css"
import {useGlobalContext} from "../../context";

const DayInfo = ({isThisWeek}) => {
	const dayInfoInnerRef = useRef(null);
	const dayInfoRef = useRef(null);
	const arrowRef = useRef(null);
	const {selectedDay} = useGlobalContext();
	
	useEffect(() => {
		dayInfoInnerRef.current.style.opacity = 1;
		dayInfoRef.current.classList.add("dayInfoOpen");
		
		const arrowPos  = 7.142 + (selectedDay.format("d") * 14.2857);
		arrowRef.current.style.left = `${arrowPos}%` 
	}, [selectedDay])
	
	return (
	   <div ref={dayInfoRef} className="dayInfo">
			<div ref={dayInfoInnerRef} className="dayTimesWrapper">
			   <h5 className="dayInfoTime"><span className="indicator"></span> 09:00 <span>Availible</span></h5>
				<h5 className="dayInfoTime"><span className="indicator"></span> 09:00 <span>Availible</span></h5>
				<h5 className="dayInfoTime"><span className="indicator"></span> 09:00 <span>Availible</span></h5>
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