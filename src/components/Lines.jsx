import React from "react";

function Lines(lines) {
	return (
		<div className="lines">
			{/* If the line's number remains in the array lines -> display the logo of the line */}
			{lines.lines.includes("1") && (
				<img
					className="logo-line"
					src={require("../assets/img/T1.png")}
					alt="logo line 1 tam"
				/>
			)}
			{lines.lines.includes("2") && (
				<img
					className="logo-line"
					src={require("../assets/img/T2.png")}
					alt="logo line 2 tam"
				/>
			)}
			{lines.lines.includes("3") && (
				<img
					className="logo-line"
					src={require("../assets/img/T3.png")}
					alt="logo line 3 tam"
				/>
			)}
			{lines.lines.includes("4") && (
				<img
					className="logo-line"
					src={require("../assets/img/T4.png")}
					alt="logo line 4 tam"
				/>
			)}
		</div>
	);
}

export default Lines;
