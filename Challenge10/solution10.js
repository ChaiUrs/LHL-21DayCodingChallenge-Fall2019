// Challenge 10 - SmartParking

const spots = [
	// COLUMNS ARE X & ROWS ARE Y
	//0    1    2    3    4    5
	["s", "s", "s", "S", "R", "M"], // 0
	["s", "M", "s", "S", "R", "M"], // 1
	["s", "M", "s", "S", "R", "m"], // 2
	["S", "r", "s", "m", "R", "M"], // 3
	["S", "r", "s", "m", "R", "M"], // 4
	["S", "r", "S", "M", "M", "S"] // 5
];

const vehicle = "regular"; // possible options are 'regular', 'small', or 'motorcycle'

// SOLUTION 1
const whereCanIPark = (spots, vehicle) => {
	const parkingSpots = {
		regular: ["R"],
		small: ["R", "S"],
		motorcycle: ["R", "S", "M"]
	};

	// x coordinate
	for (column = 0; column < spots.length; column++) {
		// y coordinate
		for (row = 0; row < spots.length; row++) {
			if (parkingSpots[vehicle].includes(spots[column][row])) {
				return [row, column];
			}
		}
	}
	return false;
};
console.log(whereCanIPark(spots, vehicle));

// SOLUTION 2
const whereCanIPark = (spots, vehicle) => {
	const regular = ["R"];
	const small = ["R", "S"];
	const motorcycle = ["R", "S", "M"];

	for (let row = 0; row < spots.length; row++) {
		for (let col = 0; col < spots[row].length; col++) {
			if (vehicle === "regular" && regular.includes(spots[row][col])) {
				return [col, row];
			} else if (vehicle === "small" && small.includes(spots[row][col])) {
				return [col, row];
			} else if (
				vehicle === "motorcycle" &&
				motorcycle.includes(spots[row][col])
			) {
				return [col, row];
			}
		}
	}
	return false;
};
console.log(whereCanIPark(spots, vehicle));
