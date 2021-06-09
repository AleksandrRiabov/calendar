const generateCalendar = (startingDate) => {
    const value = startingDate;
    const startDay = value.clone().startOf("month").startOf("week");
	const endDay = value.clone().endOf("month").startOf("week");
	const day = startDay.clone().subtract(1, "day");
	
	
	console.log(endDay)
	const calendar = [];
	
	while(day.isBefore(endDay, day)){
		calendar.push(
		 Array(7)
			.fill(0)
			.map(() => day.add(1, "day").clone())
		)
	}
	return calendar;
}

export default generateCalendar;