import {useEffect, useRef} from "react";
import "./Week.css";
import SingleDay from "../SingleDay/SingleDay";
import DayInfo from "../DayInfo/DayInfo";
import {useGlobalContext} from "../../context";

const Week = ({week}) =>{
	const {selectedDay} = useGlobalContext();
	const isThisWeek = (week[1].week() === selectedDay.week() &&
						week[1].year() === selectedDay.year());
	
	const weekRef = useRef(null);
	
	useEffect(() => {
		const weekComponent =  weekRef.current;
		weekComponent.style.opacity = 1;          
	},[]);
	
	return (
	   <div ref={weekRef} className="week">
            {week.map((day, index) => {
				return <SingleDay key={index} day={day}/>
			})}	   
			{isThisWeek && <DayInfo />}
		</div>
	)
}

export default Week;