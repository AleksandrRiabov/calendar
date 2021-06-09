import "./Month.css";
import Week from "../Week/Week";
import {useGlobalContext} from "../../context";

const Month = () => {
	const {calendar} = useGlobalContext();
	
	return (
	   <div className="month">
			{calendar.map((week, index) => {
				return <Week key={index} week={week}/>
			})}
		</div>
	)
}

export default Month;