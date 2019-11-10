// Challenge 9 - Driving Mayor Daisy

const cars = [
	{
		time: 1568329654807,
		speed: 40
	},
	{
		time: 1568329821632,
		speed: 42
	},
	{
		time: 1568331115463,
		speed: 35
	}
];

const speed = 38;

// SOLUTION 1
const carPassing = (cars, speed) => {
	return [
		...cars,
		{
			time: Date.now(),
			speed: speed
		}
	];
};
console.log(carPassing(cars, speed));

// SOLUTION 2
const carPassing = (cars, speed) => {
	var updateCarData = {
		time: Date.now(),
		speed: speed
	};
	cars.push(updateCarData);
	return cars;
};
console.log(carPassing(cars, speed));
