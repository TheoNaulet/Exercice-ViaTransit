import React, { useState, useEffect } from "react";
import Lines from "../components/Lines";

function Station(schedules) {
	const [stopName, setStopName] = useState(schedules.dataStation);
	const [dataSchedules, setDataSchedules] = useState(schedules.schedules);
	const [lines, setLines] = useState([]);

	useEffect(() => {
		let allLines = [];
		// Filling an array with all lines who served this station
		dataSchedules.map((val, key) => {
			if (!allLines.includes(val.line.id)) {
				return allLines.push(val.line.id);
			}
		});
		//Put in order data
		allLines = allLines.sort();
		setLines(allLines);
	}, []);

	return (
		<div className="schedule-content-top">
			{/* Stop Name */}
			<h5 className="stop-name">Arrêt {stopName}</h5>
			<div className="lines">
				{lines.map((val, key) => {
					return <Lines key={key} line={val} />;
				})}
			</div>
		</div>
	);
}

export default Station;
