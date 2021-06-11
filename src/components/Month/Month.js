import {useEffect, useRef} from "react";
import "./Month.css";
import Week from "../Week/Week";
import {useGlobalContext} from "../../context";

const Month = () => {
	const {calendar} = useGlobalContext();
	const monthRef = useRef(null);
	
	useEffect(() => {
		const monthBlock = monthRef.current;
	       monthBlock.style.top = 0 ;
		
	   return () => {
		   monthBlock.style.top = -100 +"px";
	   }
	}, [calendar])
	
	return (
	   <div ref={monthRef} className="month">
			{calendar.map((week, index) => {
				return <Week key={index} week={week}/>
			})}
		</div>
	)
}

export default Month;