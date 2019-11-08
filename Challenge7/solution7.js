// Challenge 7 - You Choose, (You Don't) Lose

const interviews = [
	"smart city",
	"rebuild the lighthouse",
	"arts funding",
	"transportation",
	"arts funding",
	"rebuild the lighthouse",
	"sports funding",
	"tax cuts",
	"smart city",
	"arts funding",
	"smart city"
];

//SOLUTION 1
const termTopics = interviews => {
	let count = [0, 0, 0];
	for (let i = 0; i < interviews.length; i++) {
		if (interviews[i] === "smart city") {
			count[0]++;
			console.log(`Smart City count : ${count[0]}`);
		}
		if (interviews[i] === "arts funding") {
			count[1]++;
			console.log(`Arts Funding count : ${count[1]}`);
		}
		if (interviews[i] === "transportation") {
			count[2]++;
			console.log(`Transportation count : ${count[2]}`);
		}
	}
	return count;
};
console.log(termTopics(interviews));

// SOLUTION 2
const termTopics = interviews => [
	interviews.filter(count => count === "smart city").length,
	interviews.filter(count => count === "arts funding").length,
	interviews.filter(count => count === "transportation").length
];
console.log(termTopics(interviews));
