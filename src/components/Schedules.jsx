import React from "react";

function Schedules({ schedules }) {
	return (
		<div className="all-departures">
			{schedules < 60 ? (
				<div className="departure green">proche</div>
			) : schedules > 60 && schedules < 120 ? (
				<div className="departure">1 min</div>
			) : (
				<div className="departure">{Math.round(schedules / 60)} mins</div>
			)}
		</div>
	);
}
export default Schedules;
