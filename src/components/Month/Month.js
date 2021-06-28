import {useEffect, useRef} from "react";
import "./Month.css";
import Week from "../Week/Week";
import {useGlobalContext} from "../../context";
import Loading from "../Loading/Loading";
import Confirmation from "../Confirmation/Confirmation";

const Month = () => {
	const {calendar, loading, confirmation} = useGlobalContext();
	const monthRef = useRef(null);


	useEffect(() => {
		if (!loading){
		const monthBlock = monthRef.current;
		monthBlock.style.transition = "none";
		monthBlock.style.opacity = 0.3; 
		
		const timerId = setTimeout(() => {
			monthBlock.style.transition = "opacity 0.2s ease-in";
			monthBlock.style.opacity = 1; 
		}, 200);
  
		return () => {
			clearTimeout(timerId);
		}
	}
	},[calendar, loading]);
	
	if (loading){
		return <Loading />
	}


	return (
	   <div ref={monthRef} className="month">
			{confirmation.status && <Confirmation confirmation={confirmation}/>}
			{calendar.map((week, index) => {
				return <Week key={index} week={week}/>
			})}
		</div>
	)
}

export default Month;