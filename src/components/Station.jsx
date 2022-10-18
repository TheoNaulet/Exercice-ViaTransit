import React, { useState, useEffect } from "react";

function Station(schedules) {
	const [stopName, setStopName] = useState("Gare Saint-Roch");
	const [dataSchedules, setDataSchedules] = useState(schedules.schedules);
	const [lines, setLines] = useState([]);

	useEffect(() => {
		dataSchedules.map((val, key) => {
			lines.push(val.line.id);
		});
	}, []);

	return (
		<div className="schedule-content-top">
			<h5 className="stop-name">Arrêt {stopName}</h5>
			<div className="lines">
				{lines.includes("1") ? (
					<img
						className="logo-line"
						src={require("../assets/img/T1.png")}
						alt="logo line 1 tam"
					/>
				) : (
					<div></div>
				)}
				{lines.includes("2") ? (
					<img
						className="logo-line"
						src={require("../assets/img/T2.png")}
						alt="logo line 2 tam"
					/>
				) : (
					<div></div>
				)}
				{lines.includes("3") ? (
					<img
						className="logo-line"
						src={require("../assets/img/T3.png")}
						alt="logo line 3 tam"
					/>
				) : (
					<div></div>
				)}
				{lines.includes("4") ? (
					<img
						className="logo-line"
						src={require("../assets/img/T4.png")}
						alt="logo line 4 tam"
					/>
				) : (
					<div></div>
				)}
			</div>
		</div>
	);
}

export default Station;