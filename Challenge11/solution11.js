// Challenge 11 - You Can't Hurry Transit

const buses = {
	pickadilly: {
		distance: 10,
		speed: 5
	},
	uptown: {
		distance: 13,
		speed: 10
	}
};

// SOLUTION 1
const busTimes = buses => {
	var arrivalTimes = {};
	for (var busArrival in buses) {
		arrivalTimes[busArrival] =
			buses[busArrival].distance / buses[busArrival].speed;
	}
	return arrivalTimes;
};
console.log(busTimes(buses));

// SOLUTION 2
const busTimes = buses => {
	for (var [arrivals] of Object.entries(buses)) {
		buses[arrivals] = buses[arrivals].distance / buses[arrivals].speed;
	}
	return buses;
};
console.log(busTimes(buses));
