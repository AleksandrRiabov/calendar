import "./Week.css";
import SingleDay from "../SingleDay/SingleDay";
import DayInfo from "../DayInfo/DayInfo";

const Week = () =>{
	
	return (
	   <div className="week">
		    <SingleDay />
		    <SingleDay />
			<SingleDay />
			<SingleDay />
			<SingleDay />
			<SingleDay />
			<SingleDay />
			<DayInfo />
		</div>
	)
}

export default Week;