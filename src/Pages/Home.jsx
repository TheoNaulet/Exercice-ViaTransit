import React, { useState, useEffect } from "react";
import schedules from "../assets/schedules_S5472.json";
import Destinations from "../components/Destinations";
import Header from "../components/Header";
import Station from "../components/Station";

function Home() {
	const [data, setDatas] = useState(schedules);
	const [randomData, setRandomData] = useState(data);

	useEffect(() => {
		setRandomData(
			//For each element of the array data, generate a random number, and store it in the randomData array
			randomData.forEach((element) => {
				element.schedules[0].departure = Math.floor(
					Math.random() * (500 - 0) + 0
				);
				element.schedules[1].departure = Math.floor(
					Math.random() * (500 - 0) + 0
				);
				//If the first schedules is lower than the second, replace the first value by the second, and the second by the first
				if (element.schedules[0].departure > element.schedules[1].departure) {
					const change = element.schedules[0].departure;
					element.schedules[0].departure = element.schedules[1].departure;
					element.schedules[1].departure = change;
				}
			}),
			randomData.sort(function (a, b) {
				return a.schedules[0].departure - b.schedules[0].departure;
			})
		);
		console.log(randomData);
	}, []);

	return (
		<div className="App">
			{/* Logo component */}
			<Header />
			<div className="schedule">
				<h1>Prochains passages</h1>
				<div className="schedule-content">
					{/* Station and lines who serves this stop component */}
					<Station schedules={data} />
					{/* For each  */}
					{data.map((val, key) => {
						return (
							<Destinations
								key={key}
								data={val}
								line={val.line.id}
								direction={val.headsign}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Home;
