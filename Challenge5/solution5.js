// Challenge #5 - Voting Station Calculation

const stations = [
	["Big Bear Donair", 10, "restaurant"],
	["Bright Lights Elementary", 50, "school"],
	["Moose Mountain Community Centre", 45, "community centre"]
];

// SOLUTION 1
const chooseStations = stations => {
	const array_of_stations = [];
	for (const station of stations) {
		if (station[1] >= 20) {
			if (station[2] === "school" || station[2] === "community centre") {
				array_of_stations.push(station[0]);
				// console.log(station[0]);
				// console.log(array_of_stations);
			}
		}
	}
	return array_of_stations;
};
console.log(chooseStations(stations));

// SOLUTION 2
const chooseStations = stations =>
	stations
		.filter(
			station =>
				station[1] >= 20 &&
				(station[2] === "school" || station[2] === "community centre")
		)
		.map(station => station[0]);
console.log(chooseStations(stations));
