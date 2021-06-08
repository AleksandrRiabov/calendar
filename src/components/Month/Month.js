import "./Month.css";
import Week from "../Week/Week";

const Month = () => {
	return (
	   <div className="month">
			<Week />
			<Week />
			<Week />
			<Week />
			<Week />
			<Week />
		</div>
	)
}

export default Month;