import React from "react";
import Schedules from "./Schedules";
import Lines from "./Lines";

function Destinations({ data, line, direction }) {
	return (
		<div className="schedules-by-destination">
			<div className="departure-content">
				<div className="destination">
					{/* display the image of the line */}
					<Lines line={line} />
					<h2 className="direction">{direction.toUpperCase()}</h2>
				</div>
				<div className="departures">
					{/* for each direction display the  */}
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
