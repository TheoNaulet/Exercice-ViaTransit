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
			return allLines.push(val.line.id);
		});
		setLines(allLines);
	}, []);

	return (
		<div className="schedule-content-top">
			{/* Stop Name */}
			<h5 className="stop-name">Arrêt {stopName}</h5>
			<Lines lines={lines} />
		</div>
	);
}

export default Station;
