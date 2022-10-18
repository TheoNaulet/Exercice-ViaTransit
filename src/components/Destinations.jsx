import React from "react";
import l1 from "../assets/img/T1.png";
import l2 from "../assets/img/T2.png";
import l3 from "../assets/img/T3.png";
import l4 from "../assets/img/T4.png";
import Schedules from "./Schedules";

function Destinations({ data, line, direction }) {
	{
		//if the line of the direction equals to "1", line equals to the image l1
		if (line === "1") {
			line = l1;
		} else if (line === "2") {
			line = l2;
		} else if (line === "3") {
			line = l3;
		} else if (line === "4") {
			line = l4;
		}
	}
	return (
		<div className="schedules-by-destination">
			<div className="departure-content">
				<div className="destination">
					{/* display the image of the line */}
					<img src={line} alt="" />
					<h2 className="direction">{direction.toUpperCase()}</h2>
				</div>
				<div className="departures">
					{data.schedules.map((val, key) => {
						return (
							<div key={key} className="time">
								<Schedules schedules={val.departure} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
export default Destinations;
