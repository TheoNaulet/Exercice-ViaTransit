import React from "react";

function Schedules({ schedules }) {
	return (
		//if schedules is under 60 -> display "proche"
		<div className="all-departures">
			{schedules < 60 ? (
				<div className="departure green">proche</div>
			) : //else if schedules is over 60 and under 120 -> display "1 min"
			schedules > 60 && schedules < 120 ? (
				<div className="departure">1 min</div>
			) : (
				//else -> display the (seconds remaining / 60) to get the time in minutes
				<div className="departure">{Math.round(schedules / 60)} mins</div>
			)}
		</div>
	);
}
export default Schedules;
