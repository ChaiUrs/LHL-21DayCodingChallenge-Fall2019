// Challenge 12 - In the Air Tonight

const samples = [
	"clean",
	"clean",
	"dirty",
	"clean",
	"dirty",
	"clean",
	"clean",
	"dirty",
	"clean",
	"dirty"
];
const threshold = 0.3;

//SOLUTION 1
const checkAir = function(samples, threshold) {
	var dirtySamples = samples.filter(sample => sample === "dirty");
	if (dirtySamples.length / samples.length < threshold) {
		return isDirty ? "Polluted" : "Clean";
	}
};
console.log(checkAir(samples, threshold));

//SOLUTION 2
const checkAir = function(samples, threshold) {
	const totalSamples = samples.length;
	const dirtySamples = samples.filter(sample => sample === "dirty").length;
	const airQualityRatio = dirtySamples / totalSamples;

	if (airQualityRatio >= threshold) {
		return "Polluted";
	} else {
		return "Clean";
	}
};
console.log(checkAir(samples, threshold));
